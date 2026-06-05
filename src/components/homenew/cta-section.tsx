'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, Zap, ShieldCheck, Clock, MousePointer2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const CtaSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center py-20 lg:py-32 px-4 bg-transparent overflow-hidden">
      {/* High-End Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/hero/abstracto_background.jpeg"
          alt="Background Abstracto"
          fill
          className="object-cover opacity-[0.03] grayscale"
        />

        {/* Static Background Highlight (Performance) */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full"
        />

        {/* Tech grid overlay */}
        <div className="absolute inset-0 tech-grid-overlay" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-12 md:p-20 rounded-lg bg-primary text-white overflow-hidden shadow-lg border border-primary/20 group"
        >
          {/* Internal Glow Effects */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 blur-[80px] rounded-full group-hover:bg-white/10 transition-all duration-1000" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-amber-400/5 blur-[80px] rounded-full" />

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-3 py-1.5 rounded-md bg-white/10 border border-white/20 text-white text-xxs font-black tracking-[0.4em] mb-8 uppercase"
            >
              <Zap size={16} className="fill-secondary text-secondary animate-pulse" /> ¡Empezá Ahora!
            </motion.div>

            <h2 className="text-headline-lg-mobile md:text-display-lg text-white mb-8 uppercase font-bold">
              ¿Listo para escalar la <br />
              <span className="text-secondary">logística de tu E-Commerce?</span>
            </h2>

            <p className="text-blue-100 text-body-lg mb-12 max-w-4xl mx-auto opacity-90">
              <span className="font-bold">Olvidate de la gestión de paquetes</span> y enfocate en vender más. Dejá la distribución urbana en manos de expertos.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web."
                aria-label="Contactanos por WhatsApp para servicios logísticos"
                className="group w-full sm:w-auto px-8 py-4 bg-secondary text-slate-950 hover:bg-amber-500 font-semibold text-label-md rounded-md transition-all shadow-md flex items-center justify-center gap-4 uppercase"
              >
                Contactanos por WhatsApp <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/tarifas"
                className="group w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/20 text-white hover:bg-white/20 text-label-md rounded-md transition-all flex items-center justify-center gap-4 uppercase font-semibold"
              >
                Ver Tarifas 2026 <Calculator size={20} />
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-12 pt-12 border-t border-white/10">
              {[
                { icon: <Clock aria-hidden="true" />, text: "Confianza local comprobada" },
                { icon: <ShieldCheck aria-hidden="true" />, text: "Innovación constante en última milla" },
                { icon: <MousePointer2 aria-hidden="true" />, text: "Flota dedicada para máxima agilidad" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-4 text-label-sm text-blue-100 uppercase">
                  <div className="w-10 h-10 rounded-md bg-white/10 border border-white/20 flex items-center justify-center text-blue-200">
                    {React.cloneElement(item.icon as React.ReactElement<{ size?: number; className?: string; fill?: string }>, { size: 18 })}
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};