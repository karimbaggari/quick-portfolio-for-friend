"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle({ theme, setTheme }: { theme: boolean, setTheme: (value: boolean) => void }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === true ? false : true)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className={`w-36 justify-start gap-2 transition-colors ${
        theme === true
          ? "bg-slate-800 text-slate-100 hover:bg-slate-700"
          : "bg-slate-100 text-slate-800 hover:bg-slate-200"
      }`}
    >
      {theme === true ? (
        <>
          <Moon className="h-[1.2rem] w-[1.2rem]" />
          Dark Mode
        </>
      ) : (
        <>
          <Sun className="h-[1.2rem] w-[1.2rem]" />
          Light Mode
        </>
      )}
    </Button>
  )
}

