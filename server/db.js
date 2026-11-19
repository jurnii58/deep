import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '..', 'data');
const DB_FILE = path.join(DATA_DIR, 'notas.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const initialDatabase = {
  proveedores: [
    { id: 'p-1', nombre: 'DDTECH', color: 'from-blue-500 to-indigo-600', diasCredito: 30 },
    { id: 'p-2', nombre: 'SUPERMEX', color: 'from-emerald-500 to-teal-600', diasCredito: 30 },
    { id: 'p-3', nombre: 'CYBERPUERTA', color: 'from-amber-500 to-orange-600', diasCredito: 45 }
  ],
  marcas: ['DeepCool', 'GamerStorm', 'Otra'],
  creadores: [
    {
      id: 'cr-1',
      nombre: 'Alondra (UDG Esports)',
      alias: '@udg_esports',
      redes: { instagram: '@udg_esports', twitch: 'udg_gaming', youtube: 'UDG Esports' },
      telefono: '523314509981',
      agencia: 'Universidad de Guadalajara',
      direccion: 'Sede UDG Esports, Guadalajara, Jalisco',
      confiabilidad: 95
    },
    {
      id: 'cr-2',
      nombre: 'Lazaro Capaldi',
      alias: '@lazarocapaldi_irl',
      redes: { tiktok: '@lazarocapaldi', twitch: 'lazarocapaldi', instagram: '@lazarocapaldi_irl' },
      telefono: '525539102844',
      agencia: 'Ingenia',
      direccion: 'Av. Manuel de la Colina Riquelme 84, CDMX',
      confiabilidad: 88
    },
    {
      id: 'cr-3',
      nombre: 'Carlos "TechSigma" Rivera',
      alias: '@techsigma_pc',
      redes: { youtube: 'TechSigma PC', tiktok: '@techsigma_pc' },
      telefono: '524462135863',
      agencia: 'Directo',
      direccion: 'Domicilio Tlacote 130, Querétaro',
      confiabilidad: 80
    }
  ],
  notas: [
    {
      id: 'nota-1',
      marca: 'DeepCool',
      fecha: '19 de Noviembre',
      fechaISO: '2026-11-19',
      tienda: 'DDTECH',
      monto: 2499,
      estatusPago: 'PENDIENTE',
      numeroNC: '',
      comprobantePago: '',
      producto: 'Enfriamiento Líquido LM360 ARGB White 360mm',
      medio: 'PAGO UDG ESPORTS (ALONDRA)',
      destinatario: 'Alondra (UDG Esports)',
      direccion: 'Sede UDG Esports, Guadalajara',
      telefono: '523314509981',
      estatusEnvio: 'Entregado',
      guiaEnvio: 'DHL-994810231',
      paqueteria: 'DHL',
      fechaEntrega: '2026-11-20',
      esCreador: true,
      fechaLimite: '2026-11-25',
      linkEvidencia: '',
      estatusContenido: 'Pendiente'
    },
    {
      id: 'nota-2',
      marca: 'DeepCool',
      fecha: '19 de Noviembre',
      fechaISO: '2026-11-19',
      tienda: 'SUPERMEX',
      monto: 1899,
      estatusPago: 'PENDIENTE',
      numeroNC: '',
      comprobantePago: '',
      producto: 'Gabinete CG580 Negro Panorámico ATX',
      medio: 'TORNEO HALO',
      destinatario: 'Genaro Estrada',
      direccion: 'Domicilio Genaro Estrada 190, W-201',
      telefono: '525548102201',
      estatusEnvio: 'Entregado',
      guiaEnvio: 'FDX-771230901',
      paqueteria: 'FedEx',
      fechaEntrega: '2026-11-20',
      esCreador: false,
      fechaLimite: '',
      linkEvidencia: '',
      estatusContenido: 'No aplica'
    },
    {
      id: 'nota-3',
      marca: 'DeepCool',
      fecha: '18 de Noviembre',
      fechaISO: '2026-11-18',
      tienda: 'SUPERMEX',
      monto: 2150,
      estatusPago: 'PENDIENTE',
      numeroNC: '',
      comprobantePago: '',
      producto: 'Enfriamiento Líquido LP240 Pantalla Matrix Dot 240mm',
      medio: 'TORNEO HALO',
      destinatario: 'Genaro Estrada',
      direccion: 'Domicilio Genaro Estrada 190, W-201',
      telefono: '525548102201',
      estatusEnvio: 'Entregado',
      guiaEnvio: 'FDX-771230901',
      paqueteria: 'FedEx',
      fechaEntrega: '2026-01-15',
      esCreador: false,
      fechaLimite: '',
      linkEvidencia: '',
      estatusContenido: 'No aplica'
    },
    {
      id: 'nota-4',
      marca: 'DeepCool',
      fecha: '12 DE ENERO',
      fechaISO: '2026-01-12',
      tienda: 'SUPERMEX',
      monto: 2150,
      estatusPago: 'PENDIENTE',
      numeroNC: '',
      comprobantePago: '',
      producto: 'Enfriamiento Líquido LP240 Pantalla Matrix Dot 240mm',
      medio: 'TORNEO HALO',
      destinatario: 'José L. Martínez Hernández',
      direccion: 'Domicilio José L. Martínez Hernández',
      telefono: '523318920683',
      estatusEnvio: 'Entregado',
      guiaEnvio: 'FDX-771230902',
      paqueteria: 'FedEx',
      fechaEntrega: '2026-01-16',
      esCreador: false,
      fechaLimite: '',
      linkEvidencia: '',
      estatusContenido: 'No aplica'
    },
    {
      id: 'nota-5',
      marca: 'DeepCool',
      fecha: '12 DE ENERO',
      fechaISO: '2026-01-12',
      tienda: 'SUPERMEX',
      monto: 2150,
      estatusPago: 'PENDIENTE',
      numeroNC: '',
      comprobantePago: '',
      producto: 'Enfriamiento Líquido LP240 Pantalla Matrix Dot 240mm',
      medio: 'TORNEO HALO',
      destinatario: 'Antonio Ruiz Galindo',
      direccion: 'Domicilio Antonio Ruiz Galindo 42',
      telefono: '525541982577',
      estatusEnvio: 'En tránsito',
      guiaEnvio: 'FDX-771230903',
      paqueteria: 'FedEx',
      fechaEntrega: '',
      esCreador: false,
      fechaLimite: '',
      linkEvidencia: '',
      estatusContenido: 'No aplica'
    },
    {
      id: 'nota-6',
      marca: 'DeepCool',
      fecha: '12 DE ENERO',
      fechaISO: '2026-01-12',
      tienda: 'SUPERMEX',
      monto: 2150,
      estatusPago: 'PENDIENTE',
      numeroNC: '',
      comprobantePago: '',
      producto: 'Enfriamiento Líquido LP240 Pantalla Matrix Dot 240mm',
      medio: 'TORNEO HALO',
      destinatario: 'Ganador Querétaro',
      direccion: 'Domicilio Tlacote 130, Querétaro',
      telefono: '524462135863',
      estatusEnvio: 'Pendiente',
      guiaEnvio: 'FDX-771230904',
      paqueteria: 'FedEx',
      fechaEntrega: '',
      esCreador: false,
      fechaLimite: '',
      linkEvidencia: '',
      estatusContenido: 'No aplica'
    },
    {
      id: 'nota-7',
      marca: 'DeepCool',
      fecha: '12 DE ENERO',
      fechaISO: '2026-01-12',
      tienda: 'SUPERMEX',
      monto: 2290,
      estatusPago: 'PAGADA',
      numeroNC: 'NC-SP-2026-091',
      comprobantePago: 'SPEI-BBVA-99410293',
      producto: 'Gabinete CH560 Digital Blanco High Airflow',
      medio: 'Lazaro Capaldi IRL "sample Ingenia"',
      destinatario: 'Lazaro Capaldi',
      direccion: 'Av. Manuel de la Colina Riquelme 84',
      telefono: '525539102844',
      estatusEnvio: 'Entregado',
      guiaEnvio: 'EST-88401922',
      paqueteria: 'Estafeta',
      fechaEntrega: '2026-01-14',
      esCreador: true,
      fechaLimite: '2026-01-25',
      linkEvidencia: '',
      estatusContenido: 'Pendiente'
    }
  ]
};

export function getDatabase() {
  if (!fs.existsSync(DB_FILE)) {
    saveDatabase(initialDatabase);
    return initialDatabase;
  }
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    if (!parsed.notas) {
      const migrated = {
        proveedores: initialDatabase.proveedores,
        marcas: initialDatabase.marcas,
        creadores: initialDatabase.creadores,
        notas: Array.isArray(parsed) ? parsed : initialDatabase.notas
      };
      saveDatabase(migrated);
      return migrated;
    }
    // Asegurar que cada nota tenga campo monto y comprobantePago
    let changed = false;
    parsed.notas.forEach((n, idx) => {
      if (n.monto === undefined) {
        n.monto = idx % 2 === 0 ? 2499 : 1899;
        changed = true;
      }
      if (n.comprobantePago === undefined) {
        n.comprobantePago = n.estatusPago === 'PAGADA' ? 'SPEI-BBVA-12345' : '';
        changed = true;
      }
    });
    if (changed) saveDatabase(parsed);
    return parsed;
  } catch (err) {
    console.error('Error leyendo base de datos, usando inicial:', err);
    return initialDatabase;
  }
}

export function saveDatabase(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
}
