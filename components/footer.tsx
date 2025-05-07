import Link from "next/link"
import { Instagram, Twitter, Mail, Phone } from "lucide-react"
import { Playfair_Display } from "next/font/google"
import { cn } from "@/lib/utils"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className={cn("text-xl font-bold mb-4", playfair.className)}>Sonia U.</h3>
            <p className="text-sm text-gray-300 mb-4">
              Creating meaningful connections between brands and their audience through strategic content and authentic
              storytelling.
            </p>
            <div className="flex space-x-4">
              <Link href="/" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-gray-300 hover:text-[#D8A1A1]" />
              </Link>
              <Link href="/" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-gray-300 hover:text-[#D8A1A1]" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className={cn("text-lg font-bold mb-4", playfair.className)}>Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-gray-300 hover:text-white">
                About
              </Link>
              <Link href="/" className="text-sm text-gray-300 hover:text-white">
                Services
              </Link>
              <Link href="/" className="text-sm text-gray-300 hover:text-white">
                Portfolio
              </Link>
              <Link href="/" className="text-sm text-gray-300 hover:text-white">
                Testimonials
              </Link>
              <Link href="/" className="text-sm text-gray-300 hover:text-white">
                Blog
              </Link>
              <Link href="/" className="text-sm text-gray-300 hover:text-white">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className={cn("text-lg font-bold mb-4", playfair.className)}>Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D8A1A1]" />
                <span className="text-sm text-gray-300">soniaufedo1999@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D8A1A1]" />
                <span className="text-sm text-gray-300">+1 (234) 567-8910</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Sonia U. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
