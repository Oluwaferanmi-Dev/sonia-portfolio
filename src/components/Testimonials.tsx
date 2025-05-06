"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import type { SanityTestimonial } from "../types"
import { client, urlFor } from "../lib/sanity"

const staticTestimonials: SanityTestimonial[] = [
  {
    _id: "1",
    name: "Cinnamon",
    quote: "Thank you so much! I'm really happy with everything.",
    role: "",
    image: "", // You can add a placeholder image URL if needed
  },
  {
    _id: "2",
    name: "Blooming Tales",
    quote: "This is so perfect\nI really like it.",
    role: "",
    image: "",
  },
  {
    _id: "3",
    name: "Sinmi.ojo",
    quote: "Omg, Love it",
    role: "",
    image: "",
  },
  {
    _id: "4",
    name: "Kiki Osibanjo",
    quote: "Aaaaaaw. I love the song ,I loveeee itttt",
    role: "",
    image: "",
  },
  {
    _id: "5",
    name: "Ciar",
    quote: "I LOVE EEEETTTT, Thank youuu\nOooooopppssss",
    role: "",
    image: "",
  },
  {
    _id: "6",
    name: "Diamond Taste",
    quote: "Video and pictures altogether are above my expectation\nSuper happy with your work",
    role: "",
    image: "",
  },
  {
    _id: "7",
    name: "House 43",
    quote: "The video is quite nice... well done\nYou did a great job",
    role: "",
    image: "",
  },
  {
    _id: "8",
    name: "KA CLOTHING",
    quote: "Weldone Sonia I'm impressed by the level of innovation you are bringing to the brand.",
    role: "",
    image: "",
  },
]

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<SanityTestimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await client.fetch('*[_type == "testimonial"]')
        setTestimonials(data.length ? data : staticTestimonials)
      } catch (error) {
        console.error("Error fetching testimonials:", error)
        setTestimonials(staticTestimonials)
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  if (loading) {
    return (
      <section id="testimonials" className="py-16 md:py-24 bg-primary-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">Loading testimonials...</div>
        </div>
      </section>
    )
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-primary-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-dark-500 mb-3">
            Client <span className="text-primary-700">Testimonials</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            Don't just take my word for it — here's what my clients have to say about working with me.
          </p>
        </div>


        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial._id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-md p-8 md:p-10 animate-fade-in">
                    <div className="flex items-start mb-6">
                      <div className="mr-4">
                        <Quote className="text-primary-700" size={32} />
                      </div>
                      <p className="text-dark-500 text-lg italic leading-relaxed whitespace-pre-line">
                      <p className="text-dark-500 text-lg italic leading-relaxed whitespace-pre-line">
                        {testimonial.quote}
                      </p>
                    </div>


                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-200">
                        {testimonial.image ? (
                          <img
                            src={urlFor(testimonial.image).width(200).height(200).url()}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-dark-400 text-sm">
                            No Image
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-serif text-lg font-medium text-dark-500">{testimonial.name}</h4>
                        <p className="text-primary-700">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary-700" : "bg-primary-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button

          <button
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-dark-500 hover:bg-primary-100 transition-colors"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button

          <button
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-dark-500 hover:bg-primary-100 transition-colors"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
