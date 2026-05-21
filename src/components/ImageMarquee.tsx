import React from "react";
// import { images } from "../data/galleryItems";
// import { GalleryItem } from '../../interfaces';

interface MarqueeImage {
  id: string | number;
  src: string;
  alt: string;
}

interface ImageMarqueeProps {
  images: MarqueeImage[];
  speed?: "slow" | "medium" | "fast";
  pauseOnHover?: boolean;
}

export const ImageMarquee: React.FC<ImageMarqueeProps> = ({
  images,
  speed = "slow",
  pauseOnHover = true,
}) => {
  // Map friendly speed props to tailwind animation duration overrides if desired,
  // or stick to the default 40s config.
  const speedClasses = {
    slow: "[animation-duration:120s]",
    medium: "[animation-duration:50s]",
    fast: "[animation-duration:15s]",
  };

  // Prevent rendering issues if the array is empty
  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full overflow-hidden bg-neutral-900 py-6 sm:py-10">
      {/* Optional: Gradient overlays to fade edges nicely */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-neutral-900 to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-neutral-900 to-transparent sm:w-32" />

      {/* Marquee Container */}
      <div className="flex w-max">
        <div
          className={`
            flex shrink-0 gap-4 px-2 sm:gap-6 sm:px-3
            animate-marquee ${speedClasses[speed]}
            ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}
          `}
        >
          {/* First track of images */}
          {images.map((image, index) => (
            <div
              key={`track1-${image.id}-${index}`}
              className="h-32 w-48 overflow-hidden rounded-xl bg-neutral-800 shadow-md transition-transform duration-300 hover:scale-105 sm:h-48 sm:w-72 md:h-56 md:w-80"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover select-none"
                draggable="false"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Duplicate track to create the seamless looping illusion */}
        <div
          aria-hidden="true"
          className={`
            flex shrink-0 gap-4 px-2 sm:gap-6 sm:px-3
            animate-marquee ${speedClasses[speed]}
            ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}
          `}
        >
          {images.map((image, index) => (
            <div
              key={`track2-${image.id}-${index}`}
              className="h-32 w-48 overflow-hidden rounded-xl bg-neutral-800 shadow-md transition-transform duration-300 hover:scale-105 sm:h-48 sm:w-72 md:h-56 md:w-80"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover select-none"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
