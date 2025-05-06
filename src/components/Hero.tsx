import type React from "react"
import { ChevronDown } from "lucide-react"
import heroImage from "../assets/sonia-profile.png"

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-primary-100 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 animate-fade-in">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-dark-500 mb-4">
              Hi, I'm <span className="text-primary-700">Sonia</span> —
            </h1>
            <p className="text-lg md:text-xl text-dark-400 mb-6 leading-relaxed">
              a creative storyteller blending visuals, words, and digital strategy to help brands shine online. Let's
              make content that feels real, intentional, and impossible to scroll past.
            </p>
            <a
              href="#portfolio"
              className="inline-block px-6 py-3 bg-primary-700 text-white rounded-full hover:bg-primary-800 transition-colors"
            >
              Explore My Work
            </a>
          </div>

          <div className="w-full md:w-1/2 flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img src={heroImage} alt="Sonia U." className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-champagne-400 rounded-full flex items-center justify-center shadow-md">
                <p className="font-serif text-dark-500 text-sm font-medium">Social Media Expert</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <a href="#about" className="animate-bounce">
            <ChevronDown size={32} className="text-primary-700" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
