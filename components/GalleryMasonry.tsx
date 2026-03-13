"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

interface GalleryMasonryProps {
  headline: string;
  subheadline?: string;
  images: GalleryImage[];
}

export default function GalleryMasonry({
  headline = "Event Highlights Gallery",
  subheadline = "Relive the energy, speakers, networking moments, and crowd excitement.",
  images = [],
}: Partial<GalleryMasonryProps>) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
          {images.map(function (img, i) {
            return (
              <div
                key={i}
                className="group card-hover relative cursor-pointer overflow-hidden rounded-xl break-inside-avoid"
                onClick={function () {
                  setSelectedImage(img);
                }}
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  width={900}
                  height={1200}
                  unoptimized
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-all duration-300 group-hover:bg-foreground/30" />
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                    <p className="text-sm text-primary-foreground">{img.caption}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
            onClick={function () {
              setSelectedImage(null);
            }}
          >
            <Image
              src={selectedImage.url}
              alt={selectedImage.alt}
              width={1400}
              height={1000}
              unoptimized
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}
