import Image from "next/image";
import { cn } from "@/lib/utils";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface PortfolioItemProps {
  title: string;
  category: string;
  imageUrl?: string;
  videoUrl?: string;
  description: string;
}

const portfolioItems: PortfolioItemProps[] = [
  {
    title: "Native Wears Fashion",
    category: "fashion",
    videoUrl: "/portfolioitems/fashion/fashion-vid-one.mp4",
    description: "Highlighting the latest trends in native attire fashion.",
  },
  {
    title: "Artisan Pastry Showcase",
    category: "food",
    imageUrl: "/portfolioitems/food/food-img-two.jpg",
    description: "Highlighting the craftsmanship of Cinnamona's pastry chefs.",
  },
  {
    title: "Streetwear Trends Lookbook",
    category: "fashion",
    videoUrl: "/portfolioitems/fashion/fashion-vid-four.mp4",
    description: "A curated showcase of the latest streetwear trends.",
  },
  {
    title: "Philomant Conference",
    category: "event",
    videoUrl: "/portfolioitems/events/eventplanning/event-vid-one.mp4",
    description:
      "Full social media coverage for philomant university conference.",
  },
  {
    title: "Elegant Dinner Table Setting",
    category: "food",
    imageUrl: "/portfolioitems/food/food-img-three.jpg",
    description:
      "A showcase of refined table arrangements for a gourmet experience.",
  },
  {
    title: "Essential Streetwear Pieces",
    category: "fashion",
    videoUrl: "/portfolioitems/fashion/fashion-vid-two.mp4",
    description: "A collection of versatile and stylish streetwear essentials.",
  },
  {
    title: "The Sweet Symphony",
    category: "food",
    videoUrl: "/portfolioitems/food/food-vid-two.mp4",
    description: "A cinematic experience of Cinnamona's dessert creations.",
  },
  {
    title: "Confectionary Shop Launch",
    category: "food",
    imageUrl: "/portfolioitems/food/food-img-one.jpg",
    description: "Social media campaign for a new bakery called Cinnamona.",
  },
  {
    title: "Future of Urban Fashion",
    category: "fashion",
    videoUrl: "/portfolioitems/fashion/fashion-vid-six.mp4",
    description:
      "Innovative designs shaping the next generation of streetwear.",
  },
  {
    title: "Saffron Cafe",
    category: "event",
    videoUrl: "/portfolioitems/events/cafe/cafe-one-vid.mp4",
    description:
      "Comprehensive coverage and content creation for Saffron Cafe.",
  },
  {
    title: "Edgy Urban Styles",
    category: "fashion",
    videoUrl: "/portfolioitems/fashion/fashion-vid-three.mp4",
    description: "Exploring bold and innovative designs in urban fashion.",
  },
  {
    title: "Gourmet Dessert Collection",
    category: "food",
    imageUrl: "/portfolioitems/food/food-img-six.jpg",
    description: "A visual journey through Cinnamona's signature desserts.",
  },
  {
    title: "Seasonal Treats Campaign",
    category: "food",
    imageUrl: "/portfolioitems/food/food-img-four.jpg",
    description: "Promoting Cinnamona's limited-edition seasonal offerings.",
  },
  {
    title: "Baking Masterclass Highlights",
    category: "food",
    imageUrl: "/portfolioitems/food/food-img-five.jpg",
    description: "Capturing moments from Cinnamona's exclusive baking classes.",
  },
  {
    title: "Streetwear Brand",
    category: "fashion",
    videoUrl: "/portfolioitems/fashion/fashion-vid-five.mp4",
    description:
      "Social media strategy and content for an urban fashion brand.",
  },
  {
    title: "Summer Collection",
    category: "fashion",
    imageUrl: "/portfolioitems/fashion/fashion-img-two.jpg",
    description: "Campaign for a designer's summer collection launch.",
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
              <video
                src={item.videoUrl}
                controls
                loop
                className="w-full h-64 object-cover outline-none border-none"
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
