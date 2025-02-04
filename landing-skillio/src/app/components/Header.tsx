"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MobileNav } from "./MobileNav"

export function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <motion.div className="w-6 h-6" whileHover={{ rotate: 180 }} transition={{ type: "spring", stiffness: 200 }}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M12 2L2 20H22L12 2Z" fill="#7CFF6B" />
            </svg>
          </motion.div>
          <Link href="/" className="text-xl font-semibold">
            Skillio
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm hover:text-green-500 transition-colors">
            Sobre nosotros
          </Link>
          <Link href="#" className="text-sm hover:text-green-500 transition-colors">
            Servicios
          </Link>
          <Link href="#" className="text-sm hover:text-green-500 transition-colors">
            Casos de estudiantes
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-[#7CFF6B] px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-[#7CFF6B]/90 focus-visible:outline-none focus-visible:ring-1"
          >
            Unirse ahora
          </Link>
          <MobileNav />
        </div>
      </div>
    </motion.header>
  )
}

