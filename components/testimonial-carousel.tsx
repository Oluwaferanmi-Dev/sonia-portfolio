"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface TestimonialProps {
  quote: string
  name: string
  role: string
  avatarUrl?: string
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Thank you so much for the help! Really happy with everything.",
    name: "Cinnamon",
    role: "Food",
    avatarUrl: "/placeholder.svg?height=50&width=50",
  },
  {
    quote:
      "The video is quite nice...well done you did a great job.",
    name: "HOUSE 43",
    role: "Fashion Brand",
    avatarUrl: "/placeholder.svg?height=50&width=50",
  },
  {
    quote:
      "The content strategy Sonia developed for us has been a game-changer. She truly understands our brand voice.Thank you Sonia for all these. You delivered exceptionally well I appreciate it Love the videos",
    name: "KA CLOTHING",
    role: "Beauty Startup",
    avatarUrl: "/placeholder.svg?height=50&width=50",
  },
  {
    quote: "I LOVE EEEETTTT,Thank youuu Oooooopppssss🔥🔥🔥🔥😍😍.",
    name: "Ciar",
    role: "Lifestyle Blog",
    avatarUrl: "/placeholder.svg?height=50&width=50",
  },
  {
    quote: "Thank you so much Sonia i truly appreciate your work I really love them Video and pictures altogether are above my expectation Super happy with your work",
    name: "Diamond Taste",
    role: "Lifestyle Blog",
    avatarUrl: "/placeholder.svg?height=50&width=50",
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-3xl mx-auto">
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full border-[#D8A1A1] text-[#D8A1A1] hover:bg-[#F9E6E6] hover:text-[#D8A1A1]"
        onClick={prevTestimonial}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Card className="border-none shadow-sm bg-white">
        <CardContent className="p-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#D8A1A1]"
              >
                <path d="M10 11L8 17H5L7 11V7H10V11ZM18 11L16 17H13L15 11V7H18V11Z" fill="currentColor" />
              </svg>
            </div>
            <p className="text-lg text-[#555555] mb-6">{testimonials[activeIndex].quote}</p>
            <Avatar className="h-12 w-12 border-2 border-[#F9E6E6]">
              <AvatarImage
                src={testimonials[activeIndex].avatarUrl || "/placeholder.svg"}
                alt={testimonials[activeIndex].name}
              />
              <AvatarFallback>{testimonials[activeIndex].name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="mt-4">
              <p className="font-semibold">{testimonials[activeIndex].name}</p>
              <p className="text-sm text-[#777777]">{testimonials[activeIndex].role}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full border-[#D8A1A1] text-[#D8A1A1] hover:bg-[#F9E6E6] hover:text-[#D8A1A1]"
        onClick={nextTestimonial}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="flex justify-center gap-1 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === activeIndex ? "bg-[#D8A1A1]" : "bg-[#F9E6E6]"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
