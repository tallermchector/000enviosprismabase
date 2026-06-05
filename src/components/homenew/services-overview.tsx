'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Zap, Package, Truck, ChevronRight, Clock, MousePointer2 } from 'lucide-react';
import Link from 'next/link';
import { cn } from "@/lib/utils";

// Definición de tipos para la tematización semántica
type ServiceTheme = {
  card: string;
  icon: string;
  accent: string;
  text: string;
  desc: string;
  button: string;
  badge?: string;
  accentColor: string;
  glowColor: string;
};

const THEMES: Record<string, ServiceTheme> = {
  express: {
    card: "bg-white border border-slate-100 hover:border-red-200 shadow-md hover:shadow-lg transition-all duration-300",
    icon: "bg-red-50 text-red-600 border border-red-100",
    accent: "text-red-600 font-semibold",
    text: "text-slate-900",
    desc: "text-slate-600 [&>span]:text-slate-900",
    button: "text-slate-600 hover:text-red-600 group-hover:text-red-600 font-semibold",
    badge: "bg-red-50 text-red-600 border border-red-200/50",
    accentColor: "red-600",
    glowColor: "rgba(239,68,68,0.03)"
  },
  lowcost: {
    card: "bg-white border border-slate-100 hover:border-cyan-200 shadow-md hover:shadow-lg transition-all duration-300",
    icon: "bg-cyan-50 text-cyan-700 border border-cyan-100",
    accent: "text-cyan-700 font-semibold",
    text: "text-slate-900",
    desc: "text-slate-600 [&>span]:text-slate-900",
    button: "text-slate-600 hover:text-cyan-700 group-hover:text-cyan-700 font-semibold",
    badge: "bg-cyan-50 text-cyan-700 border border-cyan-200/50",
    accentColor: "cyan-700",
    glowColor: "rgba(6,182,212,0.03)"
  },
  meli: {
    card: "bg-white border border-slate-100 hover:border-yellow-200 shadow-md hover:shadow-lg transition-all duration-300",
    icon: "bg-yellow-50 text-yellow-700 border border-yellow-100",
    accent: "text-yellow-700 font-semibold",
    text: "text-slate-900",
    desc: "text-slate-600 [&>span]:text-slate-900",
    button: "text-slate-600 hover:text-yellow-700 group-hover:text-yellow-700 font-semibold",
    badge: "bg-yellow-50 text-yellow-700 border border-yellow-200/50",
    accentColor: "yellow-700",
    glowColor: "rgba(234,179,8,0.03)"
  },
  ecommerce: {
    card: "bg-white border border-slate-100 hover:border-emerald-200 shadow-md hover:shadow-lg transition-all duration-300",
    icon: "bg-emerald-50 text-emerald-700 border border-emerald-100",
    accent: "text-emerald-700 font-semibold",
    text: "text-slate-900",
    desc: "text-slate-600 [&>span]:text-slate-900",
    button: "text-slate-600 hover:text-emerald-700 group-hover:text-emerald-700 font-semibold",
    badge: "bg-emerald-50 text-emerald-700 border border-emerald-200/50",
    accentColor: "emerald-700",
    glowColor: "rgba(16,185,129,0.03)"
  }
};

export const ServicesOverview = () => {
  const services = [
    {
      theme: "express",
      title: "Envíos Express",
      bajada: "Prioridad absoluta y certeza total.",
      desc: <>Diseñado para operaciones de alta criticidad horaria. <span className="font-bold">Vos elegís el rango exacto</span> de entrega con solo 2 horas de anticipación.</>,
      icon: <Zap strokeWidth={1.5} />,
      href: "/servicios/envios-express",
      buttonText: "Solicitar Express",
      badge: "ALTA PRIORIDAD",
      className: "lg:col-span-2 lg:row-span-2"
    },
    {
      theme: "meli",
      title: "Envíos Flex",
      bajada: "Reputación al máximo.",
      desc: <>Somos expertos en MercadoLibre. Cumplimos tus <span className="font-bold">SLAs Same-Day</span>.</>,
      icon: <Package strokeWidth={1.5} />,
      href: "/servicios/enviosflex",
      buttonText: "Activar Flex",
      className: "lg:col-span-2 lg:row-span-1"
    },
    {
      theme: "lowcost",
      title: "Envíos LowCost",
      bajada: "Rentabilidad y ruteo masivo.",
      desc: <>Garantizamos entrega en el día.</>,
      icon: <Clock strokeWidth={1.5} />,
      href: "/servicios/envios-lowcost",
      buttonText: "Ahorrá",
      className: "lg:col-span-1 lg:row-span-1"
    },
    {
      theme: "ecommerce",
      title: "E-Commerce & 3PL",
      bajada: "Tercerización y cuentas.",
      desc: <>Soluciones escalables para PyMEs.</>,
      icon: <Truck strokeWidth={1.5} />,
      href: "/servicios/plan-emprendedores",
      buttonText: "Asesorarse",
      className: "lg:col-span-1 lg:row-span-1"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0, scale: 0.98 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-[100dvh] pt-28 pb-16 lg:pt-32 lg:pb-20 px-4 bg-transparent overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[160px] pointer-events-none opacity-50" />
      
      {/* Section Transition Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20 text-primary text-xxs font-black tracking-[0.2em] mb-8 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Nuestros Servicios
            </div>
            <h2 className="text-headline-lg-mobile md:text-display-lg uppercase text-slate-900 font-bold">
              Soluciones <br />
              <span className="text-primary">Logísticas</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-md lg:border-l lg:border-slate-200 lg:pl-10"
          >
            <p className="text-slate-600 text-body-lg">
              Infraestructura moderna para negocios que no se detienen. Inteligencia aplicada a cada kilómetro.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:gap-6 h-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, idx) => {
            const theme = THEMES[service.theme as keyof typeof THEMES];
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={cn(
                  "group p-6 lg:p-10 rounded-lg transition-all duration-500 flex flex-col justify-between relative overflow-hidden",
                  theme.card,
                  service.className
                )}
              >
                {/* Background Highlight on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                  style={{ background: `radial-gradient(circle at top right, ${theme.glowColor}, transparent)` }}
                />

                <div className="relative z-10">
                  <div className={cn(
                    "w-12 h-12 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center mb-6 lg:mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
                    theme.icon
                  )}>
                    {React.cloneElement(service.icon as React.ReactElement<any>, { size: service.theme === 'express' ? 32 : 28 })}
                  </div>

                  <h3 className={cn("text-headline-md mb-1 uppercase font-semibold", theme.text)}>
                    {service.title}
                  </h3>
                  <p className={cn("text-label-sm uppercase mb-4", theme.accent)}>
                    {service.bajada}
                  </p>
                  <div className={cn("text-body-md mb-6 max-w-[320px]", theme.desc)}>
                    {service.desc}
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <Link
                    href={service.href}
                    className={cn("flex items-center gap-3 text-label-md transition-all", theme.button)}
                  >
                    {service.buttonText} <ChevronRight size={16} />
                  </Link>

                  {service.badge && (
                    <div className={cn("hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md text-[9px] font-black tracking-widest uppercase border", theme.badge)}>
                      {service.badge}
                    </div>
                  )}
                </div>

                {/* Decorative side border accent */}
                <div className={cn("absolute top-1/2 -right-1 w-[2px] h-20 bg-gradient-to-b from-transparent via-slate-200 to-transparent group-hover:via-current transition-all", theme.accent)} />

                {/* Specific Visual for the first card */}
                {idx === 0 && (
                  <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity" aria-hidden="true">
                    <MousePointer2 size={120} className="rotate-12 text-slate-400" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};