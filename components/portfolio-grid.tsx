"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Playfair_Display } from "next/font/google";
import { useState } from "react";
import { Play } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface PortfolioItemProps {
  title: string;
  category: string;
  imageUrl?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  description: string;
}

const portfolioItems: PortfolioItemProps[] = [
  {
    title: "Native Wears Fashion",
    category: "fashion",
    videoUrl: "fashion-vid-one.mp4",
    thumbnailUrl: "fashion-one-thumbnail.png",
    description: "Highlighting the latest trends in native attire fashion.",
  },
  {
    title: "Artisan Pastry Showcase",
    category: "food",
    imageUrl: "food-img-two.jpg",
    description: "Highlighting the craftsmanship of Cinnamona's pastry chefs.",
  },
  {
    title: "Signature Desserts Showcase",
    category: "food",
    imageUrl: "food-img-eleven.jpg",
    description: "A visual feast of Cinnamona's signature dessert creations.",
  },
  {
    title: "Streetwear Trends Lookbook",
    category: "fashion",
    videoUrl: "fashion-vid-four.mp4",
    thumbnailUrl: "fashion-two-thumbnail.png",
    description: "A curated showcase of the latest streetwear trends.",
  },
  {
    title: "Philomant Conference",
    category: "event",
    videoUrl: "event-one-vid.mp4",
    thumbnailUrl: "event-one-thumbnail.png",
    description:
      "Full social media coverage for philomant university conference.",
  },
  {
    title: "Elegant Dinner Table Setting",
    category: "food",
    imageUrl: "food-img-three.jpg",
    description:
      "A showcase of refined table arrangements for a gourmet experience.",
  },
  {
    title: "Essential Streetwear Pieces",
    category: "fashion",
    videoUrl: "fashion-vid-two.mp4",
    thumbnailUrl: "fashion-three-thumbnail.png",
    description: "A collection of versatile and stylish streetwear essentials.",
  },
  {
    title: "The Sweet Symphony",
    category: "food",
    videoUrl: "food-vid-two.mp4",
    thumbnailUrl: "food-one-thumbnail.png",
    description: "A cinematic experience of Cinnamona's dessert creations.",
  },
  {
    title: "Exclusive Pastry ",
    category: "food",
    imageUrl: "food-img-ten.jpg",
    description: "An exclusive event showcasing Cinnamona's finest pastries.",
  },
  {
    title: "Confectionary Shop Launch",
    category: "food",
    imageUrl: "food-img-one.jpg",
    description: "Social media campaign for a new bakery called Cinnamona.",
  },
  {
    title: "Future of Urban Fashion",
    category: "fashion",
    videoUrl: "fashion-vid-six.mp4",
    thumbnailUrl: "fashion-four-thumbnail.png",
    description:
      "Innovative designs shaping the next generation of streetwear.",
  },
  {
    title: "Artisan Bread Collection",
    category: "food",
    imageUrl: "food-img-nine.jpg",
    description:
      "Highlighting the craftsmanship behind Cinnamona's artisan breads.",
  },
  {
    title: "Saffron Cafe",
    category: "event",
    videoUrl: "cafe-one-vid.mp4",
    thumbnailUrl: "cafe-one-thumbnail.png",
    description:
      "Comprehensive coverage and content creation for Saffron Cafe.",
  },
  {
    title: "Cryschan Colours",
    category: "fashion",
    videoUrl: "fashion-vid-three.mp4",
    thumbnailUrl: "fashion-five-thumbnail.png",
    description: "Exploring bold and innovative designs in urban fashion.",
  },
  {
    title: "Gourmet Dessert Collection",
    category: "food",
    imageUrl: "food-img-six.jpg",
    description: "A visual journey through Cinnamona's signature desserts.",
  },
  {
    title: "Seasonal Treats Campaign",
    category: "food",
    imageUrl: "food-img-four.jpg",
    description: "Promoting Cinnamona's limited-edition seasonal offerings.",
  },
  {
    title: "Baking Masterclass Highlights",
    category: "food",
    imageUrl: "food-img-five.jpg",
    description: "Capturing moments from Cinnamona's exclusive baking classes.",
  },
  {
    title: "Streetwear Brand",
    category: "fashion",
    videoUrl: "fashion-vid-five.mp4",
    thumbnailUrl: "fashion-six-thumbnail.png",
    description:
      "Social media strategy and content for an urban fashion brand.",
  },
  {
    title: "Summer Collection",
    category: "fashion",
    imageUrl: "fashion-img-two.jpg",
    description: "Campaign for a designer's summer collection launch.",
  },
  {
    title: "Culinary Delights Unveiled",
    category: "food",
    imageUrl: "food-img-eight.jpg",
    description:
      "A celebration of exquisite flavors at Cinnamona's grand opening.",
  },
];

interface PortfolioGridProps {
  category?: string;
}

export default function PortfolioGrid({ category }: PortfolioGridProps) {
  const filteredItems =
    category && category !== "all"
      ? portfolioItems.filter((item) => item.category === category)
      : portfolioItems;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {filteredItems.map((item, index) => (
        <div
          key={index}
          className="group bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-[#F9E6E6]"
        >
          <div className="overflow-hidden">
            {item.videoUrl ? (
              <VideoWithThumbnail
                videoUrl={item.videoUrl}
                thumbnailUrl={item.thumbnailUrl || "/placeholder.svg"}
                title={item.title}
              />
            ) : (
              <Image
                src={item.imageUrl || "/placeholder.svg"}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
          </div>
          <div className="p-5 transition-all duration-300 group-hover:bg-[#FFFAFA]">
            <h3
              id={`video-title-${index}`}
              className={cn(
                "text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#D8A1A1]",
                playfair.className
              )}
            >
              {item.title}
            </h3>
            <p className="text-[#555555] mb-3">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

interface VideoWithThumbnailProps {
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
}

function VideoWithThumbnail({
  videoUrl,
  thumbnailUrl,
  title,
}: VideoWithThumbnailProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full h-64">
      {!isPlaying ? (
        <div
          className="relative w-full h-full cursor-pointer"
          onClick={handlePlay}
        >
          <Image
            src={thumbnailUrl || "/placeholder.svg"}
            alt={`${title} thumbnail`}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300 hover:bg-opacity-20">
            <div className="rounded-full bg-white bg-opacity-80 p-4 shadow-lg transition-transform duration-300 hover:scale-110">
              <Play className="h-8 w-8 text-[#D8A1A1]" />
            </div>
          </div>
        </div>
      ) : (
        <video
          src={videoUrl}
          controls
          loop
          className="w-full h-64 object-cover outline-none border-none"
        />
      )}
    </div>
  );
}
