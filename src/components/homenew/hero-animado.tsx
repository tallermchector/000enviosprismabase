import Link from 'next/link';
import { Play, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { HeroBackground } from './hero-background';
import { HeroVisuals } from './hero-visuals';
import { HeroScrollIndicator } from './hero-scroll-indicator';

export default function HeroAnimado() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-12 lg:pt-32 lg:pb-16 px-4 overflow-hidden bg-transparent">
      {/* Background Parallax - Client Component */}
      <HeroBackground />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <div className="lg:col-span-7 text-center lg:text-left">
          {/* Badge - Animation with CSS */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/15 text-primary text-xxs font-black tracking-[0.2em] mb-8 uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Tu Solución Confiable
          </div>

          <h1 className="text-headline-lg-mobile md:text-display-lg mb-4 xl:mb-6 uppercase text-slate-900 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
            Mensajería y <span className="text-primary">Logística E-Commerce</span> en <span className="text-secondary italic">Mar del Plata</span>
          </h1>

          <p className="text-slate-600 text-body-lg mb-8 xl:mb-10 max-w-2xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-both">
            Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata. Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 fill-mode-both">
            <Link
              href="/cotizar/express"
              aria-label="Solicitar Servicio de mensajería desde el héroe"
              className="group relative px-10 py-5 bg-secondary hover:bg-amber-500 text-slate-950 text-label-md rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 uppercase overflow-hidden active:scale-95 font-semibold"
            >
              <span className="relative z-10 flex items-center gap-2">
                Solicitar Servicio <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>

            <Link
              href="/servicios/envios-express"
              aria-label="Ver todos los servicios de envíos"
              className="flex items-center gap-4 group text-slate-700 hover:text-primary transition-colors py-2 font-medium"
            >
              <div className="w-14 h-14 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-all group-hover:scale-110 shadow-sm" aria-hidden="true">
                <Play className="fill-primary text-primary ml-1" size={18} />
              </div>
              <span className="text-xs uppercase tracking-wider">Ver Servicios</span>
            </Link>
          </div>

          <div className="mt-10 lg:mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000 fill-mode-both">
            <div className="flex items-center gap-2 text-label-sm uppercase text-slate-500 font-semibold">
              <ShieldCheck size={14} className="text-primary" /> 100% SEGURO
            </div>
            <div className="flex items-center gap-2 text-label-sm uppercase text-slate-500 font-semibold">
              <Zap size={14} className="text-secondary" /> ULTRA RÁPIDO
            </div>
            <div className="flex items-center gap-2 text-label-sm uppercase text-slate-500 font-semibold">
              <Globe size={14} className="text-primary" /> COBERTURA TOTAL
            </div>
          </div>
        </div>

        {/* Visuals - Client Component */}
        <HeroVisuals />
      </div>

      {/* Scroll Indicator - Client Component */}
      <HeroScrollIndicator />
    </section>
  );
}