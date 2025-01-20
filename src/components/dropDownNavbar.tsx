"use client";
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react'

const DropDownNavbar = () => {
    const features = [
        { name: "Food", href: "/food" },
        { name: "Fitness", href: "/fitness" },
        { name: "Photography", href: "/photography" },
        { name: "Personal Pics", href: "/personal-pics" },
    ]
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
       
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
        <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {features.map((feature) => (
              <a
                key={feature.name}
                href={feature.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                role="menuitem"
              >
                {feature.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default DropDownNavbar
