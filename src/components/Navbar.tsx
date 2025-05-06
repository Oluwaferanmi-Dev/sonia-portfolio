"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X, Instagram } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-primary-700 font-serif text-xl md:text-2xl font-semibold">
            Sonia U.
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-dark-500 hover:text-primary-700 transition-colors">
              About
            </a>
            <a href="#services" className="text-dark-500 hover:text-primary-700 transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-dark-500 hover:text-primary-700 transition-colors">
              Portfolio
            </a>
            <a href="#testimonials" className="text-dark-500 hover:text-primary-700 transition-colors">
              Testimonials
            </a>
            <a href="#blog" className="text-dark-500 hover:text-primary-700 transition-colors">
              Blog
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-primary-500 text-dark-500 rounded-full hover:bg-primary-600 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/chronicles_of_ufedo?igsh=dTJ4NXF5aW43emVo&utm_source=qr"
              className="text-dark-500 hover:text-primary-700 transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@sonia_d_creator?_t=ZM-8vpWZe65mkg&_r=1"
              className="text-dark-500 hover:text-primary-700 transition-colors"
            >
              <FaTiktok size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-dark-500 focus:outline-none" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            <a
              href="#about"
              className="text-dark-500 hover:text-primary-700 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="text-dark-500 hover:text-primary-700 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-dark-500 hover:text-primary-700 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#testimonials"
              className="text-dark-500 hover:text-primary-700 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#blog"
              className="text-dark-500 hover:text-primary-700 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </a>
            <a
              href="#contact"
              className="bg-primary-500 text-dark-500 py-2 px-4 rounded-full text-center hover:bg-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>

            {/* Social Icons - Mobile */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.instagram.com/chronicles_of_ufedo?igsh=dTJ4NXF5aW43emVo&utm_source=qr"
                className="text-dark-500 hover:text-primary-700 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@sonia_d_creator?_t=ZM-8vpWZe65mkg&_r=1"
                className="text-dark-500 hover:text-primary-700 transition-colors"
              >
                <FaTiktok size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
