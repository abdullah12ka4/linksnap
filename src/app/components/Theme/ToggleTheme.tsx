"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null // Prevent rendering before client mounts

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      size="icon"
      className="relative bg-transparent hover:bg-transparent p-2 focus:outline-none !ring-0"
    >
      <Sun className={`absolute h-5 w-5 transition-all ${theme === "light" ? "scale-100 rotate-0" : "scale-0 -rotate-90"}`} />
      <Moon className={`absolute h-5 w-5 transition-all ${theme === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-90"}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
