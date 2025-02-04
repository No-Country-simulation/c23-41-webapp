"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type React from "react" // Added import for React

interface ServiceCardProps {
  title: string
  variant: "gray" | "green" | "dark" | "white"
  icon: React.ReactNode
}

function ServiceCard({ title, variant, icon }: ServiceCardProps) {
  const variants = {
    gray: "bg-gray-100 hover:bg-gray-200",
    green: "bg-[#7CFF6B] hover:bg-[#7CFF6B]/90",
    dark: "bg-black text-white hover:bg-black/90",
    white: "bg-white hover:bg-gray-50 border border-gray-200",
  }

  return (
    <motion.div
      className={`relative rounded-3xl p-6 transition-colors ${variants[variant]}`}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-4">
        <div className="inline-block rounded-lg bg-[#7CFF6B] px-3 py-1 text-sm font-medium">{title}</div>
        <div className="h-32 w-full flex items-center justify-center">{icon}</div>
        <div className="flex items-center gap-2 text-sm">
          Learn more
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </motion.div>
  )
}

export function Services() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="inline-block rounded-lg bg-[#7CFF6B] px-3 py-1 text-lg font-medium">Servicios</div>

          <div className="grid gap-6 sm:grid-cols-2">
            <ServiceCard
              title="Conectá con estudiantes de otras carreras y universidades"
              variant="gray"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-12 w-12">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v12m-6-6h12" />
                </svg>
              }
            />
            <ServiceCard
              title="Enseñá tus habilidades a otros estudiantes"
              variant="green"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-12 w-12">
                  <path d="M12 6v12m-6-6h12" />
                </svg>
              }
            />
            <ServiceCard
              title="Publicá lo que estás buscando"
              variant="dark"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="white" className="h-12 w-12">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              }
            />
            <ServiceCard
              title="Realizá comentarios"
              variant="white"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-12 w-12">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              }
            />
          </div>

          <div className="rounded-3xl bg-gray-100 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Hagamos que las cosas sucedan</h2>
                <p className="text-gray-500">
                  Contáctanos hoy para aprender a cómo nuestros servicios pueden ayudarte de la mejor forma.
                </p>
                <motion.button
                  className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-black/90"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cuéntanos sobre tu propuesta
                </motion.button>
              </div>
              <div className="flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="h-32 w-32">
                    <circle cx="50" cy="50" r="40" className="fill-black" />
                    <path d="M50 20v60M20 50h60" stroke="#7CFF6B" strokeWidth="4" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

