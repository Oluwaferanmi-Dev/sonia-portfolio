import type React from "react"
import { Instagram, Heart } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-500 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-12 gap-8">
          <div className="text-center md:text-left max-w-xs">
            <h3 className="font-serif text-2xl font-semibold mb-4 text-primary-500">Sonia U.</h3>
            <p className="text-gray-300 mb-6">
              Creating meaningful connections between brands and their audience through strategic social media
              management and authentic content creation.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.instagram.com/chronicles_of_ufedo?igsh=dTJ4NXF5aW43emVo&utm_source=qr"
                className="text-gray-300 hover:text-primary-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@sonia_d_creator?_t=ZM-8vpWZe65mkg&_r=1"
                className="text-gray-300 hover:text-primary-500 transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok size={20} />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg font-medium mb-4 text-primary-500">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg font-medium mb-4 text-primary-500">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Social Media Management
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Content Creation
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Campaign Strategy
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Creative Direction
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg font-medium mb-4 text-primary-500">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:soniaufedo1999@gmail.com"
                  className="text-gray-300 hover:text-primary-500 transition-colors"
                >
                  soniaufedo1999@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:+2348148760227" className="text-gray-300 hover:text-primary-500 transition-colors">
                  +234 814 876 0227
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© {currentYear} Sonia U. All rights reserved.</p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart size={14} className="text-primary-500 mx-1" /> by Caleb.dev
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
