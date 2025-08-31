import type React from "react"
import type { Metadata } from "next"
import { Fredoka, Nunito } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
})

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Chanoly Restaurant",
  description: "Authentic Asian cuisine in Addis Ababa",
  generator: 'v0.app',
  other: {
    'link[rel="preload"]': [
      {
        href: '/fonts/SHOWG.TTF',
        as: 'font',
        type: 'font/ttf',
        crossOrigin: 'anonymous',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <head>
        <link
          rel="preload"
          href="/fonts/SHOWG.TTF"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="//fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
