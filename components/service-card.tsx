import { cn } from "@/lib/utils"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })

interface ServiceCardProps {
  title: string
  description: string
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className={cn("text-xl font-bold mb-3 text-[#333333]", playfair.className)}>{title}</h3>
      <p className="text-[#555555]">{description}</p>
    </div>
  )
}
