import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Instagram, Mail, Phone } from "lucide-react"
import { Playfair_Display } from "next/font/google"
import { cn } from "@/lib/utils"
import ContactForm from "@/components/contact-form"
import TestimonialCarousel from "@/components/testimonial-carousel"
import PortfolioGrid from "@/components/portfolio-grid"
import ServiceCard from "@/components/service-card"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF8F8]">
      {/* Hero Section */}
      <section className="relative px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <h1
                className={cn(
                  "text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] leading-tight",
                  playfair.className,
                )}
              >
                Hi, I'm Sonia <span className="text-[#D8A1A1]">—</span>
              </h1>
              <p className="text-lg text-[#555555] max-w-xl">
                A creative social media strategist, content writer, and digital strategy enthusiast. I help brands tell
                beautiful content that feels real, intentional, and irresistible to social users.
              </p>
              <Button className="rounded-full px-8 py-6 bg-[#D8A1A1] hover:bg-[#C48E8E] text-white">Contact Me</Button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Sonia U."
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="px-4 py-16 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className={cn("text-3xl md:text-4xl font-bold text-center mb-12", playfair.className)}>About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Sonia U."
                width={500}
                height={500}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <p className="text-[#555555]">
                I'm a specialist in travel, luxury, beauty, and strategy to help brands connect with their audience in
                meaningful ways. I believe in creating content that resonates with people on a personal level, making
                your brand feel like a trusted friend.
              </p>
              <p className="text-[#555555]">
                From fashion and skincare brands to the academic space, I've led creative direction, created brand
                voices, and developed campaigns that don't just follow trends—they set them. I'm passionate about
                finding the unique story behind each brand and telling that story in a way that grabs the viewer and
                creates content that feels real, emotional, and beautiful.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-[#F9E6E6] text-[#D8A1A1] rounded-full text-sm">Content Strategy</span>
                <span className="px-4 py-2 bg-[#F9E6E6] text-[#D8A1A1] rounded-full text-sm">Social Media</span>
                <span className="px-4 py-2 bg-[#F9E6E6] text-[#D8A1A1] rounded-full text-sm">Brand Voice</span>
                <span className="px-4 py-2 bg-[#F9E6E6] text-[#D8A1A1] rounded-full text-sm">Creative Direction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-16 bg-[#FFF8F8]">
        <div className="container mx-auto max-w-6xl">
          <h2 className={cn("text-3xl md:text-4xl font-bold text-center mb-4", playfair.className)}>My Services</h2>
          <p className="text-center text-[#555555] mb-12 max-w-2xl mx-auto">
            I offer a range of services to help your brand connect with your audience and stand out in your digital
            landscape.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Content Strategy"
              description="Strategic planning for content that aligns with your brand goals and resonates with your audience."
            />
            <ServiceCard
              title="Social Media Management"
              description="Full-service management of your social media presence, including content creation, scheduling, and analytics."
            />
            <ServiceCard
              title="Brand Voice Development"
              description="Creating a consistent and authentic voice that reflects your brand's personality and values."
            />
            <ServiceCard
              title="Creative Direction"
              description="Visual and conceptual guidance for your brand's content to ensure cohesive and impactful storytelling."
            />
            <ServiceCard
              title="Content Creation"
              description="High-quality, engaging content tailored to your brand and audience across various platforms."
            />
            <ServiceCard
              title="Campaign Planning"
              description="Strategic campaign development to achieve specific goals and maximize engagement."
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="px-4 py-16 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className={cn("text-3xl md:text-4xl font-bold text-center mb-4", playfair.className)}>My Portfolio</h2>
          <p className="text-center text-[#555555] mb-8 max-w-2xl mx-auto">
            Browse through some of my best work and see the impact of good storytelling.
          </p>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex justify-center mb-8 bg-transparent">
              <TabsTrigger value="all" className="data-[state=active]:bg-[#F9E6E6] data-[state=active]:text-[#D8A1A1]">
                All
              </TabsTrigger>
              <TabsTrigger
                value="event"
                className="data-[state=active]:bg-[#F9E6E6] data-[state=active]:text-[#D8A1A1]"
              >
                Event Coverage
              </TabsTrigger>
              <TabsTrigger value="food" className="data-[state=active]:bg-[#F9E6E6] data-[state=active]:text-[#D8A1A1]">
                Food Restaurant
              </TabsTrigger>
              <TabsTrigger
                value="fashion"
                className="data-[state=active]:bg-[#F9E6E6] data-[state=active]:text-[#D8A1A1]"
              >
                Fashion
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <PortfolioGrid />
            </TabsContent>
            <TabsContent value="event">
              <PortfolioGrid category="event" />
            </TabsContent>
            <TabsContent value="food">
              <PortfolioGrid category="food" />
            </TabsContent>
            <TabsContent value="fashion">
              <PortfolioGrid category="fashion" />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-16 bg-[#F9E6E6]">
        <div className="container mx-auto max-w-6xl">
          <h2 className={cn("text-3xl md:text-4xl font-bold text-center mb-4", playfair.className)}>
            Client Testimonials
          </h2>
          <p className="text-center text-[#555555] mb-12 max-w-2xl mx-auto">
            Don't just take my word for it — here's what my clients have to say about working with me.
          </p>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Coming Soon / Blog Section */}
      <section className="px-4 py-16 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-6">
            <Instagram className="w-8 h-8 text-[#D8A1A1] mx-auto" />
          </div>
          <h2 className={cn("text-3xl md:text-4xl font-bold mb-4", playfair.className)}>Coming Soon</h2>
          <p className="text-[#555555] mb-4 max-w-2xl mx-auto">
            My blog section is coming soon! Subscribe to be the first to see insights, articles, and updates.
          </p>
        </div>
      </section>

      {/* Behind the Scenes / Gallery */}
      <section className="px-4 py-16 bg-[#FFF8F8]">
        <div className="container mx-auto max-w-6xl">
          <h2 className={cn("text-3xl md:text-4xl font-bold text-center mb-4", playfair.className)}>
            Behind the Scenes
          </h2>
          <p className="text-center text-[#555555] mb-12 max-w-2xl mx-auto">
            A glimpse into my creative process and the magic that happens before the final content goes live.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Gallery+${item}`}
                  alt={`Gallery image ${item}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              className="rounded-full px-6 border-[#D8A1A1] text-[#D8A1A1] hover:bg-[#F9E6E6] hover:text-[#D8A1A1]"
            >
              Follow on Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className={cn("text-3xl md:text-4xl font-bold text-center mb-4", playfair.className)}>Get In Touch</h2>
          <p className="text-center text-[#555555] mb-12 max-w-2xl mx-auto">
            Ready to take your social media presence to the next level? I'd love to hear from you!
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3 bg-[#F9E6E6] p-6 rounded-lg">
              <h3 className={cn("text-xl font-bold mb-6", playfair.className)}>Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#D8A1A1]" />
                  <span className="text-[#555555]">soniaufedo1999@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#D8A1A1]" />
                  <span className="text-[#555555]">+1 (234) 567-8910</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
