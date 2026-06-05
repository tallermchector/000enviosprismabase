import React from 'react';
import { Truck, MapPin, Phone, Mail, ShieldCheck, Zap, Globe, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { FooterSocialLinks } from './footer-social-links';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    empresa: [
      { label: "Sobre Nosotros", href: "/nosotros/sobre-nosotros" },
      { label: "Preguntas Frecuentes", href: "/nosotros/preguntas-frecuentes" },
      { label: "Nuestras Redes", href: "/nosotros/nuestras-redes" },
      { label: "Términos y Condiciones", href: "/terminos-y-condiciones" },
      { label: "Política de Privacidad", href: "/politica-de-privacidad" }
    ],
    servicios: [
      { label: "Envíos Express", href: "/servicios/envios-express" },
      { label: "Envíos LowCost", href: "/servicios/envios-lowcost" },
      { label: "Envíos Flex (MeLi)", href: "/servicios/enviosflex" },
      { label: "E-Commerce & 3PL", href: "/servicios/plan-emprendedores" }
    ]
  };

  return (
    <footer className="pt-20 pb-12 px-4 border-t border-primary/20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-foreground/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-16">

          {/* Brand Identity */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 group shrink-0 active:scale-[0.98] transition-transform" aria-label="Volver al inicio desde el pie de página">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center shrink-0 transition-all group-hover:rotate-6 group-hover:scale-105">
                <Image src="/LogoEnviosDosRuedas.webp" alt="Logo Dos Ruedas" fill className="object-contain" sizes="(max-width: 640px) 48px, 56px" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display font-black text-xl sm:text-2xl lg:text-3xl tracking-tighter text-primary-foreground uppercase leading-none mb-1">
                  Envios DosRuedas
                </span>
                <span className="font-display font-black text-primary-container text-xxs sm:text-sm lg:text-base uppercase tracking-[0.15em] leading-none">
                  tu solución confiable
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm mb-8 leading-relaxed max-w-sm">
              Tu solución confiable para mensajería y delivery en Mar del Plata. Servicios rápidos, seguros y económicos.
            </p>

            <FooterSocialLinks
              links={[
                { icon: "/icons/instagram.svg", href: "https://instagram.com/enviosdosruedas", label: "Instagram" },
                { icon: "/icons/facebook.svg", href: "https://facebook.com/enviosdosruedas", label: "Facebook" },
                { icon: "/icons/whatsapp.svg", href: "https://wa.me/542236602699", label: "WhatsApp" },
                { icon: "/icons/google.svg", href: "#", label: "Google" }
              ]}
            />
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold mb-8 tracking-[0.3em] text-xxs uppercase text-primary-container">Nosotros</h3>
            <ul className="space-y-4">
              {footerLinks.empresa.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-primary-container transition-all flex items-center gap-3 group text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/20 group-hover:bg-primary-container transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display font-bold mb-8 tracking-[0.3em] text-xxs uppercase text-primary-container">Servicios</h3>
            <ul className="space-y-4">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-primary-container transition-all flex items-center gap-3 group text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/20 group-hover:bg-primary-container transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4">
            <h3 className="font-display font-bold mb-8 tracking-[0.3em] text-xxs uppercase text-primary-container">Contacto Rápido</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center shrink-0 group-hover:bg-primary-container group-hover:border-primary-container/40 transition-all text-primary-foreground group-hover:text-primary">
                  <MapPin size={18} className="text-primary-container group-hover:text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-primary-container font-display text-xxs font-semibold uppercase tracking-widest mb-1 opacity-70">Ubicación</span>
                  <span className="text-primary-foreground/85 text-sm leading-relaxed">Friuli 1972, Mar del Plata</span>
                </div>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center shrink-0 group-hover:bg-primary-container group-hover:border-primary-container/40 transition-all text-primary-foreground group-hover:text-primary">
                  <Phone size={18} className="text-primary-foreground group-hover:text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-primary-container font-display text-xxs font-semibold uppercase tracking-widest mb-1 opacity-70">Teléfono</span>
                  <a href="tel:+542236602699" className="text-primary-foreground/85 hover:text-primary-container transition-colors text-sm font-medium">+54 223 660-2699</a>
                </div>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center shrink-0 group-hover:bg-primary-container group-hover:border-primary-container/40 transition-all text-primary-foreground group-hover:text-primary">
                  <Mail size={18} className="text-primary-foreground group-hover:text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-primary-container font-display text-xxs font-semibold uppercase tracking-widest mb-1 opacity-70">Email</span>
                  <a href="mailto:matiascejas@enviosdosruedas.com" className="text-primary-foreground/85 hover:text-primary-container transition-colors text-sm font-medium">matiascejas@enviosdosruedas.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Stats/Trust Banner */}
        <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-primary-foreground/10 bg-primary-foreground/5 rounded-lg">
          {[
            { icon: <ShieldCheck className="text-primary-foreground" />, label: "SEGURIDAD", value: "CERTIFICADA" },
            { icon: <Zap className="text-primary-container" />, label: "VELOCIDAD", value: "MÁXIMA" },
            { icon: <Globe className="text-primary-foreground" />, label: "COBERTURA", value: "DISTRITAL" },
            { icon: <ArrowUpRight className="text-primary-foreground" />, label: "STATUS", value: "ONLINE" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center gap-2 px-4 border-r border-primary-foreground/10 last:border-r-0">
              <div className="opacity-80">{React.cloneElement(item.icon, { size: 20 })}</div>
              <span className="text-[8px] font-black tracking-[0.4em] text-primary-container uppercase">{item.label}</span>
              <span className="text-xxs font-black text-primary-foreground uppercase tracking-widest">{item.value}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-[9px] text-primary-container uppercase tracking-[0.4em] font-black text-center md:text-left">
              © 2026 Envios DosRuedas. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex items-center gap-10">
            <Link href="/politica-de-privacidad" className="text-[9px] text-primary-container hover:text-primary-foreground uppercase tracking-widest font-black transition-colors">Privacidad</Link>
            <Link href="/terminos-y-condiciones" className="text-[9px] text-primary-container hover:text-primary-foreground uppercase tracking-widest font-black transition-colors">Términos</Link>
            <div className="w-8 h-8 rounded-full border border-primary-foreground/10 flex items-center justify-center text-primary-foreground" aria-hidden="true">
              <Globe size={14} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};