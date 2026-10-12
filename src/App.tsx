import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Clock,
  MapPin,
  Calendar,
  ShieldCheck,
  Award,
  Star,
  Check,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  Menu,
  X,
  Layers,
  Heart,
  HelpCircle,
  AlertCircle,
  Phone,
  Compass
} from 'lucide-react';

const InstagramIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const WHATSAPP_PHONE = '5492615724000';
const INSTAGRAM_USER = 'marynails_manicurista';
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_USER}/`;
const GOOGLE_MAPS_URL = 'https://maps.google.com/?q=América+2751,+Godoy+Cruz,+Mendoza';

const createWhatsAppLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

const handleInstagramClick = (e: React.MouseEvent) => {
  e.preventDefault();
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    const isAndroid = /Android/i.test(navigator.userAgent);
    if (isAndroid) {
      window.location.href = `intent://www.instagram.com/${INSTAGRAM_USER}/#Intent;scheme=https;package=com.instagram.android;end`;
    } else {
      window.location.href = `instagram://user?username=${INSTAGRAM_USER}`;
      setTimeout(() => {
        window.location.href = INSTAGRAM_URL;
      }, 2000);
    }
  } else {
    window.open(INSTAGRAM_URL, '_blank');
  }
};

// WhatsApp Icon component
const WhatsAppIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Logo Component
const Logo = ({ className = "h-8", variant = "dark" }: { className?: string; variant?: "dark" | "light" }) => (
  <img 
    src={variant === "dark" ? "/logo_negro.png" : "/logo_blanco.png"} 
    alt="MaryNails by Elizabeth Caron" 
    className={`${className} object-contain`} 
  />
);

// ==========================================
// 1. Navigation Header
// ==========================================
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trabajos', href: '#galeria' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Ubicación', href: '#ubicacion' },
    { name: 'Información & Tips', href: '#info-util' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'bg-white shadow-sm' 
          : isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-rose-100/40' 
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent'
      }`}>
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <Logo 
              className="h-9" 
              variant={isMobileMenuOpen || isScrolled ? 'dark' : 'light'} 
            />
          </a>

          {/* Quick Header CTA */}
          <div className="flex items-center gap-2.5">
            <a
              href={createWhatsAppLink("Hola Elizabeth! Quiero consultar por un turno en MaryNails...")}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                isScrolled || isMobileMenuOpen
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm'
                  : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30'
              }`}
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Turnos</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${
                isMobileMenuOpen || isScrolled ? 'text-gray-800 hover:bg-rose-50' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6 pb-8 flex flex-col justify-between"
          >
            <div className="flex flex-col divide-y divide-rose-50">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-4 text-gray-800 text-lg font-medium hover:text-rose-500 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-gray-300 text-sm">→</span>
                </a>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-rose-100">
              <a
                href={createWhatsAppLink("Hola Elizabeth! Quiero agendar un turno para MaryNails")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-emerald-600 text-white py-3.5 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 active:scale-95 transition-all text-sm"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Agendar Turno por WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  handleInstagramClick(e);
                }}
                className="w-full bg-rose-50 text-gray-700 py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 active:bg-rose-100 text-sm"
              >
                <InstagramIcon className="w-4 h-4 text-rose-500" />
                Seguir en Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ==========================================
// 2. Hero Section (Direct, High Impact)
// ==========================================
function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[92svh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=75&auto=format"
          alt="Manicura y Nail Art profesional"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/75 via-stone-900/60 to-stone-950/90" />
      </div>

      <div className="relative z-10 w-full max-w-lg mx-auto px-5 pt-24 pb-16 text-center">
        {/* Subtle pill tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-rose-300" />
          <span className="text-white/95 text-xs font-medium tracking-wide">
            7 años de experiencia · Godoy Cruz, Mendoza
          </span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-5 flex justify-center"
        >
          <Logo className="h-28 sm:h-36 drop-shadow-2xl" variant="light" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight mb-3"
        >
          Manicura & Pedicura de Precisión
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-stone-200 text-sm sm:text-base leading-relaxed mb-6 px-3"
        >
          Cuidado profesional, técnicas modernas y productos premium para el bienestar de tus uñas. Atención 100% personalizada.
        </motion.p>

        {/* Social Proof Pill Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-3 gap-2 bg-stone-900/60 backdrop-blur-md border border-white/15 rounded-2xl p-3 mb-8 text-white max-w-sm mx-auto"
        >
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center text-amber-300 gap-1 mb-0.5">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              <span className="text-xs font-bold text-white">4.9</span>
            </div>
            <span className="text-[11px] text-stone-300">Calificación</span>
          </div>
          <div className="flex flex-col items-center justify-center border-x border-white/10">
            <div className="flex items-center gap-1 text-rose-300 mb-0.5">
              <Award className="w-3.5 h-3.5" />
              <span className="text-xs font-bold text-white">+500</span>
            </div>
            <span className="text-[11px] text-stone-300">Clientas</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-1 text-emerald-400 mb-0.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="text-xs font-bold text-white">100%</span>
            </div>
            <span className="text-[11px] text-stone-300">Esterilizado</span>
          </div>
        </motion.div>

        {/* Direct CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 max-w-xs mx-auto"
        >
          <a
            href={createWhatsAppLink("Hola Elizabeth! Vi tu página y quiero reservar un turno para...")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3.5 px-6 rounded-2xl shadow-lg shadow-emerald-700/30 active:scale-95 transition-all text-sm"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>Reservar Turno</span>
          </a>
          <a
            href="#servicios"
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-3.5 px-6 rounded-2xl border border-white/20 backdrop-blur-sm active:scale-95 transition-all text-sm"
          >
            <span>Ver Servicios</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ==========================================
// 3. Visual Portfolio / Gallery Section
// (Placed early because users want to see real nail results first)
// ==========================================
function GallerySection() {
  const works = [
    { src: '/nails1.jpg', tag: 'Frenchie & Nivelación', title: 'Francesa Moderna' },
    { src: '/nails2.jpg', tag: 'Semipermanente', title: 'Nude Minimalista' },
    { src: '/nails3.jpg', tag: 'Nail Art', title: 'Diseño Personalizado' },
    { src: '/nails4.jpg', tag: 'Tono Tendencia', title: 'Brillo Duradero' },
    { src: '/nails5.jpg', tag: 'Kapping Gel', title: 'Refuerzo Natural' },
    { src: '/nails6.jpg', tag: 'Soft Gel', title: 'Largo Esculpido' },
  ];

  return (
    <section id="galeria" className="py-12 bg-white border-b border-rose-50">
      <div className="max-w-lg lg:max-w-4xl mx-auto px-5">
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="text-xs font-bold tracking-wider uppercase text-rose-500 block mb-1">
              Portafolio
            </span>
            <h2 className="text-2xl font-serif font-bold text-gray-900">
              Trabajos Reales
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Resultados de clientas en el salón
            </p>
          </div>

          <a
            href={INSTAGRAM_URL}
            onClick={handleInstagramClick}
            className="inline-flex items-center gap-1 text-xs font-semibold text-rose-500 hover:text-rose-600 bg-rose-50 px-3 py-1.5 rounded-full transition-colors"
          >
            <span>Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Gallery Grid (Compact 3x2 on mobile, clean aspect ratio) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
          {works.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-rose-50 shadow-sm border border-rose-100/50"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-2.5 text-white">
                <span className="text-[10px] font-medium text-rose-200 tracking-wide uppercase">
                  {item.tag}
                </span>
                <span className="text-xs font-semibold leading-tight drop-shadow-sm">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Social Callout */}
        <div className="mt-5 p-3.5 rounded-2xl bg-gradient-to-r from-rose-50/70 via-white to-rose-50/70 border border-rose-100 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-500 via-pink-500 to-amber-400 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <InstagramIcon className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-gray-800 truncate">@{INSTAGRAM_USER}</p>
              <p className="text-[11px] text-gray-500 truncate">Videos de procedimientos y nuevos diseños</p>
            </div>
          </div>
          <a
            href={INSTAGRAM_URL}
            onClick={handleInstagramClick}
            className="flex-shrink-0 text-xs font-semibold text-gray-700 hover:text-rose-600 bg-white px-3 py-1.5 rounded-xl border border-rose-200/60 shadow-2xs transition-colors"
          >
            Ver más
          </a>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 4. Services Section (Structured, Filterable, Professional Icons)
// ==========================================
interface ServiceItem {
  id: string;
  category: 'manos' | 'pies' | 'combos';
  title: string;
  badge?: string;
  duration: string;
  description: string;
  highlights: string[];
}

function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'manos' | 'pies' | 'combos'>('todos');

  const services: ServiceItem[] = [
    {
      id: 'semi',
      category: 'manos',
      title: 'Esmaltado Semipermanente',
      badge: 'El más elegido',
      duration: '60 min',
      description: 'Color de alto brillo con secado UV inmediato. Durabilidad impecable de 15 a 21 días sin descascararse.',
      highlights: ['Limpieza de cutículas', 'Nivelación ligera', 'Brillo espejo prolongado']
    },
    {
      id: 'rusa',
      category: 'manos',
      title: 'Manicura Rusa & Combinada',
      badge: 'Precisión',
      duration: '75 min',
      description: 'Técnica en seco con instrumental esterilizado para una limpieza profunda y esmaltado al ras de la cutícula.',
      highlights: ['Crecimiento más limpio', 'Cero dolor o inflamación', 'Acabado de alta gama']
    },
    {
      id: 'kapping',
      category: 'manos',
      title: 'Kapping / Nivelación en Gel',
      badge: 'Protección',
      duration: '75 min',
      description: 'Fina capa de gel sobre la uña natural que aporta resistencia, evitando quiebres y ayudando a su crecimiento.',
      highlights: ['Ideal para uñas frágiles', 'Aspecto ultra natural', 'Refuerzo sin grosor excesivo']
    },
    {
      id: 'softgel',
      category: 'manos',
      title: 'Soft Gel / Esculpidas',
      badge: 'Tendencia',
      duration: '90 - 120 min',
      description: 'Extensiones ligeras y flexibles con tips de gel que se adhieren a la uña con el largo y forma que desees.',
      highlights: ['No daña la uña natural', 'Largo y forma a elección', 'Durabilidad superior']
    },
    {
      id: 'pedicura',
      category: 'pies',
      title: 'Pedicura Spa Completa',
      badge: 'Cuidado total',
      duration: '60 - 80 min',
      description: 'Tratamiento integral de higiene, exfoliación de asperezas, hidratación profunda y esmaltado duradero.',
      highlights: ['Tratamiento de talones', 'Esmaltado impecable', 'Sensación de alivio y frescura']
    },
    {
      id: 'combo',
      category: 'combos',
      title: 'Combo Belleza Total (Manos + Pies)',
      badge: 'Recomendado',
      duration: '120 min',
      description: 'Sesión integral para renovar manos y pies en un solo turno con atención dedicada y beneficio especial.',
      highlights: ['Ahorro de tiempo', 'Combinación de colores', 'Atención 100% personalizada']
    }
  ];

  const filtered = activeCategory === 'todos' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="servicios" className="py-12 bg-gradient-to-b from-stone-50/50 via-white to-stone-50/50">
      <div className="max-w-lg lg:max-w-4xl mx-auto px-5">
        <div className="text-center mb-6">
          <span className="text-xs font-bold tracking-wider uppercase text-rose-500 block mb-1">
            Carta de Tratamientos
          </span>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
            Servicios Profesionales
          </h2>
          <p className="text-xs text-gray-500 max-w-xs mx-auto">
            Atención minuciosa con instrumental esterilizado en cada cita
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-1.5 mb-7 bg-stone-100/80 p-1 rounded-2xl max-w-sm mx-auto">
          {[
            { id: 'todos', label: 'Todos' },
            { id: 'manos', label: 'Manos' },
            { id: 'pies', label: 'Pies' },
            { id: 'combos', label: 'Combos' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-white text-gray-900 shadow-xs'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards */}
        <div className="space-y-3.5">
          {filtered.map((service, index) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-rose-100/60 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 leading-tight">
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-1 text-[11px] text-gray-400 mt-0.5">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span>Aprox. {service.duration}</span>
                      </div>
                    </div>
                  </div>

                  {service.badge && (
                    <span className="text-[10px] font-semibold tracking-wide bg-rose-50 text-rose-600 px-2.5 py-0.5 rounded-full flex-shrink-0">
                      {service.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  {service.description}
                </p>

                {/* Highlights List */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 mb-4 pt-2 border-t border-gray-50">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-gray-500">
                      <Check className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center justify-between border-t border-rose-50/60">
                <span className="text-[11px] text-gray-400">
                  Consultar fecha y cotización
                </span>
                <a
                  href={createWhatsAppLink(`Hola Elizabeth! Vi el servicio "${service.title}" en la página y me gustaría consultar disponibilidad y precio.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2 px-3.5 rounded-xl active:scale-95 transition-all shadow-xs"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>Pedir Turno</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Consultation Banner */}
        <div className="mt-6 p-4 rounded-2xl bg-white border border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <p className="text-xs font-bold text-gray-800">¿No estás segura de qué técnica te conviene?</p>
            <p className="text-[11px] text-gray-500">Enviame una foto de tus uñas por WhatsApp y te oriento al instante.</p>
          </div>
          <a
            href={createWhatsAppLink("Hola Elizabeth! Necesito asesoramiento sobre qué servicio me conviene según mis uñas...")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-2 rounded-xl transition-colors"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>Asesoramiento gratis</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 5. Location & Studio Section (Clean & Direct)
// ==========================================
function LocationSection() {
  return (
    <section id="ubicacion" className="py-12 bg-white border-t border-rose-50">
      <div className="max-w-lg lg:max-w-4xl mx-auto px-5">
        <div className="text-center mb-6">
          <span className="text-xs font-bold tracking-wider uppercase text-rose-500 block mb-1">
            Ubicación & Atención
          </span>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-1">
            Dónde Encontrarnos
          </h2>
          <p className="text-xs text-gray-500">
            Espacio privado climatizado y exclusivo
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900 mb-0.5">Dirección</p>
              <p className="text-xs text-gray-600 leading-snug">
                América 2751 (Barrio Empleado de Comercio)
              </p>
              <p className="text-[11px] text-gray-400 mt-0.5">Godoy Cruz, Mendoza</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900 mb-0.5">Horarios de Atención</p>
              <p className="text-xs text-gray-600 leading-snug">
                Lunes a Sábados: 9:00 a 20:00 hs
              </p>
              <p className="text-[11px] text-rose-500 font-medium mt-0.5">
                Únicamente con turno previo
              </p>
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="relative rounded-2xl overflow-hidden border border-rose-100 shadow-sm mb-3 h-56 sm:h-64 bg-stone-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.95108751597937!2d-68.87625229652784!3d-32.9120930490561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0bdea6a1429d%3A0xcb50f6e877af6539!2sMarynails!5e0!3m2!1ses-419!2sar!4v1771019996293!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación MaryNails"
          />
        </div>

        {/* Open in Google Maps Button */}
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-stone-50 hover:bg-stone-100 text-gray-700 text-xs font-semibold rounded-xl border border-stone-200 transition-colors"
        >
          <Compass className="w-4 h-4 text-rose-500" />
          <span>Abrir dirección en Google Maps</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
        </a>
      </div>
    </section>
  );
}

// ==========================================
// 6. Optional / Expandable Module: "Información Útil"
// (Everything secondary is organized here, clean & unobtrusive)
// ==========================================
function UsefulInfoSection() {
  const [activeTab, setActiveTab] = useState<'tips' | 'faq' | 'about'>('tips');

  const tips = [
    {
      title: 'No cortes tus cutículas en casa',
      desc: 'Es el error más común. Puede generar cortes e inflamación. En el salón se realiza una manicura rusa segura con torno y tijeras especiales.',
      important: true,
    },
    {
      title: 'Evitá cremas o aceites pesados el mismo día',
      desc: 'Los residuos oleosos dificultan que la base del esmalte semipermanente o gel se adhiera con máxima fuerza a la superficie de la uña.',
      important: false,
    },
    {
      title: 'Avisá si tenés producto de otro salón',
      desc: 'El retiro de acrílico o geles externos requiere entre 20 y 30 minutos adicionales para preservar intacta la salud de tu uña natural.',
      important: false,
    },
    {
      title: 'Calzado descubierto para pedicura tradicional',
      desc: 'Si elegís esmaltado tradicional en pies, traé sandalias para evitar estropear el secado al momento de calzarte.',
      important: false,
    },
    {
      title: 'Puntualidad en tu horario',
      desc: 'La atención es de tiempo exclusivo para vos. Llegar a horario garantiza el tiempo necesario para cada detalle de tu diseño.',
      important: false,
    },
  ];

  const faqs = [
    {
      q: '¿Cuánto dura el esmaltado semipermanente?',
      a: 'Entre 15 y 21 días impecable, dependiendo del crecimiento natural de tu uña y los cuidados diarios (usar guantes para productos de limpieza abrasivos).'
    },
    {
      q: '¿Cómo garantizan la higiene y bioseguridad?',
      a: 'Todo el instrumental metálico (fresas, repujadores, tijeras) pasa por un protocolo estricto de desinfección y esterilización profesional. Los insumos de lima y pulido son descartables.'
    },
    {
      q: '¿Cómo hago para reservar mi turno?',
      a: 'Trabajamos 100% con reserva previa por WhatsApp. Solo tenés que indicarme el servicio que querés y te paso los días y horarios libres.'
    },
    {
      q: '¿Puedo llevar un diseño o foto de internet?',
      a: '¡Sí, por supuesto! Podés enviarme la foto de referencia por WhatsApp antes del turno para coordinar colores y detalles.'
    }
  ];

  return (
    <section id="info-util" className="py-12 bg-stone-50 border-t border-rose-100/60">
      <div className="max-w-lg lg:max-w-4xl mx-auto px-5">
        <div className="text-center mb-6">
          <span className="text-xs font-bold tracking-wider uppercase text-rose-500 block mb-1">
            Apartado Opcional
          </span>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-1">
            Información & Consejos
          </h2>
          <p className="text-xs text-gray-500">
            Todo lo que te interesa saber antes de tu visita
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex bg-stone-200/70 p-1 rounded-2xl mb-5 max-w-sm mx-auto">
          <button
            onClick={() => setActiveTab('tips')}
            className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'tips' ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Tips para tu cita
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'faq' ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Preguntas
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'about' ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Sobre Mí
          </button>
        </div>

        {/* Tab 1: Tips */}
        {activeTab === 'tips' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-2.5"
          >
            {tips.map((t, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-2xl bg-white border transition-all ${
                  t.important ? 'border-rose-300 shadow-xs bg-rose-50/20' : 'border-rose-100/60'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    t.important ? 'bg-rose-500 text-white' : 'bg-rose-100 text-rose-600'
                  }`}>
                    {t.important ? <AlertCircle className="w-3.5 h-3.5" /> : <Check className="w-3.5 h-3.5" />}
                  </div>
                  <h4 className="text-xs font-bold text-gray-900 leading-tight">
                    {t.title}
                  </h4>
                  {t.important && (
                    <span className="text-[9px] font-bold tracking-wider uppercase bg-rose-500 text-white px-1.5 py-0.5 rounded-full ml-auto">
                      Importante
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed pl-8">
                  {t.desc}
                </p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 2: FAQ */}
        {activeTab === 'faq' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-2.5"
          >
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-rose-100/60 shadow-xs">
                <div className="flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 mb-1">
                      {faq.q}
                    </h4>
                    <p className="text-[11px] text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 3: About Me */}
        {activeTab === 'about' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-5 rounded-2xl bg-white border border-rose-100/60 shadow-xs"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center mb-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-rose-50 flex-shrink-0 border border-rose-100">
                <img
                  src="/salon.jpg"
                  alt="Espacio de trabajo Elizabeth Caron"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-sm font-bold text-gray-900">Elizabeth Caron</h3>
                <p className="text-xs text-rose-500 font-medium">Especialista en Belleza de Uñas</p>
                <p className="text-[11px] text-gray-500 mt-1">7 años de trayectoria y formación constante en Mendoza</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-3">
              "Para mí cada servicio es un momento de desconexión y cuidado personal para vos. Trabajo con productos aprobados, esterilización de grado profesional y pasión por los acabados prolijos."
            </p>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-3 border-t border-gray-100">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>Atención personalizada</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>Productos premium</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// ==========================================
// 7. Testimonials (Brief Social Proof)
// ==========================================
function TestimonialsSummary() {
  const reviews = [
    { name: 'María G.', text: 'Elizabeth es una genia. La manicura rusa me dura intacta 3 semanas sin levantarse.' },
    { name: 'Carolina L.', text: 'Super higiénico todo y muy prolijo. Se nota la dedicación y el amor por los detalles.' },
    { name: 'Lucía M.', text: 'El mejor lugar de Godoy Cruz. Los pies quedaron súper suaves y las manos hermosas.' },
  ];

  return (
    <section className="py-10 bg-white border-t border-rose-50">
      <div className="max-w-lg lg:max-w-4xl mx-auto px-5">
        <div className="text-center mb-5">
          <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <h3 className="text-base font-serif font-bold text-gray-900">
            Opiniones de Clientas
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {reviews.map((rev, i) => (
            <div key={i} className="p-3.5 rounded-2xl bg-stone-50 border border-stone-100/80 text-center">
              <p className="text-xs text-gray-600 italic leading-relaxed mb-2">
                "{rev.text}"
              </p>
              <span className="text-[11px] font-bold text-gray-800">{rev.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 8. Footer
// ==========================================
function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 py-10 pb-28 border-t border-stone-900">
      <div className="max-w-lg mx-auto px-5 text-center">
        <div className="flex justify-center mb-3">
          <Logo className="h-10" variant="light" />
        </div>
        <p className="text-xs text-stone-400 mb-1">Elizabeth Caron · MaryNails</p>
        <p className="text-[11px] text-stone-500 mb-5">Godoy Cruz, Mendoza, Argentina</p>

        <div className="flex justify-center gap-3 mb-6">
          <a
            href={INSTAGRAM_URL}
            onClick={handleInstagramClick}
            className="w-10 h-10 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 flex items-center justify-center transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href={createWhatsAppLink("Hola Elizabeth! Te escribo desde la página web...")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-stone-900 hover:bg-stone-800 text-emerald-400 flex items-center justify-center transition-colors"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>
        </div>

        <p className="text-[10px] text-stone-600">
          © {new Date().getFullYear()} MaryNails. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

// ==========================================
// 9. Sticky Mobile Bottom Bar
// (Designed specifically for 1-hand thumb access on mobile)
// ==========================================
function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-rose-100/70 shadow-lg pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="max-w-md mx-auto flex items-center gap-2.5">
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center px-3 py-2 rounded-xl text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-colors flex-shrink-0"
          aria-label="Ver mapa"
        >
          <MapPin className="w-4 h-4 text-rose-500" />
          <span className="text-[10px] font-medium mt-0.5">Mapa</span>
        </a>

        <a
          href={createWhatsAppLink("Hola Elizabeth! Quiero consultar por un turno en MaryNails...")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20 transition-all text-xs sm:text-sm"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>Pedir Turno por WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

// ==========================================
// Main App Component
// ==========================================
export function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-rose-200 selection:text-rose-900">
      <Navigation />
      <HeroSection />
      <GallerySection />
      <ServicesSection />
      <LocationSection />
      <UsefulInfoSection />
      <TestimonialsSummary />
      <Footer />
      <StickyMobileBar />
    </div>
  );
}
