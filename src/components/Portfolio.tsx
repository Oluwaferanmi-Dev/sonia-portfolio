"use client"

// src/components/Portfolio.tsx
import type React from "react"
import { useState } from "react"
import PortfolioItem from "./PortfolioItem"
import type { LocalPortfolioItem } from "../types"

// Import placeholder image for now
import profileImage from "../assets/sonia-profile.png"

const Portfolio: React.FC = () => {
  // Local portfolio items with local file paths
  const portfolioItems: LocalPortfolioItem[] = [
    {
      id: "1",
      title: "Social Media Campaign",
      brand: "Beauty Brand",
      category: "Skincare",
      description: "Created a full social media campaign for a new skincare line launch.",
      results: "Increased engagement by 45% and gained 2,000+ new followers.",
      media: [
        { type: "image", url: profileImage }, // Using profile image as placeholder
      ],
    },
    {
      id: "2",
      title: "Content Creation",
      brand: "Fashion Label",
      category: "Fashion",
      description: "Produced a series of Instagram reels showcasing seasonal collection.",
      results: "Videos reached over 50,000 views collectively.",
      media: [
        { type: "image", url: profileImage }, // Using profile image as placeholder
      ],
    },
    {
      id: "3",
      title: "Brand Strategy",
      brand: "Wellness Company",
      category: "Wellness",
      description: "Developed content strategy and visual identity for wellness brand.",
      results: "Established consistent brand voice across platforms.",
      media: [
        { type: "image", url: profileImage }, // Using profile image as placeholder
      ],
    },
    {
      id: "4",
      title: "Academic Promotion",
      brand: "University",
      category: "Academic",
      description: "Created promotional content for university programs.",
      results: "Increased application inquiries by 30%.",
      media: [
        { type: "image", url: profileImage }, // Using profile image as placeholder
      ],
    },
    {
      id: "5",
      title: "Tech Product Launch",
      brand: "Tech Startup",
      category: "Technology",
      description: "Managed social media launch for new tech product.",
      results: "Achieved 25,000+ impressions on launch day.",
      media: [
        { type: "image", url: profileImage }, // Using profile image as placeholder
      ],
    },
  ]

  const [activeCategory, setActiveCategory] = useState("All")

  // Extract unique categories from portfolio items
  const categories = ["All", ...Array.from(new Set(portfolioItems.map((item) => item.category)))]

  const filteredItems =
    activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-800 mb-3">
            My <span className="text-primary-700">Portfolio</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Browse projects by category and see the impact of each campaign.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary-700 text-white"
                  : "bg-primary-100 text-gray-700 hover:bg-primary-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {filteredItems.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
