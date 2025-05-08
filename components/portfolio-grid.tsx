import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })

interface PortfolioItemProps {
  title: string
  category: string
  imageUrl: string
  description: string
}

const portfolioItems: PortfolioItemProps[] = [
  {
    title: "Saffron Cafe",
    category: "event",
    imageUrl: "/placeholder.svg?height=400&width=600",
    description: "Comprehensive coverage and content creation for Saffron Cafe.",
  },
  {
    title: "Philomant Conference",
    category: "event",
    imageUrl: "/placeholder.svg?height=400&width=600",
    description: "Full social media coverage for philomant university conference.",
  },
  {
    title: "Confectionary Shop Launch",
    category: "food",
    imageUrl: "/placeholder.svg?height=400&width=600",
    description: "Social media campaign for a new bakery called Cinnamona.",
  },
  {
    title: "Seasonal Menu Photography",
    category: "food",
    imageUrl: "/placeholder.svg?height=400&width=600",
    description: "Food photography and content creation for a seasonal menu launch.",
  },
  {
    title: "Summer Collection",
    category: "fashion",
    imageUrl: "/placeholder.svg?height=400&width=600",
    description: "Campaign for a designer's summer collection launch.",
  },
  {
    title: "Streetwear Brand",
    category: "fashion",
    imageUrl: "/placeholder.svg?height=400&width=600",
    description: "Social media strategy and content for an urban fashion brand.",
  },
]

interface PortfolioGridProps {
  category?: string
}

export default function PortfolioGrid({ category }: PortfolioGridProps) {
  const filteredItems =
    category && category !== "all" ? portfolioItems.filter((item) => item.category === category) : portfolioItems

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {filteredItems.map((item, index) => (
        <div
          key={index}
          className="group bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-[#F9E6E6]"
        >
          <div className="overflow-hidden">
            <Image
              src={item.imageUrl || "/placeholder.svg"}
              alt={item.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-5 transition-all duration-300 group-hover:bg-[#FFFAFA]">
            <h3
              className={cn(
                "text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#D8A1A1]",
                playfair.className,
              )}
            >
              {item.title}
            </h3>
            <p className="text-[#555555] mb-3">{item.description}</p>
            <Link
              href="#"
              className="text-[#D8A1A1] hover:text-[#C48E8E] font-medium inline-flex items-center transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#C48E8E] after:transition-all after:duration-300 group-hover:after:w-full"
            >
              View Project
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
