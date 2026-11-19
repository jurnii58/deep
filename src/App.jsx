import React, { useState, useEffect, useMemo } from 'react';
import {
  LayoutDashboard,
  Receipt,
  Truck,
  Video,
  Bot,
  BarChart3,
  Calendar as CalendarIcon,
  Plus,
  Search,
  Download,
  Upload,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ExternalLink,
  Trash2,
  Edit3,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  RefreshCw,
  Phone,
  Link2,
  Store,
  Layers,
  Sparkles,
  FileSpreadsheet,
  ArrowUpRight,
  ShieldCheck,
  Tag,
  DollarSign,
  Package,
  MapPin,
  FileText,
  LogOut,
  User,
  Lock
} from 'lucide-react';

const formatMoney = (val) =>
  new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0
  }).format(Number(val || 0));

// Iconos Oficiales Vectoriales de Alta Definición para Redes Sociales
function IconInstagram({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="igCardGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <rect width="20" height="20" x="2" y="2" rx="5" fill="url(#igCardGrad)" />
      <path stroke="#ffffff" strokeWidth="1.8" d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="#ffffff" />
    </svg>
  );
}

function IconTikTok({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="20" height="20" x="2" y="2" rx="5" fill="#000000" />
      <path
        fill="#00F2FE"
        d="M14.5 4.5v2.8c1.1.8 2.2 1.2 3.5 1.3v2.8c-1.3 0-2.4-.4-3.5-1.1v5.2c0 2.6-2.1 4.7-4.7 4.7-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7c.4 0 .8.1 1.2.2v2.9c-.4-.2-.8-.3-1.2-.3-1 0-1.9.9-1.9 1.9s.9 1.9 1.9 1.9 1.9-.9 1.9-1.9V4.5h2.8z"
      />
      <path
        fill="#FE2C55"
        d="M15.2 5.2v2.8c1.1.8 2.2 1.2 3.5 1.3v2.8c-1.3 0-2.4-.4-3.5-1.1v5.2c0 2.6-2.1 4.7-4.7 4.7-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7c.4 0 .8.1 1.2.2v2.9c-.4-.2-.8-.3-1.2-.3-1 0-1.9.9-1.9 1.9s.9 1.9 1.9 1.9 1.9-.9 1.9-1.9V5.2h2.8z"
        opacity="0.85"
      />
    </svg>
  );
}

function IconYouTube({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="20" height="15" x="2" y="4.5" rx="4" fill="#FF0000" />
      <polygon points="10,8 16,12 10,16" fill="#FFFFFF" />
    </svg>
  );
}

function IconTwitch({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="20" height="20" x="2" y="2" rx="5" fill="#9146FF" />
      <path
        fill="#FFFFFF"
        d="M6 5.5h12v7.5l-3 3h-2.5l-2 2v-2H7.5l-1.5-1.5v-9zm2 2v6h2v-6H8zm4 0v6h2v-6h-2z"
      />
    </svg>
  );
}

function IconWhatsApp({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#25D366" />
      <path
        fill="#FFFFFF"
        d="M17.4 14.7c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.2-.7.2-.2.3-.4.5-.6.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.9.3 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.5.2-1.7-.1-.2-.3-.3-.6-.5z"
      />
    </svg>
  );
}

// =======================================================
// ICONOS ÚNICOS DE IDENTIDAD DEEPCOOL (DISEÑO CORPORATIVO)
// =======================================================

function IconNavDashboard({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="9" rx="1.5" />
      <rect x="14" y="3" width="7" height="5" rx="1.5" />
      <rect x="14" y="12" width="7" height="9" rx="1.5" />
      <rect x="3" y="16" width="7" height="5" rx="1.5" />
      <circle cx="6.5" cy="7.5" r="1" fill="#008C8C" stroke="none" />
      <circle cx="17.5" cy="16.5" r="1" fill="#008C8C" stroke="none" />
    </svg>
  );
}

function IconNavFinanzas({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16v16l-3-2-3 2-2-1.5-3 2-2-1.5L4 20V4z" />
      <path d="M8 8h8" />
      <path d="M8 12h5" />
      <circle cx="15.5" cy="13.5" r="2.5" fill="#E6F4F4" stroke="#008C8C" strokeWidth="1.5" />
      <path d="M14.5 13.5h2" stroke="#008C8C" strokeWidth="1.5" />
    </svg>
  );
}

function IconNavLogistica({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="5" width="13" height="11" rx="1.5" />
      <path d="M14 9h4l3 3v4h-7V9z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="17.5" cy="18.5" r="2.5" />
      <path d="M5.5 9h4" stroke="#008C8C" strokeWidth="1.8" />
      <path d="M7.5 7v4" stroke="#008C8C" strokeWidth="1.8" />
    </svg>
  );
}

function IconNavCreadores({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
      <path d="M17 10l5-3v10l-5-3v-4z" />
      <circle cx="10" cy="12" r="2.5" fill="#E6F4F4" stroke="#008C8C" strokeWidth="1.5" />
      <polygon points="9.5,11 11.5,12 9.5,13" fill="#008C8C" stroke="none" />
    </svg>
  );
}

function IconNavAutomations({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="12" cy="18" r="3" />
      <path d="M8.5 7.5L12 15l3.5-7.5" stroke="#008C8C" />
      <path d="M9 6h6" />
      <circle cx="12" cy="18" r="1" fill="#008C8C" stroke="none" />
    </svg>
  );
}

function IconNavReportes({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 20h18" />
      <rect x="5" y="11" width="3" height="6" rx="0.8" fill="#E6F4F4" stroke="#008C8C" strokeWidth="1.5" />
      <rect x="10.5" y="7" width="3" height="10" rx="0.8" />
      <rect x="16" y="4" width="3" height="13" rx="0.8" fill="#E6F4F4" stroke="#008C8C" strokeWidth="1.5" />
      <path d="M4 10l5-4 4 3 6-5" stroke="#008C8C" strokeWidth="1.8" />
    </svg>
  );
}

function IconCalendarSync({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4" />
      <path d="M3 10h18" />
      <circle cx="12" cy="15" r="2" fill="#008C8C" stroke="none" />
    </svg>
  );
}

function IconHardwareBox({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
      <circle cx="12" cy="8" r="1.5" fill="#008C8C" stroke="none" />
    </svg>
  );
}

// Iconos Exclusivos para Perfiles de Acceso Corporativo DeepCool (Sin Emojis)
function IconRoleMarketing({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 18h16" />
      <path d="M4 18l1.8-9.5 4.2 3.8 2-6.3 2 6.3 4.2-3.8L20 18H4z" fill="currentColor" fillOpacity="0.12" />
      <circle cx="12" cy="6" r="1.3" fill="#008C8C" stroke="none" />
      <circle cx="5.8" cy="8.5" r="1.1" fill="#008C8C" stroke="none" />
      <circle cx="18.2" cy="8.5" r="1.1" fill="#008C8C" stroke="none" />
    </svg>
  );
}

function IconRoleOperaciones({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" fill="currentColor" fillOpacity="0.12" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
      <path d="M9 4.8l6 3.4" stroke="#008C8C" strokeWidth="1.6" />
      <circle cx="12" cy="16" r="1.3" fill="#008C8C" stroke="none" />
    </svg>
  );
}

// Mini DatePicker Didáctico y Elegante (Estilo Minimalista DeepCool)
function MiniDatePicker({ valueISO, onChange, label, placeholder = 'Seleccionar fecha' }) {
  const [open, setOpen] = useState(false);
  const initial = valueISO ? new Date(valueISO + 'T00:00:00') : new Date();
  const [viewDate, setViewDate] = useState(isNaN(initial.getTime()) ? new Date() : initial);

  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const primerDia = new Date(year, month, 1).getDay();
  const diasEnMes = new Date(year, month + 1, 0).getDate();

  const selectedISO = valueISO || '';

  const handleSelectDay = (dia) => {
    const mStr = String(month + 1).padStart(2, '0');
    const dStr = String(dia).padStart(2, '0');
    const iso = `${year}-${mStr}-${dStr}`;
    const texto = `${dia} de ${meses[month]}`;
    onChange(iso, texto);
    setOpen(false);
  };

  const handleSelectHoy = () => {
    const hoy = new Date();
    const y = hoy.getFullYear();
    const m = hoy.getMonth();
    const d = hoy.getDate();
    const iso = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const texto = `${d} de ${meses[m]}`;
    setViewDate(hoy);
    onChange(iso, texto);
    setOpen(false);
  };

  const displayTexto = useMemo(() => {
    if (!valueISO) return placeholder;
    const parts = valueISO.split('-');
    if (parts.length === 3) {
      const y = parts[0];
      const mIdx = parseInt(parts[1], 10) - 1;
      const d = parseInt(parts[2], 10);
      return `${d} de ${meses[mIdx]} (${y})`;
    }
    return valueISO;
  }, [valueISO]);

  return (
    <div className="relative">
      {label && <label className="block text-xs font-semibold text-slate-700 mb-1">{label}</label>}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between bg-white border border-slate-300 hover:border-[#008C8C] rounded-lg px-3.5 py-2.5 text-slate-800 text-xs font-medium transition focus:outline-none focus:ring-2 focus:ring-[#008C8C]/20 focus:border-[#008C8C] shadow-xs"
      >
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-4 h-4 text-[#008C8C]" />
          <span className="font-medium text-slate-800">{displayTexto}</span>
        </div>
        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#E6F4F4] text-[#008C8C]">
          Elegir
        </span>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute top-full left-0 mt-1.5 z-50 bg-white border border-slate-200 rounded-xl p-3.5 shadow-xl w-72">
            <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-100">
              <button
                type="button"
                onClick={() => setViewDate(new Date(year, month - 1, 1))}
                className="p-1 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold text-slate-800">
                {meses[month]} {year}
              </span>
              <button
                type="button"
                onClick={() => setViewDate(new Date(year, month + 1, 1))}
                className="p-1 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-slate-400 mb-1">
              <span>DO</span>
              <span>LU</span>
              <span>MA</span>
              <span>MI</span>
              <span>JU</span>
              <span>VI</span>
              <span>SÁ</span>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center">
              {Array.from({ length: primerDia }).map((_, i) => (
                <div key={`empty-${i}`} className="w-7 h-7" />
              ))}

              {Array.from({ length: diasEnMes }).map((_, i) => {
                const dia = i + 1;
                const mStr = String(month + 1).padStart(2, '0');
                const dStr = String(dia).padStart(2, '0');
                const iso = `${year}-${mStr}-${dStr}`;
                const isSelected = selectedISO === iso;

                return (
                  <button
                    key={dia}
                    type="button"
                    onClick={() => handleSelectDay(dia)}
                    className={`w-7 h-7 rounded-md text-xs font-medium transition flex items-center justify-center ${
                      isSelected
                        ? 'bg-[#008C8C] text-white font-bold shadow-xs'
                        : 'text-slate-700 hover:bg-[#E6F4F4] hover:text-[#008C8C]'
                    }`}
                  >
                    {dia}
                  </button>
                );
              })}
            </div>

            <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
              <button
                type="button"
                onClick={handleSelectHoy}
                className="text-[#008C8C] font-bold hover:underline"
              >
                Hoy
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-slate-500 font-medium hover:text-slate-800"
              >
                Cerrar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Línea de Tiempo Gráfica de Envío (Stepper Interactivo - Minimalismo DeepCool)
function StepperEnvio({ estatus, onCambiarEstatus, guia, paqueteria, destinatario }) {
  const steps = [
    { id: 'Pendiente', label: '1. Registrada', desc: 'En tienda' },
    { id: 'En tránsito', label: '2. En Tránsito', desc: guia ? `${paqueteria || 'DHL'}: ${guia}` : 'Con guía' },
    { id: 'Entregado', label: '3. Entregado', desc: destinatario || 'Recibido' }
  ];

  const currentIdx = estatus === 'Entregado' ? 2 : estatus === 'En tránsito' ? 1 : 0;

  return (
    <div className="flex items-center gap-1.5 w-full max-w-sm">
      {steps.map((step, idx) => {
        const isDone = idx <= currentIdx;
        const isCurrent = idx === currentIdx;

        return (
          <React.Fragment key={step.id}>
            <button
              type="button"
              onClick={() => onCambiarEstatus(step.id)}
              className={`flex-1 flex flex-col p-2 rounded-lg border text-left transition-all ${
                isCurrent
                  ? 'bg-[#E6F4F4] border-[#008C8C] text-[#006666] shadow-xs'
                  : isDone
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                  : 'bg-white border-slate-200 text-slate-400 hover:border-slate-300 hover:text-slate-600'
              }`}
              title={`Clic para cambiar estado a: ${step.id}`}
            >
              <div className="flex items-center gap-1.5">
                <span
                  className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] font-bold ${
                    isCurrent
                      ? 'bg-[#008C8C] text-white'
                      : isDone
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-400 border border-slate-200'
                  }`}
                >
                  {isDone ? '✓' : idx + 1}
                </span>
                <span className="text-[10px] font-bold truncate">{step.label}</span>
              </div>
              <span className="text-[9px] text-slate-500 truncate mt-0.5">{step.desc}</span>
            </button>

            {idx < steps.length - 1 && (
              <div
                className={`w-2 h-0.5 shrink-0 ${
                  idx < currentIdx ? 'bg-emerald-500' : 'bg-slate-200'
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default function App() {
  // Autenticación Corporativa
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('deepcool_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [authToken, setAuthToken] = useState(() => localStorage.getItem('deepcool_token') || '');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const [activeTab, setActiveTab] = useState('dashboard');
  const [data, setData] = useState({
    notas: [],
    proveedores: [],
    marcas: [],
    creadores: []
  });
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);

  // Filtros
  const [filtroTienda, setFiltroTienda] = useState('TODAS');
  const [filtroEstatusPago, setFiltroEstatusPago] = useState('TODOS');
  const [busqueda, setBusqueda] = useState('');

  // Modales
  const [showNuevaNotaModal, setShowNuevaNotaModal] = useState(false);
  const [showImportarModal, setShowImportarModal] = useState(false);
  const [showNuevoCreadorModal, setShowNuevoCreadorModal] = useState(false);
  const [linkModalNota, setLinkModalNota] = useState(null);
  const [inputLink, setInputLink] = useState('');

  // Edición rápida de Folio # DE NC y Comprobante SPEI
  const [editingNCId, setEditingNCId] = useState(null);
  const [inputNC, setInputNC] = useState('');
  const [editingSPEIId, setEditingSPEIId] = useState(null);
  const [inputSPEI, setInputSPEI] = useState('');

  // Calendario Didáctico Sincronizado en Tiempo Real
  const [currentCalendarDate, setCurrentCalendarDate] = useState(() => new Date());

  // Formulario Nueva Nota
  const [formData, setFormData] = useState({
    marca: 'DeepCool',
    fecha: new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'long' }),
    fechaISO: new Date().toISOString().split('T')[0],
    tienda: 'SUPERMEX',
    otraTienda: '',
    monto: 2200,
    estatusPago: 'PENDIENTE',
    numeroNC: '',
    comprobantePago: '',
    producto: '',
    medio: '',
    destinatario: '',
    direccion: '',
    telefono: '',
    estatusEnvio: 'Entregado',
    guiaEnvio: '',
    paqueteria: 'DHL',
    esCreador: false,
    fechaLimite: '',
    linkEvidencia: ''
  });

  // Formulario Nuevo Creador
  const [creadorForm, setCreadorForm] = useState({
    nombre: '',
    alias: '',
    agencia: 'Directo',
    telefono: '52',
    instagram: '',
    tiktok: '',
    youtube: '',
    twitch: '',
    direccion: '',
    confiabilidad: 90
  });

  // Importador Excel
  const [textoExcelPegado, setTextoExcelPegado] = useState('');
  const [filasPrevisualizadas, setFilasPrevisualizadas] = useState([]);

  const notify = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleLogin = async (e, customEmail, customPass) => {
    if (e) e.preventDefault();
    setLoginError('');
    setLoginLoading(true);
    const targetEmail = customEmail || loginEmail;
    const targetPass = customPass || loginPass;

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: targetEmail, password: targetPass })
      });
      const json = await res.json();
      if (json.ok) {
        setCurrentUser(json.user);
        setAuthToken(json.token);
        localStorage.setItem('deepcool_user', JSON.stringify(json.user));
        localStorage.setItem('deepcool_token', json.token);
        notify(`Bienvenido(a), ${json.user.nombre}`);
        fetchData();
      } else {
        setLoginError(json.error || 'Credenciales incorrectas');
      }
    } catch (err) {
      setLoginError('Error al conectar con el servidor');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      if (authToken) {
        await fetch('/api/auth/logout', {
          method: 'POST',
          headers: { Authorization: `Bearer ${authToken}` }
        });
      }
    } catch {}
    setCurrentUser(null);
    setAuthToken('');
    localStorage.removeItem('deepcool_user');
    localStorage.removeItem('deepcool_token');
    notify('Sesión cerrada');
  };

  const fetchData = async () => {
    try {
      const res = await fetch('/api/notas');
      const json = await res.json();
      if (json.ok) {
        setData({
          notas: json.data || [],
          proveedores: json.proveedores || [],
          marcas: json.marcas || [],
          creadores: json.creadores || []
        });
      }
    } catch (err) {
      console.error('Error al cargar datos:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Cálculos Financieros y Estadísticas para Módulos 01 y 05
  const kpis = useMemo(() => {
    const notas = data.notas || [];
    const pendientes = notas.filter((n) => n.estatusPago === 'PENDIENTE');
    const pagadas = notas.filter((n) => n.estatusPago === 'PAGADA');

    const totalDeudaPendiente = pendientes.reduce((acc, n) => acc + Number(n.monto || 0), 0);
    const totalMontoPagado = pagadas.reduce((acc, n) => acc + Number(n.monto || 0), 0);
    const totalGeneral = notas.reduce((acc, n) => acc + Number(n.monto || 0), 0);

    // Saldos desglosados por tienda
    const saldosPorTienda = {};
    (data.proveedores || []).forEach((p) => {
      saldosPorTienda[p.nombre] = { nombre: p.nombre, pendiente: 0, pagado: 0, unidades: 0 };
    });

    notas.forEach((n) => {
      const t = n.tienda || 'OTRA';
      if (!saldosPorTienda[t]) {
        saldosPorTienda[t] = { nombre: t, pendiente: 0, pagado: 0, unidades: 0 };
      }
      saldosPorTienda[t].unidades += 1;
      const m = Number(n.monto || 0);
      if (n.estatusPago === 'PENDIENTE') {
        saldosPorTienda[t].pendiente += m;
      } else {
        saldosPorTienda[t].pagado += m;
      }
    });

    const creadoresTotal = notas.filter((n) => n.esCreador);
    const creadoresPendientes = creadoresTotal.filter((n) => n.estatusContenido !== 'Entregado');
    const creadoresCumplidos = creadoresTotal.filter((n) => n.estatusContenido === 'Entregado');

    const enviosEntregados = notas.filter((n) => n.estatusEnvio === 'Entregado').length;
    const enviosTransito = notas.filter((n) => n.estatusEnvio === 'En tránsito').length;
    const enviosPendientes = notas.filter((n) => n.estatusEnvio === 'Pendiente').length;

    return {
      totalNotas: notas.length,
      pendientesCount: pendientes.length,
      pagadasCount: pagadas.length,
      totalDeudaPendiente,
      totalMontoPagado,
      totalGeneral,
      saldosPorTienda: Object.values(saldosPorTienda),
      creadoresTotalCount: creadoresTotal.length,
      creadoresPendientesCount: creadoresPendientes.length,
      creadoresCumplidosCount: creadoresCumplidos.length,
      tasaCumplimiento:
        creadoresTotal.length > 0
          ? Math.round((creadoresCumplidos.length / creadoresTotal.length) * 100)
          : 100,
      enviosEntregados,
      enviosTransito,
      enviosPendientes
    };
  }, [data.notas, data.proveedores]);

  // Notas Filtradas
  const notasFiltradas = useMemo(() => {
    return (data.notas || []).filter((n) => {
      if (filtroTienda !== 'TODAS' && (n.tienda || '').toUpperCase() !== filtroTienda.toUpperCase())
        return false;
      if (
        filtroEstatusPago !== 'TODOS' &&
        (n.estatusPago || '').toUpperCase() !== filtroEstatusPago.toUpperCase()
      )
        return false;

      if (busqueda.trim()) {
        const q = busqueda.toLowerCase();
        const match =
          (n.producto || '').toLowerCase().includes(q) ||
          (n.marca || '').toLowerCase().includes(q) ||
          (n.tienda || '').toLowerCase().includes(q) ||
          (n.medio || '').toLowerCase().includes(q) ||
          (n.destinatario || '').toLowerCase().includes(q) ||
          (n.direccion || '').toLowerCase().includes(q) ||
          (n.numeroNC || '').toLowerCase().includes(q) ||
          (n.comprobantePago || '').toLowerCase().includes(q) ||
          (n.fecha || '').toLowerCase().includes(q);
        if (!match) return false;
      }
      return true;
    });
  }, [data.notas, filtroTienda, filtroEstatusPago, busqueda]);

  // Acciones Backend
  const handleCrearNota = async (e) => {
    e.preventDefault();
    try {
      const tiendaFinal = formData.tienda === 'OTRA' ? formData.otraTienda : formData.tienda;
      const res = await fetch('/api/notas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          tienda: tiendaFinal
        })
      });
      const json = await res.json();
      if (json.ok) {
        notify('Salida / Nota de Tienda guardada');
        setShowNuevaNotaModal(false);
        fetchData();
        setFormData({
          marca: 'DeepCool',
          fecha: '15 DE ENERO',
          fechaISO: new Date().toISOString().split('T')[0],
          tienda: 'SUPERMEX',
          otraTienda: '',
          monto: 2200,
          estatusPago: 'PENDIENTE',
          numeroNC: '',
          comprobantePago: '',
          producto: '',
          medio: '',
          destinatario: '',
          direccion: '',
          telefono: '',
          estatusEnvio: 'Entregado',
          guiaEnvio: '',
          paqueteria: 'DHL',
          esCreador: false,
          fechaLimite: '',
          linkEvidencia: ''
        });
      }
    } catch (err) {
      notify('Error al registrar la nota');
    }
  };

  const handleUpdateNota = async (id, campos) => {
    try {
      const res = await fetch(`/api/notas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(campos)
      });
      const json = await res.json();
      if (json.ok) {
        notify('Registro actualizado');
        fetchData();
      }
    } catch (err) {
      notify('Error al actualizar nota');
    }
  };

  const handleEliminarNota = async (id) => {
    if (!confirm('¿Eliminar esta salida / nota de tienda?')) return;
    try {
      const res = await fetch(`/api/notas/${id}`, { method: 'DELETE' });
      const json = await res.json();
      if (json.ok) {
        notify('Registro eliminado');
        fetchData();
      }
    } catch (err) {
      notify('Error al eliminar');
    }
  };

  const handleSaveNC = (id) => {
    handleUpdateNota(id, { numeroNC: inputNC });
    setEditingNCId(null);
  };

  const handleSaveSPEI = (id) => {
    handleUpdateNota(id, { comprobantePago: inputSPEI, estatusPago: 'PAGADA' });
    setEditingSPEIId(null);
  };

  const handleGuardarLinkEvidencia = () => {
    if (!linkModalNota) return;
    handleUpdateNota(linkModalNota.id, {
      linkEvidencia: inputLink,
      estatusContenido: 'Entregado'
    });
    setLinkModalNota(null);
    setInputLink('');
    notify('Enlace de evidencia verificado y registrado');
  };

  const handleAsignarProductoACreador = (creador) => {
    setFormData({
      marca: 'DeepCool',
      fecha: 'Hoy',
      fechaISO: new Date().toISOString().split('T')[0],
      tienda: 'SUPERMEX',
      otraTienda: '',
      monto: 1500,
      estatusPago: 'PENDIENTE',
      numeroNC: '',
      comprobantePago: '',
      producto: '',
      medio: `Colaboración ${creador.nombre}`,
      destinatario: creador.nombre,
      direccion: creador.direccion || '',
      telefono: creador.telefono || '',
      estatusEnvio: 'En tránsito',
      guiaEnvio: '',
      paqueteria: 'DHL',
      esCreador: true,
      fechaLimite: '',
      linkEvidencia: ''
    });
    setShowNuevaNotaModal(true);
  };

  const handleCrearCreador = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        nombre: creadorForm.nombre,
        alias: creadorForm.alias || `@${creadorForm.nombre.toLowerCase().replace(/\s+/g, '')}`,
        agencia: creadorForm.agencia,
        telefono: creadorForm.telefono,
        direccion: creadorForm.direccion,
        confiabilidad: Number(creadorForm.confiabilidad || 90),
        redes: {
          instagram: creadorForm.instagram,
          tiktok: creadorForm.tiktok,
          youtube: creadorForm.youtube,
          twitch: creadorForm.twitch
        }
      };
      const res = await fetch('/api/creadores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const json = await res.json();
      if (json.ok) {
        notify('Creador registrado en el directorio');
        setShowNuevoCreadorModal(false);
        fetchData();
        setCreadorForm({
          nombre: '',
          alias: '',
          agencia: 'Directo',
          telefono: '52',
          instagram: '',
          tiktok: '',
          youtube: '',
          twitch: '',
          direccion: '',
          confiabilidad: 90
        });
      }
    } catch (err) {
      notify('Error al registrar creador');
    }
  };

  // Parser Inteligente de Excel / CSV
  const procesarTextoExcel = (texto) => {
    setTextoExcelPegado(texto);
    if (!texto.trim()) {
      setFilasPrevisualizadas([]);
      return;
    }

    const lineas = texto.split(/\r?\n/).filter((l) => l.trim().length > 0);
    if (lineas.length === 0) return;

    const filas = [];
    for (let i = 0; i < lineas.length; i++) {
      const linea = lineas[i];
      let columnas = [];
      if (linea.includes('\t')) {
        columnas = linea.split('\t').map((c) => c.trim());
      } else if (linea.includes(',')) {
        columnas = linea.split(',').map((c) => c.trim().replace(/^"|"$/g, ''));
      } else {
        columnas = linea.split(/\s{2,}/).map((c) => c.trim());
      }

      if (
        i === 0 &&
        (columnas.some((c) => /producto|tienda|marca|fecha/i.test(c)) ||
          columnas[0].toLowerCase().includes('marca'))
      ) {
        continue;
      }

      if (columnas.length >= 2) {
        filas.push({
          marca: columnas[0] || 'DeepCool',
          fecha: columnas[1] || '15 DE ENERO',
          fechaISO: new Date().toISOString().split('T')[0],
          tienda: (columnas[2] || 'SUPERMEX').toUpperCase(),
          monto: Number(columnas[3] || 2000),
          numeroNC: columnas[4] || '',
          producto: columnas[5] || columnas[1] || 'Gabinete / Cooler DeepCool',
          medio: columnas[6] || 'Campaña General',
          destinatario: columnas[7] || 'Almacén',
          estatusPago: (columnas[8] || '').toUpperCase() === 'PAGADA' ? 'PAGADA' : 'PENDIENTE',
          estatusEnvio: 'Entregado'
        });
      }
    }
    setFilasPrevisualizadas(filas);
  };

  const handleGuardarExcel = async () => {
    if (filasPrevisualizadas.length === 0) {
      notify('No hay filas válidas para guardar');
      return;
    }
    try {
      const res = await fetch('/api/notas/importar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filas: filasPrevisualizadas })
      });
      const json = await res.json();
      if (json.ok) {
        notify(`${json.totalImportadas} registros importados con éxito`);
        setShowImportarModal(false);
        setTextoExcelPegado('');
        setFilasPrevisualizadas([]);
        fetchData();
      }
    } catch (err) {
      notify('Error al importar filas de Excel');
    }
  };

  const exportarCSV = () => {
    const notas = data.notas || [];
    if (notas.length === 0) {
      notify('No hay registros para exportar');
      return;
    }

    const headers = [
      'ID',
      'Marca',
      'Fecha',
      'Tienda',
      'Monto',
      'EstatusPago',
      'NumeroNC',
      'ComprobanteSPEI',
      'Producto',
      'Medio',
      'Destinatario',
      'Telefono',
      'EstatusEnvio',
      'Guia',
      'Paqueteria',
      'EsCreador',
      'FechaLimite',
      'LinkEvidencia'
    ];

    const filas = notas.map((n) => [
      n.id,
      `"${n.marca || 'DeepCool'}"`,
      `"${n.fecha || ''}"`,
      `"${n.tienda || ''}"`,
      n.monto || 0,
      `"${n.estatusPago || 'PENDIENTE'}"`,
      `"${n.numeroNC || ''}"`,
      `"${n.comprobantePago || ''}"`,
      `"${(n.producto || '').replace(/"/g, '""')}"`,
      `"${n.medio || ''}"`,
      `"${n.destinatario || ''}"`,
      `"${n.telefono || ''}"`,
      `"${n.estatusEnvio || ''}"`,
      `"${n.guiaEnvio || ''}"`,
      `"${n.paqueteria || ''}"`,
      n.esCreador ? 'SI' : 'NO',
      `"${n.fechaLimite || ''}"`,
      `"${n.linkEvidencia || ''}"`
    ]);

    const csvContent =
      '\uFEFF' + [headers.join(','), ...filas.map((f) => f.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute(
      'download',
      `Reporte_DeepCool_Marketing_${new Date().toISOString().split('T')[0]}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    notify('Reporte Excel (.CSV) descargado');
  };

  // Calendario Sincronizado Dinámicamente con Fechas de Hoy
  const calendarioDias = useMemo(() => {
    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth();
    const primerDia = new Date(year, month, 1).getDay();
    const diasEnMes = new Date(year, month + 1, 0).getDate();

    const hoy = new Date();
    const hoyStr = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}-${String(hoy.getDate()).padStart(2, '0')}`;

    const dias = [];
    for (let i = 0; i < primerDia; i++) {
      dias.push(null);
    }
    for (let d = 1; d <= diasEnMes; d++) {
      const fechaStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const notasDelDia = (data.notas || []).filter((n) => n.fechaISO === fechaStr);
      const creadoresVencen = (data.notas || []).filter((n) => n.fechaLimite === fechaStr);
      const esHoy = fechaStr === hoyStr;
      dias.push({ dia: d, fechaStr, notas: notasDelDia, creadores: creadoresVencen, esHoy });
    }
    return dias;
  }, [currentCalendarDate, data.notas]);

  const mesesNombres = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  // =======================================================
  // PANTALLA DE LOGIN CORPORATIVO
  // =======================================================
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 selection:bg-[#008C8C] selection:text-white font-sans">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 max-w-md w-full shadow-xl space-y-6 animate-in fade-in zoom-in-95">
          {/* Logo Oficial DeepCool */}
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <img
                src="/deepcool.png"
                alt="DeepCool"
                className="h-8 w-auto object-contain"
              />
            </div>
            <h1 className="text-base font-bold text-slate-900 tracking-tight">
              Portal de Marketing & Operaciones
            </h1>
            <p className="text-xs text-slate-500">
              Control de Notas de Tienda, Envíos y Creadores · LATAM
            </p>
          </div>

          {loginError && (
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={(e) => handleLogin(e)} className="space-y-4 text-xs">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Correo Corporativo
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="ejemplo@deepcool.com"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#008C8C]/20 focus:border-[#008C8C]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="password"
                  required
                  value={loginPass}
                  onChange={(e) => setLoginPass(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#008C8C]/20 focus:border-[#008C8C]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full py-2.5 bg-[#008C8C] hover:bg-[#007A7A] disabled:opacity-50 text-white font-bold rounded-lg transition shadow-xs flex items-center justify-center gap-2"
            >
              {loginLoading ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Verificando...</span>
                </>
              ) : (
                <span>Ingresar al Portal</span>
              )}
            </button>
          </form>

          {/* Perfiles de Acceso Rápido para Demostración */}
          <div className="pt-4 border-t border-slate-100 space-y-2.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block text-center">
              Perfiles de Acceso Rápido
            </span>

            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => handleLogin(null, 'marketing@deepcool.com', 'DeepCool2026!')}
                className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-[#E6F4F4]/60 hover:border-[#008C8C] text-left transition group flex items-center gap-2.5 shadow-2xs"
              >
                <div className="w-8 h-8 rounded-lg bg-white group-hover:bg-[#008C8C] text-[#008C8C] group-hover:text-white border border-slate-200/80 group-hover:border-[#008C8C] flex items-center justify-center shrink-0 transition shadow-2xs">
                  <IconRoleMarketing className="w-4 h-4 transition" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-slate-800 group-hover:text-[#008C8C] block truncate leading-tight">
                    Marketing LATAM
                  </span>
                  <span className="text-[10px] text-slate-500 block truncate">Dirección</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleLogin(null, 'operaciones@deepcool.com', 'Logistica2026!')}
                className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-[#E6F4F4]/60 hover:border-[#008C8C] text-left transition group flex items-center gap-2.5 shadow-2xs"
              >
                <div className="w-8 h-8 rounded-lg bg-white group-hover:bg-[#008C8C] text-[#008C8C] group-hover:text-white border border-slate-200/80 group-hover:border-[#008C8C] flex items-center justify-center shrink-0 transition shadow-2xs">
                  <IconRoleOperaciones className="w-4 h-4 transition" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-slate-800 group-hover:text-[#008C8C] block truncate leading-tight">
                    Operaciones
                  </span>
                  <span className="text-[10px] text-slate-500 block truncate">Logística & Envíos</span>
                </div>
              </button>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#008C8C]" />
            <span>Acceso seguro cifrado SSL · DeepCool Latin America</span>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-800">
        <div className="flex flex-col items-center gap-3">
          <RefreshCw className="w-8 h-8 text-[#008C8C] animate-spin" />
          <p className="text-xs font-bold tracking-wider uppercase text-slate-600">
            Cargando Plataforma DeepCool...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex selection:bg-[#008C8C] selection:text-white font-sans">
      {/* Toast Notificación */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900 text-white font-medium text-xs shadow-xl border border-slate-800 animate-in fade-in slide-in-from-bottom-3">
          <CheckCircle2 className="w-4 h-4 text-[#008C8C] shrink-0" />
          <span>{toast}</span>
        </div>
      )}

      {/* =======================================================
          SIDEBAR: Minimalista, Limpio y Corporativo DeepCool
         ======================================================= */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col shrink-0 select-none">
        {/* Cabecera Sidebar con Logo Oficial DeepCool */}
        <div className="p-5 border-b border-slate-200/90">
          <div className="flex items-center gap-2">
            <img
              src="/deepcool.png"
              alt="DeepCool"
              className="h-6 w-auto object-contain"
            />
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500">
              Marketing & Notas
            </span>
            <span className="text-[9px] font-bold text-[#008C8C] bg-[#E6F4F4] px-1.5 py-0.5 rounded tracking-wider">
              LATAM
            </span>
          </div>
        </div>

        {/* Navegación Principal */}
        <div className="p-3 flex-1 overflow-y-auto space-y-1">
          <p className="px-3 pt-2 pb-1 text-[10px] font-bold tracking-wider uppercase text-slate-400">
            Navegación
          </p>

          <nav className="space-y-1">
            {[
              {
                id: 'dashboard',
                label: 'Dashboard & Calendario',
                icon: IconNavDashboard
              },
              {
                id: 'finanzas',
                label: '01. Finanzas',
                icon: IconNavFinanzas,
                badge: kpis.pendientesCount > 0 ? kpis.pendientesCount : null
              },
              {
                id: 'inventario',
                label: '02. Logística & Envíos',
                icon: IconNavLogistica
              },
              {
                id: 'creadores',
                label: '03. Creadores',
                icon: IconNavCreadores,
                badge: kpis.creadoresPendientesCount > 0 ? kpis.creadoresPendientesCount : null
              },
              {
                id: 'automatizaciones',
                label: '04. Monitor n8n',
                icon: IconNavAutomations
              },
              {
                id: 'reportes',
                label: '05. Reportes & Gráficas',
                icon: IconNavReportes
              }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-[#008C8C] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span className="truncate">{tab.label}</span>
                  </div>
                  {tab.badge !== null && tab.badge !== undefined && (
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ml-2 ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Acceso Excel y n8n */}
        <div className="p-3 border-t border-slate-200 bg-slate-50/70 space-y-2">
          <button
            onClick={() => setShowImportarModal(true)}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold transition shadow-2xs"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-[#008C8C]" />
            <span>Carga Masiva Excel</span>
          </button>

          <div className="text-[11px] text-slate-400 px-1 text-center">
            <span className="text-[#008C8C] font-semibold">n8n Sync:</span> Endpoint activo
          </div>
        </div>

        {/* Usuario Activo & Cerrar Sesión */}
        {currentUser && (
          <div className="p-3 border-t border-slate-200 bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-7 h-7 rounded-full bg-[#E6F4F4] text-[#008C8C] font-bold text-xs flex items-center justify-center shrink-0">
                  {currentUser.avatar || 'DC'}
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-slate-800 truncate block">
                    {currentUser.nombre}
                  </span>
                  <span className="text-[10px] text-slate-500 truncate block">
                    {currentUser.cargo}
                  </span>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                title="Cerrar Sesión"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </aside>

      {/* =======================================================
          ÁREA PRINCIPAL
         ======================================================= */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar Limpia y Minimalista */}
        <header className="min-h-16 py-3 bg-white border-b border-slate-200 px-6 sm:px-8 flex flex-wrap items-center justify-between gap-3 sticky top-0 z-20">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#008C8C]" />
              {activeTab === 'dashboard' && 'Dashboard General & Calendario'}
              {activeTab === 'finanzas' && '01. Finanzas — Control de Notas de Crédito'}
              {activeTab === 'inventario' && '02. Logística — Salidas de Almacén y Envíos'}
              {activeTab === 'creadores' && '03. Panel de Creadores de Contenido'}
              {activeTab === 'automatizaciones' && '04. Monitor n8n & Recordatorios'}
              {activeTab === 'reportes' && '05. Reportes & Estadísticas'}
            </h2>
            <p className="text-xs text-slate-500">
              DeepCool Latin America · Control Operativo y de Marketing
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={exportarCSV}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition shadow-2xs"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>Exportar CSV</span>
            </button>

            <button
              onClick={() => setShowImportarModal(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition shadow-2xs"
            >
              <Upload className="w-3.5 h-3.5 text-slate-500" />
              <span>Importar Excel</span>
            </button>

            <button
              onClick={() => setShowNuevaNotaModal(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#008C8C] hover:bg-[#007A7A] text-white text-xs font-bold transition shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Nueva Salida / Nota</span>
            </button>
          </div>
        </header>

        {/* Vista con Contenido */}
        <main className="p-6 sm:p-8 max-w-7xl w-full mx-auto space-y-6">
          {/* =======================================================
              MÓDULO 00: DASHBOARD & CALENDARIO DIDÁCTICO
             ======================================================= */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Tarjetas KPI Minimalistas con Iconos Únicos DeepCool */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Salidas Registradas
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
                      <IconHardwareBox className="w-4 h-4 text-[#008C8C]" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 font-mono">
                    {kpis.totalNotas}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Valor total: <span className="font-semibold text-slate-700">{formatMoney(kpis.totalGeneral)}</span>
                  </p>
                </div>

                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Saldo Pendiente
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                      <IconNavFinanzas className="w-4 h-4 text-amber-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-amber-700 font-mono">
                    {formatMoney(kpis.totalDeudaPendiente)}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    En <span className="font-semibold text-slate-700">{kpis.pendientesCount} notas</span> por conciliar
                  </p>
                </div>

                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Total Conciliado
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-emerald-700 font-mono">
                    {formatMoney(kpis.totalMontoPagado)}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    <span className="font-semibold text-slate-700">{kpis.pagadasCount} notas</span> saldadas con SPEI
                  </p>
                </div>

                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Creadores & Videos
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#E6F4F4] flex items-center justify-center text-[#008C8C]">
                      <IconNavCreadores className="w-4 h-4 text-[#008C8C]" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 font-mono">
                    {kpis.creadoresPendientesCount} <span className="text-sm font-normal text-slate-500">pendientes</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Tasa de cumplimiento: <span className="font-semibold text-[#008C8C]">{kpis.tasaCumplimiento}%</span>
                  </p>
                </div>
              </div>

              {/* Calendario Didáctico Sincronizado en Tiempo Real */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <IconCalendarSync className="w-4 h-4 text-[#008C8C]" />
                      <span>Calendario de Salidas y Compromisos de Entrega</span>
                    </h3>
                    <p className="text-xs text-slate-500">
                      Sincronizado dinámicamente con hoy y fechas sucesivas
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentCalendarDate(new Date())}
                      className="px-2.5 py-1 text-xs font-bold text-[#008C8C] bg-[#E6F4F4] hover:bg-[#BFE4E4] rounded-lg transition shadow-2xs flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#008C8C] animate-pulse" />
                      <span>Ir a Hoy</span>
                    </button>

                    <div className="flex items-center border border-slate-200 rounded-lg p-0.5 bg-slate-50">
                      <button
                        onClick={() =>
                          setCurrentCalendarDate(
                            new Date(
                              currentCalendarDate.getFullYear(),
                              currentCalendarDate.getMonth() - 1,
                              1
                            )
                          )
                        }
                        className="p-1 rounded-md text-slate-600 hover:text-slate-900 hover:bg-white transition"
                        title="Mes anterior"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="text-xs font-bold text-slate-800 px-3 min-w-[130px] text-center">
                        {mesesNombres[currentCalendarDate.getMonth()]} {currentCalendarDate.getFullYear()}
                      </span>
                      <button
                        onClick={() =>
                          setCurrentCalendarDate(
                            new Date(
                              currentCalendarDate.getFullYear(),
                              currentCalendarDate.getMonth() + 1,
                              1
                            )
                          )
                        }
                        className="p-1 rounded-md text-slate-600 hover:text-slate-900 hover:bg-white transition"
                        title="Mes siguiente"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto pb-1">
                  <div className="min-w-[560px]">
                    <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-slate-400 mb-2">
                      <span><span className="hidden md:inline">Domingo</span><span className="md:hidden">Dom</span></span>
                      <span><span className="hidden md:inline">Lunes</span><span className="md:hidden">Lun</span></span>
                      <span><span className="hidden md:inline">Martes</span><span className="md:hidden">Mar</span></span>
                      <span><span className="hidden md:inline">Miércoles</span><span className="md:hidden">Mié</span></span>
                      <span><span className="hidden md:inline">Jueves</span><span className="md:hidden">Jue</span></span>
                      <span><span className="hidden md:inline">Viernes</span><span className="md:hidden">Vie</span></span>
                      <span><span className="hidden md:inline">Sábado</span><span className="md:hidden">Sáb</span></span>
                    </div>

                    <div className="grid grid-cols-7 gap-2">
                      {calendarioDias.map((item, idx) => {
                        if (!item) {
                          return <div key={`empty-${idx}`} className="min-h-24 bg-slate-50/50 rounded-lg" />;
                        }

                        const tieneNotas = item.notas.length > 0;
                        const tieneCreadores = item.creadores.length > 0;

                        return (
                          <div
                            key={item.dia}
                            className={`min-h-24 p-2 rounded-lg border text-left flex flex-col justify-between transition-colors ${
                              item.esHoy
                                ? 'bg-[#F0F9F9] border-[#008C8C] ring-2 ring-[#008C8C]/20 shadow-xs'
                                : tieneNotas || tieneCreadores
                                ? 'bg-white border-slate-300 shadow-2xs'
                                : 'bg-white border-slate-100 hover:border-slate-200'
                            }`}
                          >
                            <div className="flex items-center justify-between w-full">
                              {item.esHoy ? (
                                <span className="w-5 h-5 rounded-full bg-[#008C8C] text-white flex items-center justify-center text-[10px] font-black shadow-2xs shrink-0" title="Hoy">
                                  {item.dia}
                                </span>
                              ) : (
                                <span className="text-xs font-bold text-slate-700">
                                  {item.dia}
                                </span>
                              )}
                              {tieneNotas && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#008C8C] shrink-0" title="Tiene salida de tienda" />
                              )}
                            </div>

                            <div className="space-y-1 my-1">
                              {item.notas.slice(0, 2).map((n) => (
                                <div
                                  key={n.id}
                                  className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-[#E6F4F4] text-[#006666] truncate"
                                  title={`${n.tienda}: ${n.producto}`}
                                >
                                  {n.tienda}: {n.producto}
                                </div>
                              ))}
                              {item.creadores.slice(0, 1).map((c) => (
                                <div
                                  key={`cr-${c.id}`}
                                  className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-rose-50 text-rose-700 truncate flex items-center gap-1"
                                  title={`Límite Video: ${c.destinatario}`}
                                >
                                  <Video className="w-2.5 h-2.5 shrink-0 text-rose-600" />
                                  <span className="truncate">{c.destinatario}</span>
                                </div>
                              ))}
                            </div>

                            <span className="text-[9px] text-slate-400 text-right">
                              {item.notas.length > 0 && `${item.notas.length} notas`}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =======================================================
              MÓDULO 01: FINANZAS Y NOTAS DE TIENDA
             ======================================================= */}
          {activeTab === 'finanzas' && (
            <div className="space-y-6">
              {/* Tarjetas de Saldo por Tienda */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {kpis.saldosPorTienda.map((tienda) => (
                  <div
                    key={tienda.nombre}
                    className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-800 tracking-wider">
                        {tienda.nombre}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {tienda.unidades} retiros
                      </span>
                    </div>
                    <div className="text-xl font-bold text-slate-900 font-mono">
                      {formatMoney(tienda.pendiente)}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1 flex justify-between">
                      <span>Pagado: {formatMoney(tienda.pagado)}</span>
                      <span className="font-semibold text-amber-700">Por Pagar</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Barra de Filtros */}
              <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 flex-1 min-w-[240px]">
                  <div className="relative w-full">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Buscar por producto, tienda, folio de NC o destinatario..."
                      value={busqueda}
                      onChange={(e) => setBusqueda(e.target.value)}
                      className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#008C8C]/20 focus:border-[#008C8C]"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <div className="flex items-center border border-slate-200 rounded-lg p-0.5 bg-slate-50 text-xs">
                    {['TODAS', 'SUPERMEX', 'DDTECH', 'CYBERPUERTA'].map((t) => (
                      <button
                        key={t}
                        onClick={() => setFiltroTienda(t)}
                        className={`px-3 py-1 rounded-md font-semibold transition ${
                          filtroTienda === t
                            ? 'bg-[#008C8C] text-white shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center border border-slate-200 rounded-lg p-0.5 bg-slate-50 text-xs">
                    {['TODOS', 'PENDIENTE', 'PAGADA'].map((st) => (
                      <button
                        key={st}
                        onClick={() => setFiltroEstatusPago(st)}
                        className={`px-3 py-1 rounded-md font-semibold transition ${
                          filtroEstatusPago === st
                            ? 'bg-[#008C8C] text-white shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tabla de Notas de Crédito */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4">Fecha</th>
                        <th className="py-3 px-4">Tienda</th>
                        <th className="py-3 px-4">Estatus Pago</th>
                        <th className="py-3 px-4"># Folio NC</th>
                        <th className="py-3 px-4">Monto</th>
                        <th className="py-3 px-4">Comprobante / SPEI</th>
                        <th className="py-3 px-4">Producto</th>
                        <th className="py-3 px-4">Medio / Destino</th>
                        <th className="py-3 px-4 text-right">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-800">
                      {notasFiltradas.length === 0 ? (
                        <tr>
                          <td colSpan="9" className="py-12 text-center text-slate-400">
                            No se encontraron notas registradas con esos filtros
                          </td>
                        </tr>
                      ) : (
                        notasFiltradas.map((nota) => (
                          <tr key={nota.id} className="hover:bg-slate-50/70 transition-colors">
                            <td className="py-3 px-4 font-medium text-slate-600 whitespace-nowrap">
                              {nota.fecha}
                            </td>

                            <td className="py-3 px-4 font-bold text-slate-900">
                              {nota.tienda}
                            </td>

                            <td className="py-3 px-4">
                              <span
                                className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  nota.estatusPago === 'PAGADA'
                                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                    : 'bg-amber-50 text-amber-700 border border-amber-200'
                                }`}
                              >
                                {nota.estatusPago === 'PAGADA' ? 'Pagada' : 'Pendiente'}
                              </span>
                            </td>

                            {/* Folio NC con edición rápida */}
                            <td className="py-3 px-4">
                              {editingNCId === nota.id ? (
                                <div className="flex items-center gap-1">
                                  <input
                                    type="text"
                                    value={inputNC}
                                    onChange={(e) => setInputNC(e.target.value)}
                                    placeholder="Folio NC"
                                    className="w-24 px-2 py-1 text-xs border border-[#008C8C] rounded font-mono"
                                  />
                                  <button
                                    onClick={() => handleSaveNC(nota.id)}
                                    className="p-1 bg-[#008C8C] text-white rounded hover:bg-[#007A7A]"
                                  >
                                    <Check className="w-3 h-3" />
                                  </button>
                                  <button
                                    onClick={() => setEditingNCId(null)}
                                    className="p-1 bg-slate-200 text-slate-600 rounded"
                                  >
                                    <X className="w-3 h-3" />
                                  </button>
                                </div>
                              ) : (
                                <div className="flex items-center gap-1.5 group">
                                  <span className="font-mono text-slate-700">
                                    {nota.numeroNC || <span className="text-slate-400 italic">Pendiente</span>}
                                  </span>
                                  <button
                                    onClick={() => {
                                      setEditingNCId(nota.id);
                                      setInputNC(nota.numeroNC || '');
                                    }}
                                    className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-[#008C8C] transition"
                                    title="Editar Folio NC"
                                  >
                                    <Edit3 className="w-3 h-3" />
                                  </button>
                                </div>
                              )}
                            </td>

                            <td className="py-3 px-4 font-mono font-bold text-slate-900">
                              {formatMoney(nota.monto)}
                            </td>

                            {/* Comprobante SPEI */}
                            <td className="py-3 px-4">
                              {editingSPEIId === nota.id ? (
                                <div className="flex items-center gap-1">
                                  <input
                                    type="text"
                                    value={inputSPEI}
                                    onChange={(e) => setInputSPEI(e.target.value)}
                                    placeholder="Ref. SPEI"
                                    className="w-28 px-2 py-1 text-xs border border-[#008C8C] rounded font-mono"
                                  />
                                  <button
                                    onClick={() => handleSaveSPEI(nota.id)}
                                    className="p-1 bg-[#008C8C] text-white rounded hover:bg-[#007A7A]"
                                  >
                                    <Check className="w-3 h-3" />
                                  </button>
                                  <button
                                    onClick={() => setEditingSPEIId(null)}
                                    className="p-1 bg-slate-200 text-slate-600 rounded"
                                  >
                                    <X className="w-3 h-3" />
                                  </button>
                                </div>
                              ) : (
                                <div className="flex items-center gap-1.5 group">
                                  <span className="font-mono text-slate-700 truncate max-w-[120px] block">
                                    {nota.comprobantePago || <span className="text-slate-400 italic">Sin SPEI</span>}
                                  </span>
                                  <button
                                    onClick={() => {
                                      setEditingSPEIId(nota.id);
                                      setInputSPEI(nota.comprobantePago || '');
                                    }}
                                    className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-[#008C8C] transition"
                                    title="Registrar comprobante SPEI"
                                  >
                                    <Edit3 className="w-3 h-3" />
                                  </button>
                                </div>
                              )}
                            </td>

                            <td className="py-3 px-4 max-w-xs truncate" title={nota.producto}>
                              <span className="font-medium text-slate-900">{nota.producto}</span>
                            </td>

                            <td className="py-3 px-4 text-slate-600 truncate max-w-[140px]">
                              {nota.destinatario || nota.medio}
                            </td>

                            <td className="py-3 px-4 text-right">
                              <button
                                onClick={() => handleEliminarNota(nota.id)}
                                className="text-slate-400 hover:text-rose-600 transition p-1"
                                title="Eliminar registro"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* =======================================================
              MÓDULO 02: LOGÍSTICA & ENVÍOS
             ======================================================= */}
          {activeTab === 'inventario' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#008C8C]" />
                    <span>Línea de Tiempo de Envíos y Salidas de Producto</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Da clic en cualquier etapa (Salida ➔ Tránsito ➔ Entregado) para actualizar el estado de inmediato
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <span className="text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    {kpis.enviosEntregados} entregados
                  </span>
                  <span className="text-[#006666] bg-[#E6F4F4] px-2.5 py-1 rounded-md border border-[#BFE4E4]">
                    {kpis.enviosTransito} en camino
                  </span>
                  <span className="text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                    {kpis.enviosPendientes} pendientes
                  </span>
                </div>
              </div>

              {/* Grid de Envíos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(data.notas || []).map((nota) => (
                  <div
                    key={nota.id}
                    className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          {nota.marca || 'DeepCool'} · {nota.tienda}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-700">
                          {nota.fecha}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 line-clamp-1" title={nota.producto}>
                        {nota.producto}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Motivo / Destino: <span className="font-medium text-slate-700">{nota.medio}</span>
                      </p>

                      <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="truncate">{nota.destinatario} ({nota.direccion || 'Dirección no especificada'})</span>
                        </div>
                        {nota.telefono && (
                          <div className="flex items-center gap-1.5 text-slate-500">
                            <Phone className="w-3.5 h-3.5 text-slate-400" />
                            <span>+{nota.telefono}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Stepper de Envío */}
                    <div className="pt-2">
                      <StepperEnvio
                        estatus={nota.estatusEnvio}
                        paqueteria={nota.paqueteria}
                        guia={nota.guiaEnvio}
                        destinatario={nota.destinatario}
                        onCambiarEstatus={(nuevoEstatus) =>
                          handleUpdateNota(nota.id, { estatusEnvio: nuevoEstatus })
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =======================================================
              MÓDULO 03: PANEL DE CREADORES
             ======================================================= */}
          {activeTab === 'creadores' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Video className="w-4 h-4 text-[#008C8C]" />
                    <span>Directorio y Monitoreo de Creadores ({data.creadores.length})</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Revisa redes sociales, productos asignados, compromisos y enlaces de video
                  </p>
                </div>
                <button
                  onClick={() => setShowNuevoCreadorModal(true)}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#008C8C] hover:bg-[#007A7A] text-white text-xs font-bold transition shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Nuevo Creador</span>
                </button>
              </div>

              {/* Fichas de Creadores */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {data.creadores.map((cr) => {
                  const notasAsignadas = (data.notas || []).filter(
                    (n) => (n.destinatario || '').toLowerCase().includes(cr.nombre.toLowerCase())
                  );

                  return (
                    <div
                      key={cr.id}
                      className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs flex flex-col justify-between space-y-4"
                    >
                      <div>
                        {/* Cabecera del Creador */}
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-bold text-sm text-slate-900">{cr.nombre}</h4>
                            <span className="text-xs text-slate-500">{cr.alias}</span>
                          </div>
                          <span className="text-[10px] font-bold text-[#008C8C] bg-[#E6F4F4] px-2 py-0.5 rounded-full">
                            {cr.confiabilidad || 90}% Cumplimiento
                          </span>
                        </div>

                        {/* Redes Sociales */}
                        <div className="flex items-center gap-1.5 mt-3 flex-wrap">
                          {cr.redes?.instagram && (
                            <a
                              href={`https://instagram.com/${cr.redes.instagram.replace('@', '')}`}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1 px-2 py-1 rounded bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 text-[11px] font-medium"
                            >
                              <IconInstagram className="w-3.5 h-3.5" />
                              <span>{cr.redes.instagram}</span>
                            </a>
                          )}
                          {cr.redes?.tiktok && (
                            <a
                              href={`https://tiktok.com/@${cr.redes.tiktok.replace('@', '')}`}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1 px-2 py-1 rounded bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 text-[11px] font-medium"
                            >
                              <IconTikTok className="w-3.5 h-3.5" />
                              <span>{cr.redes.tiktok}</span>
                            </a>
                          )}
                          {cr.redes?.youtube && (
                            <a
                              href={`https://youtube.com/@${cr.redes.youtube.replace('@', '')}`}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1 px-2 py-1 rounded bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 text-[11px] font-medium"
                            >
                              <IconYouTube className="w-3.5 h-3.5" />
                              <span>{cr.redes.youtube}</span>
                            </a>
                          )}
                          {cr.redes?.twitch && (
                            <a
                              href={`https://twitch.tv/${cr.redes.twitch.replace('@', '')}`}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1 px-2 py-1 rounded bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 text-[11px] font-medium"
                            >
                              <IconTwitch className="w-3.5 h-3.5" />
                              <span>{cr.redes.twitch}</span>
                            </a>
                          )}
                        </div>

                        {/* Contacto */}
                        <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                          <div className="flex items-center justify-between">
                            <span>WhatsApp: +{cr.telefono}</span>
                            <a
                              href={`https://wa.me/${cr.telefono}`}
                              target="_blank"
                              rel="noreferrer"
                              className="text-emerald-600 hover:underline flex items-center gap-1"
                            >
                              <IconWhatsApp className="w-3 h-3" />
                              <span>Chat</span>
                            </a>
                          </div>
                          <div>Agencia: <span className="font-semibold text-slate-700">{cr.agencia || 'Directo'}</span></div>
                          <div className="truncate text-slate-500">{cr.direccion}</div>
                        </div>

                        {/* Productos Asignados */}
                        <div className="mt-3 pt-3 border-t border-slate-100">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                            Productos Asignados ({notasAsignadas.length})
                          </span>

                          {notasAsignadas.length === 0 ? (
                            <p className="text-xs text-slate-400 italic">Sin productos en curso</p>
                          ) : (
                            <div className="space-y-1.5">
                              {notasAsignadas.map((asig) => (
                                <div
                                  key={asig.id}
                                  className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs flex items-center justify-between"
                                >
                                  <div className="min-w-0 pr-2">
                                    <p className="font-semibold text-slate-900 truncate">{asig.producto}</p>
                                    <span className="text-[10px] text-slate-500">
                                      Límite: {asig.fechaLimite || 'Sin fecha'}
                                    </span>
                                  </div>

                                  {asig.linkEvidencia ? (
                                    <a
                                      href={asig.linkEvidencia}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200 hover:underline shrink-0"
                                    >
                                      ✓ Video
                                    </a>
                                  ) : (
                                    <button
                                      onClick={() => {
                                        setLinkModalNota(asig);
                                        setInputLink('');
                                      }}
                                      className="text-[10px] font-bold text-[#008C8C] bg-[#E6F4F4] px-2 py-1 rounded hover:bg-[#BFE4E4] shrink-0"
                                    >
                                      + Subir Link
                                    </button>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Botón Asignar Producto */}
                      <button
                        onClick={() => handleAsignarProductoACreador(cr)}
                        className="w-full mt-2 py-2 text-xs font-bold text-[#008C8C] hover:bg-[#E6F4F4] rounded-lg border border-[#008C8C]/30 transition text-center"
                      >
                        + Asignar Producto
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* =======================================================
              MÓDULO 04: AUTOMATIZACIONES (MONITOR n8n)
             ======================================================= */}
          {activeTab === 'automatizaciones' && (
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Bot className="w-4 h-4 text-[#008C8C]" />
                  <span>Monitor de Automatizaciones n8n & Recordatorios</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Los recordatorios automáticos corren vía n8n consultando el endpoint <code className="bg-slate-100 text-[#008C8C] px-1.5 py-0.5 rounded font-mono text-[11px]">/api/n8n/pendientes</code>
                </p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs space-y-4">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Entregas de Video Pendientes de Notificar
                </h4>

                <div className="space-y-2">
                  {(data.notas || [])
                    .filter((n) => n.esCreador && n.estatusContenido !== 'Entregado')
                    .map((item) => (
                      <div
                        key={item.id}
                        className="p-3 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-between text-xs"
                      >
                        <div>
                          <span className="font-bold text-slate-900 block">{item.destinatario}</span>
                          <span className="text-slate-500">{item.producto} · Límite: {item.fechaLimite || 'Próximo'}</span>
                        </div>
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded border border-amber-200">
                          Pendiente de Video
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {/* =======================================================
              MÓDULO 05: REPORTES & MÉTRICAS
             ======================================================= */}
          {activeTab === 'reportes' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 1. Gráfica Retiros por Tienda */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs space-y-4">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Retiros por Tienda
                  </h4>
                  <div className="space-y-3">
                    {kpis.saldosPorTienda.map((st) => {
                      const pct = kpis.totalNotas > 0 ? Math.round((st.unidades / kpis.totalNotas) * 100) : 0;
                      return (
                        <div key={st.nombre} className="space-y-1">
                          <div className="flex justify-between text-xs font-medium">
                            <span className="text-slate-700">{st.nombre}</span>
                            <span className="text-slate-500">{st.unidades} ({pct}%)</span>
                          </div>
                          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#008C8C] rounded-full"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Cumplimiento de Creadores */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs space-y-4">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Cumplimiento de Videos
                  </h4>
                  <div className="text-center py-2">
                    <span className="text-3xl font-bold font-mono text-[#008C8C]">
                      {kpis.tasaCumplimiento}%
                    </span>
                    <span className="text-xs text-slate-500 block mt-1">
                      {kpis.creadoresCumplidosCount} de {kpis.creadoresTotalCount} videos publicados
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center text-xs">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-800">
                      <span className="font-bold text-base block">{kpis.creadoresCumplidosCount}</span>
                      <span className="text-[10px] text-slate-500">Publicados</span>
                    </div>
                    <div className="p-2 rounded-lg bg-amber-50 text-amber-800">
                      <span className="font-bold text-base block">{kpis.creadoresPendientesCount}</span>
                      <span className="text-[10px] text-slate-500">En Espera</span>
                    </div>
                  </div>
                </div>

                {/* 3. Trazabilidad de Envíos */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs space-y-4">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Estatus Logístico
                  </h4>
                  <div className="text-center py-2">
                    <span className="text-3xl font-bold font-mono text-emerald-700">
                      100%
                    </span>
                    <span className="text-xs text-slate-500 block mt-1">
                      Envíos registrados con seguimiento
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 text-xs text-slate-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Entregados:</span>
                      <span className="font-bold text-emerald-700">{kpis.enviosEntregados} paquetes</span>
                    </div>
                    <div className="flex justify-between">
                      <span>En Tránsito:</span>
                      <span className="font-bold text-[#008C8C]">{kpis.enviosTransito} paquetes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* =======================================================
          MODAL: NUEVA SALIDA / NOTA DE TIENDA
         ======================================================= */}
      {showNuevaNotaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 max-w-xl w-full shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">
                Registrar Salida de Producto / Nota de Tienda
              </h3>
              <button
                onClick={() => setShowNuevaNotaModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCrearNota} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Marca
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.marca}
                    onChange={(e) => setFormData({ ...formData, marca: e.target.value })}
                    placeholder="DeepCool"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#008C8C]/20 focus:border-[#008C8C]"
                  />
                </div>

                <div>
                  <MiniDatePicker
                    label="Fecha de Salida"
                    valueISO={formData.fechaISO}
                    onChange={(iso, texto) =>
                      setFormData({
                        ...formData,
                        fechaISO: iso,
                        fecha: texto
                      })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Tienda / Proveedor</label>
                  <select
                    value={formData.tienda}
                    onChange={(e) => setFormData({ ...formData, tienda: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#008C8C]/20 focus:border-[#008C8C]"
                  >
                    <option value="SUPERMEX">SUPERMEX</option>
                    <option value="DDTECH">DDTECH</option>
                    <option value="CYBERPUERTA">CYBERPUERTA</option>
                    <option value="OTRA">+ Escribir otro...</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Monto ($ MXN)</label>
                  <input
                    type="number"
                    value={formData.monto}
                    onChange={(e) => setFormData({ ...formData, monto: e.target.value })}
                    placeholder="2200"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-mono focus:outline-none focus:ring-2 focus:ring-[#008C8C]/20 focus:border-[#008C8C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1"># Folio NC</label>
                  <input
                    type="text"
                    value={formData.numeroNC}
                    onChange={(e) => setFormData({ ...formData, numeroNC: e.target.value })}
                    placeholder="Opcional"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-mono focus:outline-none focus:ring-2 focus:ring-[#008C8C]/20 focus:border-[#008C8C]"
                  />
                </div>
              </div>

              {formData.tienda === 'OTRA' && (
                <div>
                  <label className="block text-xs font-semibold text-[#008C8C] mb-1">Nombre del Proveedor</label>
                  <input
                    type="text"
                    required
                    value={formData.otraTienda}
                    onChange={(e) => setFormData({ ...formData, otraTienda: e.target.value })}
                    placeholder="Nombre de la tienda"
                    className="w-full bg-white border border-[#008C8C] rounded-lg px-3 py-2 text-slate-900 focus:outline-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nombre del Producto (Según catálogo del distribuidor)
                </label>
                <input
                  type="text"
                  required
                  value={formData.producto}
                  onChange={(e) => setFormData({ ...formData, producto: e.target.value })}
                  placeholder="Ej. Gabinete Blanco High Airflow CH560 o Cooler AK620"
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#008C8C]/20 focus:border-[#008C8C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Medio / Campaña</label>
                  <input
                    type="text"
                    required
                    value={formData.medio}
                    onChange={(e) => setFormData({ ...formData, medio: e.target.value })}
                    placeholder="Ej. Sample Ingenia o Torneo"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Estatus de Envío</label>
                  <select
                    value={formData.estatusEnvio}
                    onChange={(e) => setFormData({ ...formData, estatusEnvio: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none"
                  >
                    <option value="Entregado">Entregado</option>
                    <option value="En tránsito">En tránsito</option>
                    <option value="Pendiente">Pendiente</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Destinatario</label>
                  <input
                    type="text"
                    required
                    value={formData.destinatario}
                    onChange={(e) => setFormData({ ...formData, destinatario: e.target.value })}
                    placeholder="Nombre completo"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Teléfono (WhatsApp)</label>
                  <input
                    type="text"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    placeholder="5255..."
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Dirección de Entrega</label>
                <input
                  type="text"
                  value={formData.direccion}
                  onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                  placeholder="Calle, número, colonia, ciudad o N/A"
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none"
                />
              </div>

              {/* Checkbox Creador */}
              <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold text-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.esCreador}
                    onChange={(e) => setFormData({ ...formData, esCreador: e.target.checked })}
                    className="w-4 h-4 text-[#008C8C] rounded border-slate-300 focus:ring-[#008C8C]"
                  />
                  <span>¿Es para un creador de contenido que debe publicar un video?</span>
                </label>

                {formData.esCreador && (
                  <div className="pt-2">
                    <MiniDatePicker
                      label="Fecha Límite de Publicación"
                      valueISO={formData.fechaLimite}
                      placeholder="Seleccionar fecha límite..."
                      onChange={(iso) =>
                        setFormData({
                          ...formData,
                          fechaLimite: iso
                        })
                      }
                    />
                  </div>
                )}
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowNuevaNotaModal(false)}
                  className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 text-xs font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#008C8C] hover:bg-[#007A7A] text-white text-xs font-bold transition shadow-xs"
                >
                  Guardar Salida
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =======================================================
          MODAL: SUBIR LINK DE EVIDENCIA
         ======================================================= */}
      {linkModalNota && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
          <div className="bg-white rounded-xl border border-slate-200 p-5 max-w-md w-full shadow-xl space-y-4 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="font-bold text-sm text-slate-900">
                Registrar Enlace de Evidencia / Video
              </h3>
              <button onClick={() => setLinkModalNota(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-slate-500">
              Pega el enlace del video (YouTube, TikTok, Reel o Stream) de{' '}
              <strong className="text-slate-900">{linkModalNota.destinatario}</strong>:
            </p>

            <input
              type="url"
              required
              value={inputLink}
              onChange={(e) => setInputLink(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#008C8C]/20 focus:border-[#008C8C]"
            />

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setLinkModalNota(null)}
                className="px-3 py-1.5 text-slate-600 hover:bg-slate-100 rounded-lg font-semibold"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleGuardarLinkEvidencia}
                className="px-4 py-1.5 bg-[#008C8C] hover:bg-[#007A7A] text-white rounded-lg font-bold shadow-xs"
              >
                Verificar y Guardar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =======================================================
          MODAL: NUEVO CREADOR
         ======================================================= */}
      {showNuevoCreadorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 max-w-lg w-full shadow-2xl space-y-4 text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-base text-slate-900">
                Registrar Nuevo Creador de Contenido
              </h3>
              <button onClick={() => setShowNuevoCreadorModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCrearCreador} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Nombre Completo</label>
                  <input
                    type="text"
                    required
                    value={creadorForm.nombre}
                    onChange={(e) => setCreadorForm({ ...creadorForm, nombre: e.target.value })}
                    placeholder="Ej. Roberto Morales"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Alias / Canal</label>
                  <input
                    type="text"
                    value={creadorForm.alias}
                    onChange={(e) => setCreadorForm({ ...creadorForm, alias: e.target.value })}
                    placeholder="@robertotech"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Teléfono (WhatsApp)</label>
                  <input
                    type="text"
                    required
                    value={creadorForm.telefono}
                    onChange={(e) => setCreadorForm({ ...creadorForm, telefono: e.target.value })}
                    placeholder="5233..."
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Agencia / Contacto</label>
                  <input
                    type="text"
                    value={creadorForm.agencia}
                    onChange={(e) => setCreadorForm({ ...creadorForm, agencia: e.target.value })}
                    placeholder="Directo / Ingenia"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Instagram (@)</label>
                  <input
                    type="text"
                    value={creadorForm.instagram}
                    onChange={(e) => setCreadorForm({ ...creadorForm, instagram: e.target.value })}
                    placeholder="@usuario"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">TikTok (@)</label>
                  <input
                    type="text"
                    value={creadorForm.tiktok}
                    onChange={(e) => setCreadorForm({ ...creadorForm, tiktok: e.target.value })}
                    placeholder="@usuario"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Dirección de Envío</label>
                <input
                  type="text"
                  value={creadorForm.direccion}
                  onChange={(e) => setCreadorForm({ ...creadorForm, direccion: e.target.value })}
                  placeholder="Calle, número, código postal y ciudad"
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowNuevoCreadorModal(false)}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#008C8C] hover:bg-[#007A7A] text-white rounded-lg font-bold shadow-xs"
                >
                  Guardar Creador
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =======================================================
          MODAL: CARGA MASIVA DE EXCEL
         ======================================================= */}
      {showImportarModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 max-w-2xl w-full shadow-2xl space-y-4 text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-[#008C8C]" />
                <span>Carga Masiva de Salidas desde Excel</span>
              </h3>
              <button onClick={() => setShowImportarModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-slate-500">
              Selecciona las filas en tu Excel, cópialas con <kbd className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-800 border">Ctrl + C</kbd> y pégalas aquí con <kbd className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-800 border">Ctrl + V</kbd>. El sistema detectará las columnas automáticamente.
            </p>

            <textarea
              rows="6"
              value={textoExcelPegado}
              onChange={(e) => procesarTextoExcel(e.target.value)}
              placeholder="DeepCool	15 DE ENERO	SUPERMEX	2200	NC-123	Gabinete CH560	Sample Ingenia	Alondra"
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-900 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-[#008C8C]/20 focus:border-[#008C8C]"
            />

            {filasPrevisualizadas.length > 0 && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 font-medium">
                ✓ Se detectaron {filasPrevisualizadas.length} filas listas para importar.
              </div>
            )}

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowImportarModal(false)}
                className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-semibold"
              >
                Cancelar
              </button>
              <button
                type="button"
                disabled={filasPrevisualizadas.length === 0}
                onClick={handleGuardarExcel}
                className="px-5 py-2 bg-[#008C8C] hover:bg-[#007A7A] disabled:opacity-40 text-white rounded-lg font-bold shadow-xs transition"
              >
                Guardar {filasPrevisualizadas.length} Registros
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
