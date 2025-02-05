"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Minus, Plus } from "lucide-react"

interface AccordionItemProps {
  number: string
  title: string
  content: string
  isOpen: boolean
  onToggle: () => void
}

function AccordionItem({ number, title, content, isOpen, onToggle }: AccordionItemProps) {
  return (
    <motion.div
      className={`rounded-3xl transition-colors ${isOpen ? "bg-[#7CFF6B]" : "bg-gray-100"}`}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      id="process"
    >
      <button onClick={onToggle} className="flex w-full items-center justify-between p-6">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold">{number}</span>
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        <div className="rounded-full border border-current p-1">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-gray-600">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function HowItWorks() {
  const [openItem, setOpenItem] = useState(0)

  const items = [
    {
      number: "01",
      title: "Registrate e inicia sesión",
      content:
        'Si aún no tienes una cuenta, haz clic en "Unirse ahora" para comenzar. A continuación, solo tendrás que completar algunos pasos sencillos con tu información personal. ¡No te preocupes, es un proceso rápido y fácil!',
    },
    {
      number: "02",
      title: "Completa tu perfil y cuentale a otros estudiantes que habilidades tienes para ofrecer",
      content: "Personaliza tu perfil con tus habilidades y experiencia académica.",
    },
    {
      number: "03",
      title: "¿Qué habilidades estás buscando para mejorar tu tesis?",
      content: "Explora las habilidades disponibles y encuentra las que necesitas.",
    },
    {
      number: "04",
      title: "Matechea con la persona indicada que haga tu tesis realidad",
      content: "Conecta con otros estudiantes que tienen las habilidades que buscas.",
    },
    {
      number: "05",
      title: "Deja comentarios y evaluaciones que tal te fue con tu match",
      content: "Comparte tu experiencia y ayuda a otros a encontrar los mejores matches.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-8">
          <div className="inline-block rounded-lg bg-[#7CFF6B] px-3 py-1 text-lg font-medium">
            Cómo es el proceso de funcionamiento
          </div>
          <div className="space-y-4">
            {items.map((item, index) => (
              <AccordionItem
                key={item.number}
                {...item}
                isOpen={openItem === index}
                onToggle={() => setOpenItem(openItem === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

