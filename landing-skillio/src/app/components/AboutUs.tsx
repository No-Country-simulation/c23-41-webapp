"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin } from "lucide-react"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  linkedin: string
}

function TeamMember({ name, role, image, linkedin }: TeamMemberProps) {
  return (
    <motion.div
      className="group relative rounded-3xl bg-gray-100 p-6"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="space-y-4">
        <div className="relative h-32 w-32">
          <div className="absolute inset-0 rounded-full bg-[#7CFF6B] blur-lg group-hover:blur-xl transition-all" />
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={128}
            height={128}
            className="relative rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-gray-600">{role}</p>
        </div>
        <motion.a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm text-white transition-colors hover:bg-black/90"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Linkedin size={16} />
          LinkedIn
        </motion.a>
      </div>
    </motion.div>
  )
}

export function AboutUs() {
  const team = [
    {
      name: "Luis Luna",
      role: "Desarrollador Java con Spring Backend",
      image: "/placeholder.svg?height=128&width=128",
      linkedin: "https://linkedin.com/in/luisluna",
    },
    {
      name: "Mauricio Pastelin",
      role: "Linux Administrator | Network Engineer | Developer",
      image: "/placeholder.svg?height=128&width=128",
      linkedin: "https://linkedin.com/in/mpastelin",
    },
    {
      name: "Pablo Ramírez",
      role: "Desarrollador Java con Spring Backend",
      image: "/placeholder.svg?height=128&width=128",
      linkedin: "https://linkedin.com/in/pramirez",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <div className="inline-block rounded-lg bg-[#7CFF6B] px-3 py-1 text-lg font-medium">Sobre nosotros</div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

