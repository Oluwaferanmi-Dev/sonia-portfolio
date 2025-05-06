"use client"

import type React from "react"
import { useState } from "react"
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react"

interface GalleryImage {
  id: number
  src: string
  alt: string
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/3059398/pexels-photo-3059398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Fashion photoshoot behind the scenes",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/4065624/pexels-photo-4065624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Social media content creation",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Instagram story preparation",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Content planning meeting",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/4005335/pexels-photo-4005335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Product photography setup",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Skincare product flatlay",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Social media content creation workspace",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/3584930/pexels-photo-3584930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Behind the scenes photoshoot",
  },
]

const Gallery: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<GalleryImage | null>(null)

  const openLightbox = (image: GalleryImage) => {
    setCurrentImage(image)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setCurrentImage(null)
    document.body.style.overflow = "auto"
  }

  const nextImage = () => {
    if (!currentImage) return
    const currentIndex = galleryImages.findIndex((img) => img.id === currentImage.id)
    const nextIndex = (currentIndex + 1) % galleryImages.length
    setCurrentImage(galleryImages[nextIndex])
  }

  const prevImage = () => {
    if (!currentImage) return
    const currentIndex = galleryImages.findIndex((img) => img.id === currentImage.id)
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
    setCurrentImage(galleryImages[prevIndex])
  }

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-dark-500 mb-3">
            Behind the <span className="text-primary-700">Scenes</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            A glimpse into my creative process and the magic that happens before the final content goes live.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-slide-up">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-xl aspect-square cursor-pointer group"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark-700 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {currentImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors"
              aria-label="Close lightbox"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 text-white hover:text-primary-400 transition-colors"
              aria-label="Previous image"
            >
              <ArrowLeftCircle size={40} />
            </button>

            <img src={currentImage.src} alt={currentImage.alt} className="max-h-[80vh] max-w-[90vw] object-contain" />

            <button
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-primary-400 transition-colors"
              aria-label="Next image"
            >
              <ArrowRightCircle size={40} />
            </button>

            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="text-lg">{currentImage.alt}</p>
            </div>
          </div>
        )}

        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/chronicles_of_ufedo?igsh=dTJ4NXF5aW43emVo&utm_source=qr"
            target="_blank"
            rel="noreferrer sonia_d_creator"
            className="inline-block px-6 py-3 bg-primary-700 text-white rounded-full hover:bg-primary-800 transition-colors"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gallery
