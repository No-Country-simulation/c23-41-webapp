import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import { Content as FontHeading } from "next/font/google"
import type React from "react" // Import React
import { cn } from "./lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = FontHeading({
  subsets: ["khmer"],
  variable: "--font-heading",
  weight: ["400", "700"], // Peso normal y negrita
});

export const metadata: Metadata = {
  title: "Skillio | Conecta tu talento",
  description: "Plataforma para conectar estudiantes y compartir habilidades",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontHeading.variable)}>

        {children}
      </body>
    </html>
  )
}

