"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  id: number
  content: string
  author: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "Skillio me ayudó a encontrar el compañero perfecto para mi proyecto de tesis. La colaboración fue increíble.",
    author: "María González",
    role: "Estudiante de Psicología",
  },
  {
    id: 2,
    content: "La plataforma es intuitiva y fácil de usar. Encontré rápidamente las habilidades que necesitaba.",
    author: "Carlos Rodríguez",
    role: "Estudiante de Ingeniería",
  },
  {
    id: 3,
    content:
      "Gracias a Skillio, pude compartir mis conocimientos y ayudar a otros estudiantes mientras aprendía de ellos.",
    author: "Ana Martínez",
    role: "Estudiante de Diseño",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }

  const previous = () => {
    setCurrentIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8">
          <div className="inline-block rounded-lg bg-[#7CFF6B] px-3 py-1 text-lg font-medium">Testimonios</div>
          <div className="relative w-full max-w-4xl">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `${-currentIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4 md:px-8">
                    <div className="relative rounded-2xl bg-white p-6 shadow-lg md:p-8">
                      <Quote className="absolute right-6 top-6 h-8 w-8 text-[#7CFF6B]" />
                      <div className="space-y-4">
                        <p className="text-lg md:text-xl">{testimonial.content}</p>
                        <div>
                          <h3 className="font-semibold">{testimonial.author}</h3>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={previous}
                className="rounded-full bg-white p-2 shadow-lg transition-transform hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={next}
                className="rounded-full bg-white p-2 shadow-lg transition-transform hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

