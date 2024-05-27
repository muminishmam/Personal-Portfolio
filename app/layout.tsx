"use client"
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <head />
      <body className={`animate-fadeIn animation-delay-2 dark:bg-stone-900`}>
        <ThemeProvider enableSystem={false} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

/*import '../styles/globals.css'
import { ThemeProvider } from "next-themes"
import Navbar from '@/components/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">{}
        <head />
        <ThemeProvider defaultTheme="light" enableSystem={false} attribute="class">
        <body>
          <Navbar />
          {children}
        </body>
        </ThemeProvider>
      </html>
  )
}*/
