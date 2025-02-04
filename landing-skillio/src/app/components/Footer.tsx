"use client"

import { motion } from "framer-motion"
import { Facebook, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                className="w-6 h-6"
                whileHover={{ rotate: 180 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M12 2L2 20H22L12 2Z" fill="#7CFF6B" />
                </svg>
              </motion.div>
              <span className="text-xl font-semibold">Skillio</span>
            </Link>
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="hover:text-[#7CFF6B] transition-colors">
                Sobre nosotros
              </Link>
              <Link href="#" className="hover:text-[#7CFF6B] transition-colors">
                Services
              </Link>
              <Link href="#" className="hover:text-[#7CFF6B] transition-colors">
                Use Cases
              </Link>
              <Link href="#" className="hover:text-[#7CFF6B] transition-colors">
                Pricing
              </Link>
              <Link href="#" className="hover:text-[#7CFF6B] transition-colors">
                Blog
              </Link>
            </nav>
          </div>
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-[#7CFF6B] px-3 py-1 text-black text-sm font-medium">
              Contáctanos
            </div>
            <div className="space-y-2 text-gray-400">
              <p>Email: info@skillio.com</p>
              <p>Phone: 555-567-8901</p>
              <p className="max-w-xs">Address: 1234 Main St Moonstone City, Stardust State 12345</p>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-[#7CFF6B]">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-[#7CFF6B]">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-[#7CFF6B]">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl bg-gray-900 p-6">
              <h3 className="mb-4 text-lg font-medium">Subscribe to news</h3>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 rounded-md bg-white/10 px-4 py-2 text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="rounded-md bg-[#7CFF6B] px-4 py-2 text-black font-medium transition-colors hover:bg-[#7CFF6B]/90"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-gray-400 sm:flex-row">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <Link href="#" className="hover:text-[#7CFF6B] transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

