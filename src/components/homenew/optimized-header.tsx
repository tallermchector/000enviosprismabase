"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Calculator as CalculatorIcon, Mail, ChevronDown, Home, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, Variants } from "framer-motion"
import { navGroups } from "@/lib/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HeaderContainer } from "./header-container"
import { ThemeToggle } from "@/components/theme-toggle"

const mobileNavVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const mobileNavItemVariants: Variants = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
}

const NavLink = ({
  href,
  children,
  isActive,
  variant = 'ghost',
}: {
  href: string
  children: React.ReactNode
  isActive: boolean
  variant?: "ghost" | "outline"
}) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Button
        asChild
        variant={variant}
        className={cn(
        "text-sm font-medium transition-colors duration-200 h-9 px-4 rounded-md",
        isActive
            ? "bg-secondary/20 text-[#fbc107] border border-secondary/30"
            : "text-white hover:text-[#fbc107] hover:bg-white/10",
        variant === 'outline' && !isActive && "border-white/30 hover:border-[#fbc107]/50"
        )}
    >
        <Link href={href}>
            {children}
        </Link>
    </Button>
  </motion.div>
)

export const OptimizedHeader = () => {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path;
  const isGroupActive = (basePath: string = "") => basePath ? pathname.startsWith(basePath) : false;

  return (
    <HeaderContainer>
      {/* Logo Section */}
      <Link href="/" className="flex items-center space-x-3 group shrink-0" aria-label="Volver al inicio desde la cabecera">
        <div className="relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden transition-all group-hover:rotate-6 group-hover:scale-105">
          <Image src="/LogoEnviosDosRuedas.webp" alt="Logo Dos Ruedas" fill className="object-contain" priority sizes="40px" />
        </div>
        <div className="flex flex-col">
          <span className="font-display font-black text-lg tracking-tighter text-[#fbc107] uppercase leading-none mb-1 group-hover:text-yellow-300 transition-colors duration-300">
            Envios DosRuedas
          </span>
          <span className="text-[10px] text-white/80 font-sans leading-none">
            Tu Solución Confiable
          </span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden items-center space-x-1 lg:flex">
        <NavLink href="/" isActive={isActive("/")}>
          <Home className="mr-2 h-4 w-4" />
          Inicio
        </NavLink>

        {navGroups.map((group) => {
          const GroupIcon = group.icon
          const groupIsActive = isGroupActive(group.basePath)
          return (
            <DropdownMenu key={group.label}>
              <DropdownMenuTrigger asChild>
                <motion.div
                  className={cn(
                    "flex cursor-pointer items-center space-x-1.5 rounded-md px-3.5 py-2 text-sm font-medium transition-colors duration-200 select-none",
                    groupIsActive
                      ? "bg-secondary/20 text-[#fbc107] border border-secondary/30"
                      : "text-white hover:text-[#fbc107] hover:bg-white/10",
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GroupIcon className="h-4 w-4" />
                  <span>{group.label}</span>
                  <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                </motion.div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2 w-56 bg-popover/95 backdrop-blur-lg border-white/10 text-popover-foreground">
                {group.items.map((item) => {
                  const ItemIcon = item.icon
                  return (
                    <DropdownMenuItem key={item.href} asChild className="focus:bg-[#fbc107]/10 focus:text-[#fbc107] cursor-pointer">
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center space-x-3 py-2 px-3 w-full",
                          isActive(item.href) ? "text-[#fbc107] font-semibold" : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        {ItemIcon && <ItemIcon className="h-4 w-4" />}
                        <span className="text-sm">{item.label}</span>
                      </Link>
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          )
        })}

        <NavLink href="/contacto" isActive={isActive("/contacto")}>
          <Mail className="mr-2 h-4 w-4" />
          Contacto
        </NavLink>
      </nav>

      {/* Right side Actions */}
      <div className="flex items-center gap-3">
        <ThemeToggle />

        {/* Mobile Navigation (Sheet) */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 w-10 h-10 rounded">
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-primary text-white p-0 border-l border-white/10">
              <SheetHeader className="p-4 border-b border-white/10">
                <SheetClose asChild>
                  <Link href="/" className="flex items-center space-x-3">
                    <Image
                      src="/LogoEnviosDosRuedas.webp"
                      alt="Logo Envíos Dos Ruedas"
                      width={40}
                      height={40}
                      className="rounded-full ring-2 ring-secondary/20"
                      priority
                    />
                    <div>
                      <SheetTitle className="text-[#fbc107] text-lg font-bold font-display">
                        Envios DosRuedas
                      </SheetTitle>
                      <p className="text-xs text-white/80 font-sans -mt-1">Tu Solución Confiable</p>
                    </div>
                  </Link>
                </SheetClose>
              </SheetHeader>
              <motion.div
                className="flex h-[calc(100vh-80px)] flex-col px-4 pt-4 justify-between pb-8"
                variants={mobileNavVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex flex-col space-y-1">
                  {/* Enlace de Inicio */}
                  <motion.div variants={mobileNavItemVariants}>
                    <SheetClose asChild>
                      <Link
                        href="/"
                        className={cn(
                          "flex items-center space-x-4 py-3 px-4 rounded-xl transition-all duration-300 w-full text-left group",
                          isActive("/")
                            ? "bg-secondary/20 text-[#fbc107] font-semibold border border-secondary/30 shadow-lg"
                            : "text-white hover:text-[#fbc107] hover:bg-white/5",
                        )}
                      >
                        <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                        <span className="font-medium text-base">Inicio</span>
                      </Link>
                    </SheetClose>
                  </motion.div>

                  {/* Grupos de Navegación (Acordeón) */}
                  <Accordion type="multiple" className="w-full">
                    {navGroups.map((group) => {
                      const GroupIcon = group.icon
                      const groupIsActive = isGroupActive(group.basePath)

                      return (
                        <motion.div variants={mobileNavItemVariants} key={group.label}>
                          <AccordionItem value={group.label} className="border-b-0">
                            <AccordionTrigger
                              className={cn(
                                "py-3 px-4 rounded-xl transition-all duration-300 w-full justify-between group",
                                groupIsActive
                                  ? "text-[#fbc107] font-semibold [&[data-state=open]]:bg-secondary/20"
                                  : "text-white hover:text-[#fbc107] hover:bg-white/5",
                                "hover:no-underline",
                              )}
                            >
                              <div className="flex items-center space-x-4">
                                <GroupIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                                <span className="font-medium text-base">{group.label}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-1 pb-0">
                              <div className="flex flex-col space-y-0.5 pl-8 border-l border-white/10 ml-6 my-1">
                                {group.items.map((item) => {
                                  const ItemIcon = item.icon
                                  return (
                                    <SheetClose asChild key={item.href}>
                                      <Link
                                        href={item.href}
                                        className={cn(
                                          "flex items-center space-x-3 py-2 px-3 rounded-lg transition-all duration-300 w-full text-left",
                                          isActive(item.href)
                                            ? "bg-[#fbc107]/10 text-[#fbc107] font-medium"
                                            : "text-white/80 hover:text-[#fbc107] hover:bg-white/5",
                                        )}
                                      >
                                        {ItemIcon && <ItemIcon className="h-4 w-4" />}
                                        <span className="text-sm">{item.label}</span>
                                      </Link>
                                    </SheetClose>
                                  )
                                })}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </motion.div>
                      )
                    })}
                  </Accordion>

                  {/* Enlace de Contacto */}
                  <motion.div variants={mobileNavItemVariants}>
                    <SheetClose asChild>
                      <Link
                        href="/contacto"
                        className={cn(
                          "flex items-center space-x-4 py-3 px-4 rounded-xl transition-all duration-300 w-full text-left group",
                          isActive("/contacto")
                            ? "bg-secondary/20 text-[#fbc107] font-semibold border border-secondary/30 shadow-lg"
                            : "text-white hover:text-[#fbc107] hover:bg-white/5",
                        )}
                      >
                        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                        <span className="font-medium text-base">Contacto</span>
                      </Link>
                    </SheetClose>
                  </motion.div>
                </div>

                {/* Sin Portal Cliente en Móvil */}
                <div></div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </HeaderContainer>
  )
}