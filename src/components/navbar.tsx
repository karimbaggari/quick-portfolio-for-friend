"use client"

import { useState } from "react"
import Link from "next/link"
import DropDownNavbar from "./dropDownNavbar"
import { Menu, X } from "lucide-react"

const Navbar = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className={`${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <header className="flex items-center justify-between py-4 md:py-8">
          <Link
            href="/"
            className={`inline-flex items-center gap-2.5 text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} md:text-3xl`}
            aria-label="logo"
          >
            Omis Visual
          </Link>
          <nav className="hidden gap-12 lg:flex">
            <Link
              href="/"
              className={`text-lg font-semibold transition duration-100 ${isDarkMode ? "text-white hover:text-indigo-500 active:text-indigo-700" : "text-gray-600 hover:text-indigo-500 active:text-indigo-700"}`}
            >
              Home
            </Link>
            <DropDownNavbar />
            <Link
              href="/gallery"
              className={`text-lg font-semibold transition duration-100 ${isDarkMode ? "text-white hover:text-indigo-500 active:text-indigo-700" : "text-gray-600 hover:text-indigo-500 active:text-indigo-700"}`}
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className={`text-lg font-semibold transition duration-100 ${isDarkMode ? "text-white hover:text-indigo-500 active:text-indigo-700" : "text-gray-600 hover:text-indigo-500 active:text-indigo-700"}`}
            >
              About
            </Link>
          </nav>

          <button
            type="button"
            onClick={toggleMobileMenu}
            className={`inline-flex items-center gap-2 rounded-lg ${isDarkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-200 text-gray-500 hover:bg-gray-300"} px-2.5 py-2 text-sm font-semibold ring-indigo-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            Menu
          </button>
        </header>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <nav className="flex flex-col gap-4 py-4">
              <Link
                href="/"
                className={`text-lg font-semibold transition duration-100 ${isDarkMode ? "text-white hover:text-indigo-500 active:text-indigo-700" : "text-gray-600 hover:text-indigo-500 active:text-indigo-700"}`}
              >
                Home
              </Link>
              <DropDownNavbar />
              <Link
                href="/gallery"
                className={`text-lg font-semibold transition duration-100 ${isDarkMode ? "text-white hover:text-indigo-500 active:text-indigo-700" : "text-gray-600 hover:text-indigo-500 active:text-indigo-700"}`}
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className={`text-lg font-semibold transition duration-100 ${isDarkMode ? "text-white hover:text-indigo-500 active:text-indigo-700" : "text-gray-600 hover:text-indigo-500 active:text-indigo-700"}`}
              >
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar

