"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 inline-flex items-center justify-center rounded-md p-2"
        aria-label="Toggle menu"
      >
        {!isOpen ? <Menu className="h-6 w-6" /> : <X className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-16 z-40 bg-white px-6 py-8 shadow-lg"
          >
            <nav className="flex flex-col space-y-6">
              <Link
                href="#"
                className="text-lg hover:text-green-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sobre nosotros
              </Link>
              <Link
                href="#"
                className="text-lg hover:text-green-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#"
                className="text-lg hover:text-green-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Casos de estudiantes
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#7CFF6B] px-6 text-base font-medium shadow transition-colors hover:bg-[#7CFF6B]/90"
                onClick={() => setIsOpen(false)}
              >
                Unirse ahora
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

