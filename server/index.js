import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { getDatabase, saveDatabase } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// =======================================================
// 1. MEDIDAS DE SEGURIDAD HTTP Y CABECERAS DEFENSIVAS
// =======================================================
app.use((req, res, next) => {
  // Prevenir Clickjacking
  res.setHeader('X-Frame-Options', 'DENY');
  // Prevenir MIME-sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');
  // Activar filtro XSS del navegador
  res.setHeader('X-XSS-Protection', '1; mode=block');
  // Política de referrer estricta
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  // Ocultar tecnología subyacente
  res.removeHeader('X-Powered-By');
  next();
});

app.use(cors({
  origin: true,
  credentials: true
}));

// Límite de payload para mitigar ataques DoS por sobrecarga de memoria
app.use(express.json({ limit: '2mb' }));

// =======================================================
// 2. SANITIZACIÓN DEFENSIVA Y VALIDACIÓN DE ENTRADAS
// =======================================================
function sanitizeText(str, maxLen = 300) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[<>]/g, '') // Mitigación XSS almacenado
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '') // Eliminar caracteres de control
    .trim()
    .slice(0, maxLen);
}

function sanitizeNumber(val, defaultVal = 0, min = 0, max = 10000000) {
  const num = Number(val);
  if (isNaN(num) || !isFinite(num)) return defaultVal;
  if (num < min) return min;
  if (num > max) return max;
  return Math.round(num * 100) / 100;
}

// =======================================================
// 3. AUTENTICACIÓN CORPORATIVA Y CONTROL DE ACCESO
// =======================================================
const AUTH_SECRET = process.env.AUTH_SECRET || 'deepcool-latam-marketing-secret-token-2026';

// Usuarios corporativos con hash PBKDF2
const USERS = [
  {
    id: 'u-1',
    email: 'marketing@deepcool.com',
    passwordHash: hashPassword('DeepCool2026!'),
    nombre: 'Dirección de Marketing',
    cargo: 'Directora de Marketing LATAM',
    avatar: 'DM'
  },
  {
    id: 'u-2',
    email: 'operaciones@deepcool.com',
    passwordHash: hashPassword('Logistica2026!'),
    nombre: 'Operaciones & Envíos',
    cargo: 'Coordinador de Logística',
    avatar: 'OP'
  },
  {
    id: 'u-3',
    email: 'admin@deepcool.com',
    passwordHash: hashPassword('AdminDeepCool!'),
    nombre: 'Administración DeepCool',
    cargo: 'Gerente General',
    avatar: 'AD'
  }
];

function hashPassword(pass) {
  return crypto.pbkdf2Sync(pass, AUTH_SECRET, 1000, 64, 'sha512').toString('hex');
}

// Almacén de sesiones en memoria con expiración
const activeSessions = new Map();

// Control de intentos de login por IP (Mitigación de fuerza bruta)
const loginRateLimiter = new Map();
function isRateLimited(ip) {
  const now = Date.now();
  const entry = loginRateLimiter.get(ip) || { count: 0, first: now };
  if (now - entry.first > 10 * 60 * 1000) {
    loginRateLimiter.set(ip, { count: 1, first: now });
    return false;
  }
  if (entry.count >= 15) return true; // Bloquear tras 15 intentos fallidos
  entry.count += 1;
  loginRateLimiter.set(ip, entry);
  return false;
}

// Middleware de Autenticación
function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ ok: false, error: 'No autorizado: sesión requerida' });
  }

  const token = authHeader.split(' ')[1];
  const session = activeSessions.get(token);

  if (!session || session.expiresAt < Date.now()) {
    if (session) activeSessions.delete(token);
    return res.status(401).json({ ok: false, error: 'Sesión expirada o inválida' });
  }

  req.user = session.user;
  next();
}

// =======================================================
// 4. ENDPOINTS DE AUTENTICACIÓN
// =======================================================
app.post('/api/auth/login', (req, res) => {
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({
      ok: false,
      error: 'Demasiados intentos fallidos. Intenta nuevamente en 10 minutos.'
    });
  }

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ ok: false, error: 'Correo y contraseña requeridos' });
  }

  const cleanEmail = email.toLowerCase().trim();
  const user = USERS.find(u => u.email === cleanEmail);

  if (!user) {
    return res.status(401).json({ ok: false, error: 'Credenciales inválidas' });
  }

  const inputHash = hashPassword(password);
  // Comparación segura con tiempo constante para evitar timing attacks
  const isMatch = crypto.timingSafeEqual(
    Buffer.from(inputHash, 'hex'),
    Buffer.from(user.passwordHash, 'hex')
  );

  if (!isMatch) {
    return res.status(401).json({ ok: false, error: 'Credenciales inválidas' });
  }

  // Generar token criptográficamente seguro
  const token = crypto.randomBytes(32).toString('hex');
  const sessionData = {
    user: {
      id: user.id,
      email: user.email,
      nombre: user.nombre,
      cargo: user.cargo,
      avatar: user.avatar
    },
    expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000 // 7 días de validez
  };

  activeSessions.set(token, sessionData);

  res.json({
    ok: true,
    token,
    user: sessionData.user
  });
});

app.get('/api/auth/me', requireAuth, (req, res) => {
  res.json({ ok: true, user: req.user });
});

app.post('/api/auth/logout', requireAuth, (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token) activeSessions.delete(token);
  res.json({ ok: true, message: 'Sesión cerrada correctamente' });
});

// =======================================================
// 5. ENDPOINTS DE NEGOCIO (PROTEGIDOS CON SANITIZACIÓN)
// =======================================================

// 1. Obtener notas y estado
app.get('/api/notas', (req, res) => {
  const { tienda, estatusPago, search } = req.query;
  const db = getDatabase();
  let notas = db.notas || [];

  if (tienda && tienda !== 'TODAS') {
    const tClean = sanitizeText(tienda, 50).toUpperCase();
    notas = notas.filter(n => (n.tienda || '').toUpperCase() === tClean);
  }

  if (estatusPago && estatusPago !== 'TODOS') {
    const epClean = sanitizeText(estatusPago, 20).toUpperCase();
    notas = notas.filter(n => (n.estatusPago || '').toUpperCase() === epClean);
  }

  if (search) {
    const q = sanitizeText(search, 100).toLowerCase();
    notas = notas.filter(n =>
      (n.producto || '').toLowerCase().includes(q) ||
      (n.marca || '').toLowerCase().includes(q) ||
      (n.tienda || '').toLowerCase().includes(q) ||
      (n.medio || '').toLowerCase().includes(q) ||
      (n.destinatario || '').toLowerCase().includes(q) ||
      (n.numeroNC || '').toLowerCase().includes(q) ||
      (n.comprobantePago || '').toLowerCase().includes(q) ||
      (n.fecha || '').toLowerCase().includes(q)
    );
  }

  res.json({
    ok: true,
    data: notas,
    proveedores: db.proveedores || [],
    marcas: db.marcas || [],
    creadores: db.creadores || []
  });
});

// 2. Crear nueva nota
app.post('/api/notas', (req, res) => {
  const db = getDatabase();
  const body = req.body;

  const tiendaNombre = sanitizeText(body.tienda || 'DDTECH', 50).toUpperCase();
  if (tiendaNombre && !db.proveedores.some(p => p.nombre.toUpperCase() === tiendaNombre)) {
    db.proveedores.push({
      id: `p-${Date.now()}`,
      nombre: tiendaNombre,
      color: 'from-violet-500 to-purple-600',
      diasCredito: 30
    });
  }

  const marcaNombre = sanitizeText(body.marca || 'DeepCool', 50);
  if (!db.marcas.includes(marcaNombre)) {
    db.marcas.push(marcaNombre);
  }

  const nuevaNota = {
    id: `nota-${Date.now()}`,
    marca: marcaNombre,
    fecha: sanitizeText(body.fecha || 'Hoy', 50),
    fechaISO: sanitizeText(body.fechaISO || new Date().toISOString().split('T')[0], 20),
    tienda: tiendaNombre,
    monto: sanitizeNumber(body.monto, 0),
    estatusPago: sanitizeText(body.estatusPago || 'PENDIENTE', 20).toUpperCase(),
    numeroNC: sanitizeText(body.numeroNC || '', 50),
    comprobantePago: sanitizeText(body.comprobantePago || '', 80),
    producto: sanitizeText(body.producto || 'Producto sin especificar', 150),
    medio: sanitizeText(body.medio || '', 100),
    destinatario: sanitizeText(body.destinatario || '', 100),
    direccion: sanitizeText(body.direccion || '', 200),
    telefono: (body.telefono || '').toString().replace(/\D/g, '').slice(0, 15),
    estatusEnvio: sanitizeText(body.estatusEnvio || 'Pendiente', 30),
    guiaEnvio: sanitizeText(body.guiaEnvio || '', 60),
    paqueteria: sanitizeText(body.paqueteria || 'DHL', 40),
    fechaEntrega: sanitizeText(body.fechaEntrega || '', 20),
    esCreador: Boolean(body.esCreador),
    fechaLimite: sanitizeText(body.fechaLimite || '', 20),
    linkEvidencia: sanitizeText(body.linkEvidencia || '', 250),
    estatusContenido: body.linkEvidencia ? 'Entregado' : (body.esCreador ? 'Pendiente' : 'No aplica')
  };

  db.notas.unshift(nuevaNota);
  saveDatabase(db);
  res.status(201).json({ ok: true, data: nuevaNota, proveedores: db.proveedores });
});

// 3. Importación masiva
app.post('/api/notas/importar', (req, res) => {
  const { filas } = req.body;
  if (!Array.isArray(filas) || filas.length === 0) {
    return res.status(400).json({ ok: false, error: 'No se enviaron filas válidas' });
  }

  // Prevenir desbordamiento de memoria por archivos masivos maliciosos
  if (filas.length > 500) {
    return res.status(400).json({ ok: false, error: 'El archivo excede el límite máximo de 500 filas por carga.' });
  }

  const db = getDatabase();
  const importadas = [];

  filas.forEach((f, idx) => {
    const tienda = sanitizeText(f.tienda || f.TIENDA || 'DDTECH', 50).toUpperCase();
    if (tienda && !db.proveedores.some(p => p.nombre.toUpperCase() === tienda)) {
      db.proveedores.push({
        id: `p-${Date.now()}-${idx}`,
        nombre: tienda,
        color: 'from-pink-500 to-rose-600',
        diasCredito: 30
      });
    }

    const nueva = {
      id: `nota-${Date.now()}-${idx}`,
      marca: sanitizeText(f.marca || f.MARCA || 'DeepCool', 50),
      fecha: sanitizeText(f.fecha || f.FECHA || 'Hoy', 50),
      fechaISO: sanitizeText(f.fechaISO || new Date().toISOString().split('T')[0], 20),
      tienda: tienda,
      monto: sanitizeNumber(f.monto || f.MONTO, 2000),
      estatusPago: sanitizeText(f.estatusPago || f['NOTA DE CRÉDITO'] || f.estatus || 'PENDIENTE', 20).toUpperCase(),
      numeroNC: sanitizeText(f.numeroNC || f['# DE NC'] || '', 50),
      comprobantePago: sanitizeText(f.comprobantePago || f['COMPROBANTE'] || '', 80),
      producto: sanitizeText(f.producto || f.PRODUCTO || 'Producto Importado', 150),
      medio: sanitizeText(f.medio || f.MEDIO || '', 100),
      destinatario: sanitizeText(f.destinatario || f['NOMBRE/DIRECCIÓN'] || f.nombre || '', 100),
      direccion: sanitizeText(f.direccion || f['NOMBRE/DIRECCIÓN'] || '', 200),
      telefono: (f.telefono || '').toString().replace(/\D/g, '').slice(0, 15),
      estatusEnvio: sanitizeText(f.estatusEnvio || f['ESTATUS DE ENVÍO'] || 'Entregado', 30),
      guiaEnvio: sanitizeText(f.guiaEnvio || '', 60),
      paqueteria: sanitizeText(f.paqueteria || 'DHL', 40),
      fechaEntrega: sanitizeText(f.fechaEntrega || '', 20),
      esCreador: Boolean(f.esCreador || f.fechaLimite),
      fechaLimite: sanitizeText(f.fechaLimite || '', 20),
      linkEvidencia: sanitizeText(f.linkEvidencia || '', 250),
      estatusContenido: f.linkEvidencia ? 'Entregado' : (f.fechaLimite ? 'Pendiente' : 'No aplica')
    };

    importadas.push(nueva);
  });

  db.notas = [...importadas, ...(db.notas || [])];
  saveDatabase(db);
  res.json({ ok: true, totalImportadas: importadas.length, data: db.notas });
});

// 4. Actualizar nota
app.put('/api/notas/:id', (req, res) => {
  const { id } = req.params;
  const db = getDatabase();
  const index = db.notas.findIndex(n => n.id === id);

  if (index === -1) {
    return res.status(404).json({ ok: false, error: 'Nota no encontrada' });
  }

  const existing = db.notas[index];
  const b = req.body;

  const updated = {
    ...existing,
    ...(b.monto !== undefined && { monto: sanitizeNumber(b.monto, existing.monto) }),
    ...(b.numeroNC !== undefined && { numeroNC: sanitizeText(b.numeroNC, 50) }),
    ...(b.comprobantePago !== undefined && { comprobantePago: sanitizeText(b.comprobantePago, 80) }),
    ...(b.estatusPago !== undefined && { estatusPago: sanitizeText(b.estatusPago, 20).toUpperCase() }),
    ...(b.estatusEnvio !== undefined && { estatusEnvio: sanitizeText(b.estatusEnvio, 30) }),
    ...(b.paqueteria !== undefined && { paqueteria: sanitizeText(b.paqueteria, 40) }),
    ...(b.guiaEnvio !== undefined && { guiaEnvio: sanitizeText(b.guiaEnvio, 60) }),
    ...(b.linkEvidencia !== undefined && {
      linkEvidencia: sanitizeText(b.linkEvidencia, 250),
      estatusContenido: b.linkEvidencia && b.linkEvidencia.trim().length > 0 ? 'Entregado' : existing.estatusContenido
    })
  };

  db.notas[index] = updated;
  saveDatabase(db);
  res.json({ ok: true, data: updated });
});

// 5. Eliminar nota
app.delete('/api/notas/:id', (req, res) => {
  const { id } = req.params;
  const db = getDatabase();
  db.notas = (db.notas || []).filter(n => n.id !== id);
  saveDatabase(db);
  res.json({ ok: true, message: 'Nota eliminada' });
});

// 6. Creadores CRUD
app.get('/api/creadores', (req, res) => {
  const db = getDatabase();
  res.json({ ok: true, data: db.creadores || [] });
});

app.post('/api/creadores', (req, res) => {
  const db = getDatabase();
  const body = req.body;
  const nuevo = {
    id: `cr-${Date.now()}`,
    nombre: sanitizeText(body.nombre || 'Nuevo Creador', 100),
    alias: sanitizeText(body.alias || '@creador', 60),
    redes: {
      instagram: sanitizeText(body.redes?.instagram || '', 60),
      tiktok: sanitizeText(body.redes?.tiktok || '', 60),
      youtube: sanitizeText(body.redes?.youtube || '', 60),
      twitch: sanitizeText(body.redes?.twitch || '', 60)
    },
    telefono: (body.telefono || '').toString().replace(/\D/g, '').slice(0, 15),
    agencia: sanitizeText(body.agencia || 'Directo', 80),
    direccion: sanitizeText(body.direccion || '', 200),
    confiabilidad: sanitizeNumber(body.confiabilidad, 90, 0, 100)
  };
  db.creadores = db.creadores || [];
  db.creadores.unshift(nuevo);
  saveDatabase(db);
  res.json({ ok: true, data: nuevo });
});

// 7. Proveedores CRUD
app.post('/api/proveedores', (req, res) => {
  const db = getDatabase();
  const { nombre, diasCredito } = req.body;
  const limpio = sanitizeText(nombre || '', 50).toUpperCase();
  if (!limpio) return res.status(400).json({ error: 'Nombre requerido' });

  let prov = db.proveedores.find(p => p.nombre.toUpperCase() === limpio);
  if (!prov) {
    prov = {
      id: `p-${Date.now()}`,
      nombre: limpio,
      color: 'from-cyan-500 to-blue-600',
      diasCredito: sanitizeNumber(diasCredito, 30, 1, 365)
    };
    db.proveedores.push(prov);
    saveDatabase(db);
  }
  res.json({ ok: true, data: prov, proveedores: db.proveedores });
});

// 8. Endpoint exclusivo para n8n (público / webhook de consulta)
app.get('/api/n8n/pendientes', (req, res) => {
  const db = getDatabase();
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const pendientes = (db.notas || [])
    .filter(n => n.esCreador && n.fechaLimite && n.estatusContenido !== 'Entregado')
    .map(n => {
      const [y, m, d] = n.fechaLimite.split('-').map(Number);
      const target = new Date(y, m - 1, d);
      target.setHours(0, 0, 0, 0);
      const diffDias = Math.round((target.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));

      let alerta = 'en_tiempo';
      if (diffDias < 0) alerta = 'vencido_retraso';
      else if (diffDias === 0) alerta = 'vence_hoy';
      else if (diffDias <= 3) alerta = 'preventivo_3_dias';

      return {
        id: n.id,
        marca: n.marca,
        tienda: n.tienda,
        monto: n.monto,
        producto: n.producto,
        medio: n.medio,
        creador: n.destinatario,
        telefono: n.telefono,
        fechaLimite: n.fechaLimite,
        diasRestantes: diffDias,
        tipoAlerta: alerta
      };
    });

  res.json({ ok: true, total: pendientes.length, data: pendientes });
});

// Servir frontend compilado
const DIST_DIR = path.join(__dirname, '..', 'dist');
if (fs.existsSync(DIST_DIR)) {
  app.use(express.static(DIST_DIR));
  app.get('*', (req, res) => {
    if (!req.path.startsWith('/api')) {
      res.sendFile(path.join(DIST_DIR, 'index.html'));
    }
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor DeepCool activo en http://localhost:${PORT}`);
});
