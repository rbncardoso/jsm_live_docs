import { Inter as FontSans } from "next/font/google"


import { cn } from "@/lib/utils"
import './globals.css'  

import { Metadata } from "next"


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadade: Metadata ={
  title: "Live Docs",
  description: "Your go-to collaborative editor",
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
