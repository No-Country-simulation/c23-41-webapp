"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                ¡Comenzá a conectar desde tu talento!
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Forma parte de nuestra comunidad universitaria para el intercambio de habilidades. Aprende, enseña y
                crece junto a otros estudiantes y profesionales.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#"
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
              <motion.div
                className="absolute inset-0"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  ease: "linear",
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <path
                    d="M200,50 A150,150 0 1,1 199.99,50"
                    fill="none"
                    stroke="#7CFF6B"
                    strokeWidth="2"
                    strokeDasharray="4,6"
                  />
                </svg>
              </motion.div>
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-32 h-32"
                >
                  <path
                    d="M100 20C120 20 140 30 150 50L180 100L150 150C140 170 120 180 100 180C80 180 60 170 50 150L20 100L50 50C60 30 80 20 100 20Z"
                    fill="#7CFF6B"
                  />
                  <circle cx="100" cy="100" r="30" fill="black" />
                </svg>
              </motion.div>
              <motion.div
                className="absolute"
                animate={{
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                <div className="w-8 h-8 rounded-full bg-[#7CFF6B]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

