import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "./components/layout/navbar"
import BottomGradientBlur from "./components/layout/BottomGradientBlur"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Satish Hebbal - Portfolio",
  description: "Personal portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-white">
      <head>
        {/* GSAP CDN */}
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" 
          strategy="beforeInteractive"
        />
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js" 
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.className} bg-white min-h-screen`}>
        <Navbar />
        <main>
          {children}
        </main>
        <BottomGradientBlur />
      </body>
    </html>
  )
}