"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section className="w-full py-8 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                ¡Comienza a conectar desde tu talento!
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Forma parte de nuestra comunidad universitaria para el intercambio de habilidades. Aprende, enseña y
                crece junto a otros estudiantes y profesionales.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://test-skillio.netlify.app/"
                target="_blank"
                className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-1"
              >
                Unirse ahora
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-full min-h-[350px]">
              <Image src={'/hero.svg'} alt="Hero Illustration" fill className="object-contain" priority={true} sizes="100vw" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

