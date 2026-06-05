'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Menu,
  Home,
  Mail,
  Calculator as CalculatorIcon,
  Phone,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface MobileMenuProps {
  navGroups: any[];
}

export function MobileMenu({ navGroups }: MobileMenuProps) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const isGroupActive = (basePath: string) => pathname?.startsWith(basePath);

  const mobileNavVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const mobileNavItemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-slate-800 hover:bg-slate-100 w-12 h-12 rounded-lg" aria-label="Abrir menú de navegación">
            <Menu className="h-7 w-7" />
            <span className="sr-only">Abrir menú</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[320px] bg-white border-l border-slate-100 text-slate-900 pt-12 p-6 shadow-xl">
          <SheetHeader className="mb-12 flex flex-row items-center space-x-4">
            <div className="relative w-10 h-10 rounded-lg flex items-center justify-center">
              <Image src="/LogoEnviosDosRuedas.webp" alt="Logo Dos Ruedas" fill className="object-contain" sizes="40px" />
            </div>
            <SheetTitle className="text-slate-900 font-display font-bold text-xl tracking-tighter uppercase whitespace-nowrap">
              Envíos Dos <span className="text-primary">Ruedas</span>
            </SheetTitle>
          </SheetHeader>

          <motion.div
            className="flex h-[calc(100vh-200px)] flex-col"
            variants={mobileNavVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={mobileNavItemVariants}>
              <SheetClose asChild>
                <Link
                  href="/"
                  className={cn(
                    "flex items-center space-x-5 py-4 px-5 rounded-lg transition-all duration-300 w-full mb-2 border",
                    isActive("/")
                      ? "bg-primary/10 text-primary border-primary/20 shadow-sm"
                      : "text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-50",
                  )}
                >
                  <Home className="w-5 h-5" />
                  <span className="font-bold text-xs tracking-[0.1em] uppercase">Inicio</span>
                </Link>
              </SheetClose>
            </motion.div>

            <Accordion type="multiple" className="w-full space-y-2">
              {navGroups.map((group) => {
                const GroupIcon = group.icon;
                const groupIsActive = isGroupActive(group.basePath);

                return (
                  <motion.div variants={mobileNavItemVariants} key={group.label}>
                    <AccordionItem value={group.label} className="border-b-0">
                      <AccordionTrigger
                        className={cn(
                          "py-4 px-5 rounded-lg transition-all duration-300 w-full justify-between group border",
                          groupIsActive
                            ? "text-primary font-bold bg-primary/10 border-primary/20 [&[data-state=open]]:bg-primary/10"
                            : "text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-50",
                          "hover:no-underline",
                        )}
                      >
                        <div className="flex items-center space-x-5">
                          <GroupIcon className="w-5 h-5" />
                          <span className="font-bold text-xs tracking-[0.1em] uppercase">{group.label}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-0">
                        <div className="flex flex-col space-y-1 pl-10 border-l border-slate-100 ml-7 my-2">
                          {group.items.map((item: any) => {
                            const ItemIcon = item.icon;
                            return (
                              <SheetClose asChild key={item.href}>
                                <Link
                                  href={item.href}
                                  className={cn(
                                    "flex items-center space-x-4 py-3.5 px-5 rounded-lg transition-all duration-300 w-full text-left",
                                    isActive(item.href)
                                      ? "bg-primary/10 text-primary font-bold"
                                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-50",
                                  )}
                                >
                                  {ItemIcon && <ItemIcon className="w-4 h-4" />}
                                  <span className="text-sm font-medium">{item.label}</span>
                                </Link>
                              </SheetClose>
                            );
                          })}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                );
              })}
            </Accordion>

            <motion.div variants={mobileNavItemVariants} className="mt-2">
              <SheetClose asChild>
                <Link
                  href="/contacto"
                  className={cn(
                    "flex items-center space-x-5 py-4 px-5 rounded-lg transition-all duration-300 w-full group border",
                    isActive("/contacto")
                      ? "bg-primary/10 text-primary border-primary/20 shadow-sm"
                      : "text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-50",
                  )}
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-bold text-xs tracking-[0.1em] uppercase">Contacto</span>
                </Link>
              </SheetClose>
            </motion.div>

            <motion.div variants={mobileNavItemVariants} className="mt-auto pt-8">
              <SheetClose asChild>
                <Link href="/cotizar/express" className="block w-full">
                  <Button
                    size="lg"
                    className="w-full h-12 bg-secondary hover:bg-amber-500 text-slate-950 font-bold rounded-lg shadow-md uppercase tracking-wider active:scale-[0.95] transition-transform flex items-center justify-center"
                  >
                    <CalculatorIcon className="w-5 h-5 mr-3" />
                    Cotizar Envío
                  </Button>
                </Link>
              </SheetClose>
              <div className="mt-6 flex items-center justify-center gap-6">
                <Link href="https://instagram.com/enviosdosruedas" aria-label="Visitar nuestro Instagram" className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary hover:bg-slate-100 transition-all active:scale-[0.95]">
                  <InstagramIcon className="w-5 h-5" />
                </Link>
                <a href="tel:+5492236602699" aria-label="Llamar a Envios DosRuedas" className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-secondary hover:bg-white/10 hover:border-secondary transition-all active:scale-[0.95]">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
