import { useState, useEffect } from 'react';

// Icons as components
const SparklesIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg className={`w-4 h-4 ${filled ? 'text-rose-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Logo = ({ className = "h-8", variant = "dark" }: { className?: string; variant?: "dark" | "light" }) => {
  const src = variant === "dark" ? "/logo_negro.png" : "/logo_blanco.png";
  return (
    <img 
      src={src} 
      alt="MaryNails" 
      className={`${className} object-contain transition-opacity duration-300`} 
    />
  );
};

// Navigation Component - Mobile First (Simplified)
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Turnos', href: '#turnos' },
    { name: 'Tips', href: '#tips' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Contacto', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Fixed Header Bar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'bg-white shadow-md' 
          : isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md' 
            : 'bg-black/20 backdrop-blur-sm'
      }`}>
        <div className="px-4 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center" onClick={handleLinkClick}>
            <Logo 
              className="h-10" 
              variant={isMobileMenuOpen || isScrolled ? 'dark' : 'light'} 
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-3 -mr-2 rounded-xl active:bg-white/20 ${
              isMobileMenuOpen || isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            aria-label="Menú"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* Mobile Menu - Full screen overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-16">
          <div className="flex flex-col p-6 h-full overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-gray-800 hover:text-rose-400 font-medium py-4 text-lg border-b border-gray-100 active:bg-rose-50 -mx-6 px-6"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5492615724000?text=Hola%20Elizabeth!%20Vi%20tu%20página%20de%20MaryNails%20y%20quiero%20consultar%20por%20un%20turno%20para..."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-4 rounded-2xl text-center font-semibold text-lg mt-6 flex items-center justify-center gap-3 active:scale-95 transition-transform"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Reservar Turno
            </a>
          </div>
        </div>
      )}
    </>
  );
}

// Hero Section - Mobile First
function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image - Optimized for performance */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=70&auto=format"
          alt="Manicura profesional"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-5 py-20 pt-24">
        <div className="max-w-lg mx-auto text-center">
          {/* Logo grande en el Hero */}
          <div className="mb-8">
            <Logo className="h-28 sm:h-36 lg:h-44 mx-auto drop-shadow-2xl" variant="light" />
          </div>

          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full mb-5">
            <SparklesIcon />
            <span className="text-white/90 text-sm font-medium">7 años de trayectoria</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-4">
            El arte de cuidar tus manos
          </h1>
          
          <p className="text-base sm:text-lg text-white/85 mb-8 leading-relaxed px-2">
            Experiencia, dedicación y belleza profesional en cada detalle. De la mano de <strong className="text-rose-300">Elizabeth Caron</strong>.
          </p>

          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <a
              href="https://wa.me/5492615724000?text=Hola%20Elizabeth!%20Vi%20tu%20página%20de%20MaryNails%20y%20quiero%20consultar%20por%20un%20turno%20para..."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-2xl text-base font-semibold transition-all active:scale-95 shadow-lg shadow-green-500/30"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Reservar Turno
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white px-6 py-4 rounded-2xl text-base font-medium transition-all border border-white/30 active:scale-95"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Professional Badge Banner - Mobile Optimized
function ProfessionalBadge() {
  const badges = [
    { icon: '🏆', title: '7 Años', sub: 'Experiencia' },
    { icon: '📜', title: 'Certificada', sub: 'Profesional' },
    { icon: '✨', title: '+500', sub: 'Clientas' },
    { icon: '🛡️', title: 'Bioseguridad', sub: '100%' },
  ];

  return (
    <section className="bg-gradient-to-r from-rose-50 via-white to-rose-50 py-5 border-y border-rose-100">
      <div className="px-4">
        <div className="grid grid-cols-4 gap-2 max-w-lg mx-auto">
          {badges.map((badge, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl mb-1">{badge.icon}</div>
              <p className="font-bold text-gray-800 text-xs sm:text-sm">{badge.title}</p>
              <p className="text-[10px] sm:text-xs text-gray-500">{badge.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section - Mobile First
function AboutSection() {
  return (
    <section id="about" className="py-12 lg:py-24 bg-white">
      <div className="px-5 max-w-lg lg:max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image - Mobile optimized */}
          <div className="relative">
            <div className="aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                alt="Elizabeth Caron - Especialista en uñas"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Floating Card - Repositioned for mobile */}
            <div className="absolute -bottom-4 left-4 right-4 lg:left-auto lg:right-0 lg:-bottom-6 bg-white rounded-xl shadow-lg p-4 lg:max-w-xs z-20">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full flex items-center justify-center flex-shrink-0 p-1.5">
                  <Logo className="h-6" variant="dark" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800 text-sm">Elizabeth Caron</p>
                  <p className="text-xs text-rose-400">Nail Artist Profesional</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mt-8 lg:mt-0">
            <span className="inline-block text-rose-400 font-medium text-sm mb-2">Sobre Mí</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-800 mb-4">
              7 años transformando manos y pies
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Soy <strong className="text-gray-800">Elizabeth Caron</strong>, especialista en belleza de manos y pies. Lo que empezó como una pasión se convirtió en mi profesión hace más de 7 años. Desde entonces, me capacito constantemente en las últimas tendencias y técnicas para ofrecerte siempre lo mejor.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Mi objetivo es que cada visita sea más que un servicio: es un momento para vos, para relajarte y salir sintiéndote hermosa y renovada.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              En <span className="text-rose-400 font-semibold">MaryNails</span>, cada servicio es personalizado y realizado bajo estrictas normas de bioseguridad. Trabajo únicamente con productos de primera calidad para garantizar resultados duraderos y saludables.
            </p>

            <div className="space-y-3 mb-6">
              {[
                'Formación continua en últimas tendencias',
                'Productos premium de alta calidad',
                'Herramientas esterilizadas en cada servicio',
                'Atención 100% personalizada'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="bg-rose-50/50 rounded-xl p-4 border-l-4 border-rose-300 mb-6">
              <p className="text-gray-600 text-sm italic">
                "Para mí, cada uña es un lienzo. Mi trabajo es hacerte sentir especial, con un resultado que refleje tu personalidad."
              </p>
              <p className="text-rose-400 text-xs font-medium mt-2">— Elizabeth</p>
            </div>

            <a
              href="#services"
              className="inline-flex items-center gap-2 text-rose-400 font-semibold active:text-rose-500"
            >
              Ver mis servicios
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section - Mobile First (Con links individuales para consultar precio)
function ServicesSection() {
  const services = [
    { icon: '💅', title: 'Manicura Rusa', description: 'Limpieza profunda de cutículas y esmaltado perfecto.' },
    { icon: '🦶', title: 'Pedicura Spa', description: 'Tratamiento integral para la salud y estética de tus pies.' },
    { icon: '✨', title: 'Esmaltado Semipermanente', description: 'Color impecable y duradero por semanas.' },
    { icon: '🎨', title: 'Nail Art', description: 'Diseños personalizados y decoraciones a mano.' },
    { icon: '💎', title: 'Uñas Esculpidas', description: 'Extensiones en acrílico o gel con acabado natural.' },
    { icon: '🌸', title: 'Combo Manos + Pies', description: 'Tratamiento completo con descuento especial.' },
  ];

  const getWhatsAppLink = (serviceName: string) => {
    const message = encodeURIComponent(`Hola Elizabeth! Vi tu página MaryNails y quiero consultar el precio de ${serviceName}`);
    return `https://wa.me/5492615724000?text=${message}`;
  };

  return (
    <section id="services" className="py-12 lg:py-24 bg-gradient-to-b from-rose-50/50 to-white">
      <div className="px-5 max-w-lg lg:max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block text-rose-400 font-medium text-sm mb-2">Nuestros Servicios</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-800 mb-3">
            Tratamientos para vos
          </h2>
          <p className="text-gray-600 text-sm">
            Cada servicio es personalizado según tus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 lg:p-6 shadow-md shadow-rose-100/50 border border-rose-50 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl lg:text-4xl mb-3">{service.icon}</div>
              <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
              <a
                href={getWhatsAppLink(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-rose-400 font-medium text-sm hover:text-rose-500 active:text-rose-600 transition-colors"
              >
                Consultar precio
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Nota informativa */}
        <div className="mt-8 bg-gradient-to-r from-rose-100 to-rose-50 rounded-2xl p-5 text-center border border-rose-100">
          <p className="text-gray-700 text-sm mb-1">
            💅 <strong>¿No sabés qué servicio elegir?</strong>
          </p>
          <p className="text-gray-600 text-xs mb-4">
            Escribime y te asesoro según el estado de tus uñas
          </p>
          <a
            href="https://wa.me/5492615724000?text=Hola%20Elizabeth!%20Vi%20tu%20página%20de%20MaryNails%20y%20necesito%20asesoramiento%20sobre%20qué%20servicio%20me%20conviene..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-5 py-3 rounded-xl text-sm font-semibold active:scale-95 transition-transform shadow-md shadow-green-500/20"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Pedir asesoramiento
          </a>
        </div>
      </div>
    </section>
  );
}

// Gallery Section - Mobile First with Lazy Loading
function GallerySection() {
  const images = [
    { src: '/nails1.jpg', alt: 'Diseño elegante' },
    { src: '/nails2.jpg', alt: 'Francesa clásica' },
    { src: '/nails3.jpg', alt: 'Nail art' },
    { src: '/nails4.jpg', alt: 'Semipermanente' },
    { src: '/nails5.jpg', alt: 'Minimalista' },
    { src: '/nails6.jpg', alt: 'Decoradas' },
  ];

  return (
    <section id="gallery" className="py-12 lg:py-24 bg-white">
      <div className="px-5 max-w-lg lg:max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <span className="inline-block text-rose-400 font-medium text-sm mb-2">Galería</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-800 mb-2">
            Mis trabajos
          </h2>
          <p className="text-gray-600 text-sm">
            Diseños únicos para cada clienta
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 lg:gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-xl bg-rose-50">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://www.instagram.com/marynails_manicurista?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-5 py-3 rounded-xl text-sm font-semibold active:scale-95 transition-transform"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section - Mobile First
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'María García',
      since: '2019',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
      text: 'Elizabeth es increíble. Siempre salgo encantada con mis uñas. La atención es impecable.',
    },
    {
      name: 'Carolina López',
      since: '2020',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
      text: 'Los diseños son hermosos y duran muchísimo. 100% recomendado.',
    },
    {
      name: 'Lucía Martínez',
      since: '2021',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80',
      text: 'La mejor experiencia. Elizabeth es muy detallista y siempre logra lo que quiero.',
    },
  ];

  return (
    <section id="testimonials" className="py-12 lg:py-24 bg-gradient-to-b from-white to-rose-50/50">
      <div className="px-5 max-w-lg lg:max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <span className="inline-block text-rose-400 font-medium text-sm mb-2">Testimonios</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-800 mb-2">
            Clientas felices
          </h2>
        </div>

        <div className="space-y-4 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-md border border-rose-50"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={true} />
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                  decoding="async"
                  className="w-10 h-10 rounded-full object-cover bg-rose-50"
                />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-rose-400">Desde {testimonial.since}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Tips Section - "Preparando tu visita"
function TipsSection() {
  const tips = [
    {
      icon: '🚫',
      title: 'No cortes tus cutículas',
      description: 'Este es el error n°1. Evitá cortarlas o empujarlas en casa, podés causar inflamaciones. Yo me encargo de tratarlas de forma profesional y segura.',
      highlight: true,
    },
    {
      icon: '🧴',
      title: 'Vení con manos/pies limpios',
      description: 'Si podés, evitá aplicar cremas o aceites muy pesados justo antes del turno, ya que pueden dificultar la adherencia del esmalte.',
      highlight: false,
    },
    {
      icon: '💅',
      title: 'Avisame si tenés producto',
      description: 'Si tenés puesto acrílico o gel de otro salón, avisame al agendar para reservar el tiempo extra necesario para el retiro.',
      highlight: false,
    },
    {
      icon: '👡',
      title: 'Traé calzado abierto',
      description: 'Si elegís esmaltado tradicional (no semipermanente) para tus pies, recordá traer sandalias para no arruinar el diseño al salir.',
      highlight: false,
    },
    {
      icon: '⏰',
      title: 'Llegá puntual',
      description: 'Te agradezco llegar a la hora acordada. Al ser atención personalizada, tu tiempo es exclusivo y me ayuda a mantener la agenda organizada.',
      highlight: false,
    },
  ];

  return (
    <section id="tips" className="py-12 lg:py-24 bg-gradient-to-b from-rose-50/50 to-white">
      <div className="px-5 max-w-lg lg:max-w-4xl mx-auto">
        {/* Header con icono destacado */}
        <div className="bg-gradient-to-br from-rose-100 to-rose-50 rounded-2xl p-5 mb-6 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-md mb-3">
            <span className="text-2xl">📋</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-800 mb-2">
            Antes de tu sesión
          </h2>
          <p className="text-gray-600 text-sm">
            Para que los resultados sean óptimos y duraderos
          </p>
        </div>

        {/* Tips como tarjetas */}
        <div className="space-y-3">
          {tips.map((tip, index) => (
            <div
              key={index}
              className={`rounded-xl p-4 flex gap-4 items-start transition-all ${
                tip.highlight 
                  ? 'bg-gradient-to-r from-rose-100 to-rose-50 border-2 border-rose-200 shadow-md' 
                  : 'bg-white shadow-sm border border-rose-50'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                tip.highlight ? 'bg-rose-200' : 'bg-rose-50'
              }`}>
                <span className="text-xl">{tip.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className={`font-semibold text-sm ${tip.highlight ? 'text-rose-600' : 'text-gray-800'}`}>
                    {tip.title}
                  </h3>
                  {tip.highlight && (
                    <span className="text-[10px] bg-rose-500 text-white px-2 py-0.5 rounded-full font-medium">
                      IMPORTANTE
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs mb-3">¿Tenés alguna duda sobre cómo prepararte?</p>
          <a
            href="https://wa.me/5492615724000?text=Hola%20Elizabeth!%20Vi%20tu%20página%20de%20MaryNails%20y%20tengo%20una%20consulta..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-rose-500 font-semibold text-sm active:text-rose-600"
          >
            <span>Consultame por WhatsApp</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Booking Form Section - Solicitar turno por Email
function BookingForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nombre = formData.get('nombre') as string;
    const telefono = formData.get('telefono') as string;
    const servicio = formData.get('servicio') as string;
    const fecha = formData.get('fecha') as string;
    const horario = formData.get('horario') as string;
    const mensaje = formData.get('mensaje') as string;

    const fechaFormateada = fecha ? new Date(fecha).toLocaleDateString('es-AR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'A coordinar';

    const body = `Hola Elizabeth!

Me gustaría solicitar un turno para MaryNails:

📋 DATOS DEL TURNO:
━━━━━━━━━━━━━━━━━━━━
• Nombre: ${nombre}
• Teléfono: ${telefono}
• Servicio: ${servicio}
• Fecha tentativa: ${fechaFormateada}
• Horario preferido: ${horario}
${mensaje ? `• Mensaje adicional: ${mensaje}` : ''}

¡Muchas gracias! Espero tu confirmación.

---
Enviado desde la web de MaryNails`;

    const mailtoLink = `mailto:maryaelizawach@gmail.com?subject=📅 Solicitud de Turno - ${nombre}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section id="turnos" className="py-12 lg:py-24 bg-gradient-to-b from-white to-rose-50/50">
      <div className="px-5 max-w-lg lg:max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <span className="inline-block text-rose-400 font-medium text-sm mb-2">Reservas</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-800 mb-2">
            Solicitar Turno
          </h2>
          <p className="text-gray-600 text-sm">
            Completá el formulario y te confirmo por email o WhatsApp
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-rose-50">
          <div className="space-y-5">
            {/* Nombre */}
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1.5">
                Nombre completo <span className="text-rose-400">*</span>
              </label>
              <input 
                id="nombre"
                name="nombre" 
                type="text" 
                required 
                placeholder="Ej: María García"
                className="w-full px-4 py-3 bg-rose-50/50 border border-rose-100 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all text-sm"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1.5">
                Teléfono / WhatsApp <span className="text-rose-400">*</span>
              </label>
              <input 
                id="telefono"
                name="telefono" 
                type="tel" 
                required 
                placeholder="Ej: 11 1234-5678"
                className="w-full px-4 py-3 bg-rose-50/50 border border-rose-100 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all text-sm"
              />
            </div>

            {/* Servicio */}
            <div>
              <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-1.5">
                Servicio de interés <span className="text-rose-400">*</span>
              </label>
              <select 
                id="servicio"
                name="servicio" 
                required
                className="w-full px-4 py-3 bg-rose-50/50 border border-rose-100 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all text-sm appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
              >
                <option value="">Seleccioná un servicio</option>
                <option value="Manicura Rusa">💅 Manicura Rusa</option>
                <option value="Pedicura Spa">🦶 Pedicura Spa</option>
                <option value="Esmaltado Semipermanente">✨ Esmaltado Semipermanente</option>
                <option value="Nail Art">🎨 Nail Art</option>
                <option value="Uñas Esculpidas">💎 Uñas Esculpidas</option>
                <option value="Combo Manos + Pies">🌸 Combo Manos + Pies</option>
                <option value="Otro / Consultar">❓ Otro / Consultar</option>
              </select>
            </div>

            {/* Fecha y Horario en grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Fecha */}
              <div>
                <label htmlFor="fecha" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Fecha tentativa
                </label>
                <input 
                  id="fecha"
                  name="fecha" 
                  type="date" 
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-3 bg-rose-50/50 border border-rose-100 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all text-sm"
                />
              </div>

              {/* Horario preferido */}
              <div>
                <label htmlFor="horario" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Horario
                </label>
                <select 
                  id="horario"
                  name="horario"
                  className="w-full px-3 py-3 bg-rose-50/50 border border-rose-100 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all text-sm appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.5rem center', backgroundSize: '1.2rem' }}
                >
                  <option value="Mañana (9-12hs)">Mañana</option>
                  <option value="Tarde (14-17hs)">Tarde</option>
                  <option value="Último turno (17-19hs)">Último turno</option>
                  <option value="A coordinar">A coordinar</option>
                </select>
              </div>
            </div>

            {/* Mensaje adicional */}
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1.5">
                Mensaje adicional <span className="text-gray-400 text-xs">(opcional)</span>
              </label>
              <textarea 
                id="mensaje"
                name="mensaje" 
                rows={3}
                placeholder="Ej: Tengo gel de otro salón que necesito retirar..."
                className="w-full px-4 py-3 bg-rose-50/50 border border-rose-100 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all text-sm resize-none"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-rose-400 to-rose-500 text-white py-4 rounded-xl font-semibold text-base hover:from-rose-500 hover:to-rose-600 active:scale-98 transition-all shadow-lg shadow-rose-400/30 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Enviar solicitud por Email
            </button>
          </div>

          {/* Nota */}
          <p className="text-center text-gray-400 text-xs mt-4">
            Al enviar, se abrirá tu app de email con los datos completados
          </p>
        </form>

        {/* Alternativa WhatsApp */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm mb-3">¿Preferís WhatsApp?</p>
          <a
            href="https://wa.me/5492615724000?text=Hola%20Elizabeth!%20Vi%20tu%20página%20de%20MaryNails%20y%20quiero%20consultar%20por%20un%20turno%20para..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-xl text-sm font-semibold active:scale-95 transition-transform"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Escribime por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// FAQ Section - Mobile First
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      icon: '⏱️',
      question: '¿Cuánto tiempo dura el servicio?',
      answer: 'Una manicura básica tarda 45 min. Un servicio completo de manicura + pedicura con semipermanente puede durar entre 1.5 y 2 horas.',
    },
    {
      icon: '💅',
      question: '¿Cómo cuido mis uñas después del esmaltado?',
      answer: 'Usá guantes para tareas del hogar, no uses las uñas como herramientas y aplicá aceite de cutículas diariamente.',
    },
    {
      icon: '📅',
      question: '¿Necesito turno previo?',
      answer: 'Sí, trabajo únicamente con cita previa. Esto garantiza atención 100% dedicada a vos, sin esperas.',
    },
    {
      icon: '🛡️',
      question: '¿Qué medidas de higiene aplican?',
      answer: 'Todas las herramientas se esterilizan después de cada uso. Uso materiales descartables siempre que es posible.',
    },
    {
      icon: '💍',
      question: '¿Hacen servicios para eventos?',
      answer: '¡Sí! Bodas, fiestas, lo que necesites. Agendá con 48hs de anticipación para asegurar perfección.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 lg:py-24 bg-white">
      <div className="px-5 max-w-lg lg:max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <span className="inline-block text-rose-400 font-medium text-sm mb-2">FAQ</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-800 mb-2">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-rose-50/50 rounded-xl overflow-hidden transition-all ${
                openIndex === index ? 'ring-2 ring-rose-200 bg-white' : ''
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 py-4 flex items-center gap-3 text-left active:bg-rose-100/50"
              >
                <span className="text-xl flex-shrink-0">{faq.icon}</span>
                <span className="flex-grow font-medium text-gray-800 text-sm">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-rose-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 pb-4">
                  <p className="text-gray-600 text-sm leading-relaxed pl-8">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No encontraste tu duda */}
        <div className="mt-8 bg-gradient-to-r from-rose-100 to-rose-50 rounded-2xl p-5 text-center">
          <span className="text-2xl mb-2 block">💬</span>
          <h3 className="font-semibold text-gray-800 mb-1">¿Otra duda?</h3>
          <p className="text-gray-600 text-sm mb-4">
            Escribime directo por WhatsApp
          </p>
          <a
            href="https://wa.me/5492615724000?text=Hola%20Elizabeth!%20Vi%20tu%20página%20de%20MaryNails%20y%20tengo%20una%20consulta..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-xl text-sm font-semibold active:scale-95 transition-transform"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Consultame
          </a>
        </div>
      </div>
    </section>
  );
}

// Contact Section - Mobile First
function ContactSection() {
  return (
    <section id="contact" className="py-12 lg:py-24 bg-gradient-to-b from-rose-50/50 to-white">
      <div className="px-5 max-w-lg lg:max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <span className="inline-block text-rose-400 font-medium text-sm mb-2">Contacto</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-800 mb-2">
            ¿Lista para consentirte?
          </h2>
          <p className="text-gray-600 text-sm">
            Reservá tu turno por WhatsApp
          </p>
        </div>

        {/* Contact cards */}
        <div className="space-y-3 mb-6">
          <a
            href="https://wa.me/5492615724000?text=Hola%20Elizabeth!%20Vi%20tu%20página%20de%20MaryNails%20y%20quiero%20consultar%20por%20un%20turno%20para..."
            className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-rose-50 active:bg-rose-50"
          >
            <div className="w-11 h-11 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-600">
              <WhatsAppIcon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800 text-sm">WhatsApp</p>
              <p className="text-rose-400 text-sm">+54 9 261 572-4000</p>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-rose-50">
            <div className="w-11 h-11 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 text-rose-400">
              <LocationIcon />
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-sm">Ubicación</p>
              <p className="text-gray-500 text-sm">Barrió empleado de comercio, América 2751, M5501 Godoy Cruz, Mendoza</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-rose-50">
            <div className="w-11 h-11 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 text-rose-400">
              <ClockIcon />
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-sm">Horarios</p>
              <p className="text-gray-500 text-sm">Lunes a Sábado: 9:00 - 20:00</p>
            </div>
          </div>
        </div>

        {/* CTA grande */}
        <a
          href="https://wa.me/5492615724000?text=Hola%20Elizabeth!%20Vi%20tu%20página%20de%20MaryNails%20y%20quiero%20consultar%20por%20un%20turno%20para..."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-green-500 text-white px-6 py-4 rounded-2xl text-base font-semibold w-full active:scale-95 transition-transform shadow-lg shadow-green-500/20 mb-6"
        >
          <WhatsAppIcon className="w-6 h-6" />
          Reservar por WhatsApp
        </a>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg h-64 lg:h-80">
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
      </div>
    </section>
  );
}

// Footer - Mobile First con diseño profesional
function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="px-5 py-10 max-w-lg lg:max-w-5xl mx-auto text-center">
        {/* Logo y tagline */}
        <div className="flex justify-center mb-3">
          <Logo className="h-12" variant="light" />
        </div>
        <p className="text-gray-400 text-sm mb-1">by Elizabeth Caron</p>
        <p className="text-rose-400/80 text-xs mb-6">7 años embelleciendo tus manos</p>

        {/* Social icons */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://www.instagram.com/marynails_manicurista?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center active:bg-rose-400 transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="https://wa.me/5492615724000?text=Hola%20Elizabeth!%20Vi%20tu%20página%20de%20MaryNails%20y%20quiero%20consultar%20por%20un%20turno%20para..."
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center active:bg-green-500 transition-colors"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Quick links horizontal para mobile */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-400 mb-8">
          <a href="#about" className="hover:text-rose-400 active:text-rose-400">Sobre Mí</a>
          <span className="text-gray-700">•</span>
          <a href="#services" className="hover:text-rose-400 active:text-rose-400">Servicios</a>
          <span className="text-gray-700">•</span>
          <a href="#gallery" className="hover:text-rose-400 active:text-rose-400">Galería</a>
          <span className="text-gray-700">•</span>
          <a href="#contact" className="hover:text-rose-400 active:text-rose-400">Contacto</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-5 px-5 text-center">
        <p className="text-gray-500 text-xs">
          © 2024 MaryNails. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

// Floating WhatsApp Button - Mobile optimized
function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5492615724000?text=Hola%20Elizabeth!%20Vi%20tu%20página%20de%20MaryNails%20y%20quiero%20consultar%20por%20un%20turno%20para..."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 active:scale-90 transition-transform"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}

// Main App Component
export function App() {
  return (
    <div className="font-sans antialiased overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ProfessionalBadge />
      <AboutSection />
      <ServicesSection />
      <BookingForm />
      <TipsSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
