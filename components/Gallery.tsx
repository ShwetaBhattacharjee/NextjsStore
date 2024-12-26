"use client";

import Image from "next/image";
import React, { useState, useMemo } from "react";

interface GalleryProps {
  productMedia: string[];
  productName: string;
}

const Gallery: React.FC<GalleryProps> = ({ productMedia, productName }) => {
  const [mainImage, setMainImage] = useState<string>(productMedia[0]);

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = "/logo.png"; // Fallback image
  };

  const imageThumbnails = useMemo(
    () =>
      productMedia.map((image, index) => (
        <a
          key={index}
          href="#"
          rel="nofollow"
          onClick={(e) => e.preventDefault()} // Prevent default link action
        >
          <Image
            src={image}
            height={200}
            width={200}
            alt={`Thumbnail of ${productName} image ${index + 1}`}
            className={`w-20 h-20 rounded-lg object-cover cursor-pointer ${
              mainImage === image ? "border-2 border-black" : ""
            }`}
            onClick={() => setMainImage(image)}
            onError={handleImageError}
            loading="lazy"
            aria-label={`Select ${productName} image ${index + 1}`}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setMainImage(image);
              }
            }}
          />
        </a>
      )),
    [productMedia, mainImage, productName]
  );

  return (
    <div
      className="flex flex-col gap-3 max-w-full sm:max-w-[500px]"
      role="region"
      aria-labelledby="product-gallery"
    >
      <h2 id="product-gallery" className="sr-only">
        {productName} Image Gallery
      </h2>
      <Image
        src={mainImage}
        width={500}
        height={500}
        alt={`Main ${productName} image`}
        className="w-full sm:w-96 h-auto rounded-lg shadow-xl object-cover"
        loading="lazy"
        onError={handleImageError}
      />
      <div className="flex gap-2 overflow-x-scroll scrollbar-hide">
        {imageThumbnails}
      </div>
    </div>
  );
};

export default Gallery;
