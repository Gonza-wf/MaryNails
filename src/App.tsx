import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Clock,
  MapPin,
  Check,
  ChevronDown,
  ArrowUpRight,
  Menu,
  X,
  Compass,
  AlertCircle,
  HelpCircle,
  Star
} from 'lucide-react';

const WHATSAPP_PHONE = '5492615724000';
const INSTAGRAM_USER = 'marynails_manicurista';
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_USER}/`;
const GOOGLE_MAPS_URL = 'https://maps.google.com/?q=O+Brien+2668,+Godoy+Cruz,+Mendoza';

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

// WhatsApp SVG
const WhatsAppIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Instagram SVG
const InstagramIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
// 1. Navigation Header (Minimalist)
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
    { name: 'Consejos & FAQ', href: '#info-util' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'bg-white shadow-sm' 
          : isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-stone-100' 
            : 'bg-transparent'
      }`}>
        <div className="max-w-4xl mx-auto px-5 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center">
            <Logo 
              className="h-8" 
              variant={isMobileMenuOpen || isScrolled ? 'dark' : 'light'} 
            />
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-xl transition-colors ${
              isMobileMenuOpen || isScrolled ? 'text-gray-900 hover:bg-stone-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
            <div className="flex flex-col divide-y divide-stone-100">
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

            <div className="space-y-3 pt-6 border-t border-stone-100">
              <a
                href={createWhatsAppLink("Hola Elizabeth! Quiero consultar por un turno en MaryNails...")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-emerald-600 text-white py-3.5 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all text-sm"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Agendar por WhatsApp</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  handleInstagramClick(e);
                }}
                className="w-full bg-stone-100 text-gray-700 py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 active:bg-stone-200 text-sm"
              >
                <InstagramIcon className="w-4 h-4 text-rose-500" />
                <span>Instagram</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ==========================================
// 2. Hero Section (Ultra Minimalist, Big Logo Focus)
// ==========================================
function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[85svh] flex items-center justify-center overflow-hidden">
      {/* Background Image with elegant dark vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=75&auto=format"
          alt="Manicura profesional"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/85 via-stone-900/75 to-stone-950/90" />
      </div>

      <div className="relative z-10 w-full max-w-sm mx-auto px-6 py-20 text-center flex flex-col items-center justify-center">
        {/* BIG FOCUSED LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex justify-center"
        >
          <Logo className="h-44 sm:h-56 w-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]" variant="light" />
        </motion.div>

        {/* Minimalist Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight leading-snug mb-2"
        >
          Manicura & Pedicura
        </motion.h1>

        {/* Subtle, Clean Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-stone-300 text-xs sm:text-sm tracking-wide mb-8"
        >
          Elizabeth Caron · Godoy Cruz, Mendoza
        </motion.p>

        {/* Single Minimalist Scroll CTA */}
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          href="#galeria"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white/90 text-xs font-medium border border-white/20 backdrop-blur-sm transition-all active:scale-95"
        >
          <span>Ver Trabajos & Servicios</span>
          <ChevronDown className="w-3.5 h-3.5 text-rose-300" />
        </motion.a>
      </div>
    </section>
  );
}

// ==========================================
// 3. Visual Portfolio / Gallery (Clean, uncluttered)
// ==========================================
function GallerySection() {
  const works = [
    { src: '/nails1.jpg', tag: 'Frenchie Moderna' },
    { src: '/nails2.jpg', tag: 'Nude Minimalista' },
    { src: '/nails3.jpg', tag: 'Nail Art' },
    { src: '/nails4.jpg', tag: 'Semipermanente' },
    { src: '/nails5.jpg', tag: 'Kapping Gel' },
    { src: '/nails6.jpg', tag: 'Soft Gel' },
  ];

  return (
    <section id="galeria" className="py-12 bg-white">
      <div className="max-w-md lg:max-w-3xl mx-auto px-5">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
            Trabajos Recientes
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Diseños reales realizados en el estudio
          </p>
        </div>

        {/* Clean 3x2 Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {works.map((item, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-2xl overflow-hidden bg-stone-100 shadow-2xs"
            >
              <img
                src={item.src}
                alt={item.tag}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2 text-white">
                <span className="text-[10px] font-medium tracking-wide">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Instagram Link */}
        <div className="mt-4 text-center">
          <a
            href={INSTAGRAM_URL}
            onClick={handleInstagramClick}
            className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-rose-500 font-medium transition-colors"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-rose-500" />
            <span>Ver más en @{INSTAGRAM_USER}</span>
            <ArrowUpRight className="w-3 h-3 text-stone-400" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 4. Services Section (Minimalist & Direct)
// ==========================================
interface ServiceItem {
  id: string;
  category: 'manos' | 'pies' | 'combos';
  title: string;
  duration: string;
  description: string;
}

function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'manos' | 'pies' | 'combos'>('todos');

  const services: ServiceItem[] = [
    {
      id: 'semi',
      category: 'manos',
      title: 'Esmaltado Semipermanente',
      duration: '60 min',
      description: 'Color de alto brillo con secado UV. Durabilidad de 15 a 21 días.',
    },
    {
      id: 'rusa',
      category: 'manos',
      title: 'Manicura Rusa & Combinada',
      duration: '75 min',
      description: 'Limpieza profunda de cutículas con torno para un acabado milimétrico y limpio.',
    },
    {
      id: 'kapping',
      category: 'manos',
      title: 'Kapping / Nivelación en Gel',
      duration: '75 min',
      description: 'Refuerzo protector sobre tu uña natural para evitar quiebres y permitir su crecimiento.',
    },
    {
      id: 'softgel',
      category: 'manos',
      title: 'Soft Gel / Esculpidas',
      duration: '90 - 120 min',
      description: 'Extensiones anatómicas en gel con largo y forma a elección sin dañar la uña.',
    },
    {
      id: 'pedicura',
      category: 'pies',
      title: 'Pedicura Spa Completa',
      duration: '60 - 80 min',
      description: 'Exfoliación, tratamiento de talones y cutículas, hidratación y esmaltado impecable.',
    },
    {
      id: 'combo',
      category: 'combos',
      title: 'Combo Manos + Pies',
      duration: '120 min',
      description: 'Atención integral en una sola sesión para renovar manos y pies por completo.',
    }
  ];

  const filtered = activeCategory === 'todos' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="servicios" className="py-12 bg-stone-50/70 border-t border-stone-100">
      <div className="max-w-md lg:max-w-3xl mx-auto px-5">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
            Servicios
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Atención con instrumental esterilizado en cada sesión
          </p>
        </div>

        {/* Minimalist Filter Tabs */}
        <div className="flex justify-center gap-1 mb-6 bg-stone-200/60 p-1 rounded-xl max-w-xs mx-auto">
          {[
            { id: 'todos', label: 'Todos' },
            { id: 'manos', label: 'Manos' },
            { id: 'pies', label: 'Pies' },
            { id: 'combos', label: 'Combos' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-white text-gray-900 shadow-2xs font-semibold'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Clean Service Rows */}
        <div className="space-y-2.5">
          {filtered.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-4 border border-stone-200/60 shadow-2xs flex items-center justify-between gap-3"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                  <span className="text-[11px] text-stone-400 flex items-center gap-0.5 flex-shrink-0">
                    <Clock className="w-3 h-3 text-stone-300" />
                    {service.duration}
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed truncate">
                  {service.description}
                </p>
              </div>

              <a
                href={createWhatsAppLink(`Hola Elizabeth! Quiero consultar por el servicio de ${service.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-2 rounded-xl transition-colors active:scale-95 flex items-center gap-1.5"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Consultar</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 5. Location Section (With Updated Address & New Iframe)
// ==========================================
function LocationSection() {
  return (
    <section id="ubicacion" className="py-12 bg-white border-t border-stone-100">
      <div className="max-w-md lg:max-w-3xl mx-auto px-5">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
            Ubicación
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            O Brien 2668, Godoy Cruz, Mendoza
          </p>
          <p className="text-[11px] text-stone-400 mt-0.5">
            Lunes a Sábados: 9:00 a 20:00 hs · Únicamente con turno previo
          </p>
        </div>

        {/* Map Container using user provided iframe */}
        <div className="relative rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs h-60 bg-stone-100 mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209.3525338521663!2d-68.87824641463897!3d-32.90767090751526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09be439718af%3A0x2a1744b722ece944!2sO%20Brien%202668%2C%20M5501%20Godoy%20Cruz%2C%20Mendoza!5e0!3m2!1ses-419!2sar!4v1791836772914!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Ubicación MaryNails"
          />
        </div>

        {/* Google Maps link button */}
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs font-semibold rounded-xl border border-stone-200 transition-colors"
        >
          <Compass className="w-3.5 h-3.5 text-rose-500" />
          <span>Abrir dirección en Google Maps</span>
          <ArrowUpRight className="w-3 h-3 text-stone-400" />
        </a>
      </div>
    </section>
  );
}

// ==========================================
// 6. Optional Info (Tips & FAQ - Discrete Collapsible)
// ==========================================
function UsefulInfoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="info-util" className="py-8 bg-stone-50/60 border-t border-stone-100">
      <div className="max-w-md mx-auto px-5">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-3 px-4 rounded-xl bg-white border border-stone-200/80 shadow-2xs flex items-center justify-between text-left transition-all active:bg-stone-50"
        >
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-rose-500" />
            <span className="text-xs font-semibold text-gray-800">
              Consejos antes de tu cita y Preguntas frecuentes
            </span>
          </div>
          <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden mt-3 space-y-3"
            >
              {/* Tips */}
              <div className="p-4 rounded-xl bg-white border border-stone-200/70 space-y-2 text-xs">
                <p className="font-semibold text-gray-900 mb-1">Tips para tu visita:</p>
                <div className="flex items-start gap-2 text-stone-600">
                  <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>No cortes tus cutículas en casa (nos encargamos en el salón).</span>
                </div>
                <div className="flex items-start gap-2 text-stone-600">
                  <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Evitá cremas o aceites pesados el mismo día para mejor fijación.</span>
                </div>
                <div className="flex items-start gap-2 text-stone-600">
                  <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Avisá si tenés producto previo para agendar tiempo de retiro.</span>
                </div>
              </div>

              {/* FAQ */}
              <div className="p-4 rounded-xl bg-white border border-stone-200/70 space-y-2.5 text-xs text-stone-600">
                <div>
                  <p className="font-semibold text-gray-900">¿Cuánto dura el esmaltado semipermanente?</p>
                  <p className="text-stone-500">De 15 a 21 días impecable, según el crecimiento natural.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">¿Cómo garantizan la higiene?</p>
                  <p className="text-stone-500">Todo el instrumental metálico se esteriliza y los insumos de lima son descartables.</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// ==========================================
// 7. Footer (Minimalist)
// ==========================================
function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-10 pb-28 border-t border-stone-900">
      <div className="max-w-md mx-auto px-5 text-center">
        <div className="flex justify-center mb-3">
          <Logo className="h-9" variant="light" />
        </div>
        <p className="text-xs text-stone-400 mb-1">Elizabeth Caron · MaryNails</p>
        <p className="text-[11px] text-stone-500 mb-5">O Brien 2668, Godoy Cruz, Mendoza</p>

        <div className="flex justify-center gap-3 mb-6">
          <a
            href={INSTAGRAM_URL}
            onClick={handleInstagramClick}
            className="w-9 h-9 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 flex items-center justify-center transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href={createWhatsAppLink("Hola Elizabeth! Te escribo desde la página web...")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-stone-900 hover:bg-stone-800 text-emerald-400 flex items-center justify-center transition-colors"
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
// 8. Sticky Mobile Bottom Bar
// ==========================================
function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-stone-100 shadow-md pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="max-w-md mx-auto flex items-center gap-2">
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
          className="flex-1 bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all text-xs sm:text-sm"
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
      <Footer />
      <StickyMobileBar />
    </div>
  );
}
