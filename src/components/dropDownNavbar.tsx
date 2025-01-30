"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

const DropDownNavbar = () => {
  const features = [
    { name: "Food", href: "/food" },
    { name: "Photography", href: "/photography" },
  ]
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1 text-lg font-semibold text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
      >
        Features
        <ChevronDown
          className={`h-5 w-5 text-indigo-600 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 lg:left-1/2 lg:-translate-x-1/2">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {features.map((feature) => (
              <Link
                key={feature.name}
                href={feature.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                role="menuitem"
              >
                {feature.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default DropDownNavbar

