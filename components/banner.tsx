"use client";

import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";

interface AutoSliderProps {
  products: ProductType[];
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const AutoSlider = ({ products, updateSignedInUser }: AutoSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = products.length;

  // Auto-scroll effect
  useEffect(() => {
    const slider = sliderRef.current;

    let scrollAmount = 0;
    const slideSpeed = 1; // Speed: 1 = slow, higher = faster

    const startSlider = () => {
      if (slider) {
        scrollAmount += slideSpeed;
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0; // Reset for infinite loop
        }
        slider.scrollLeft = scrollAmount;

        // Update active dot
        const index = Math.round(
          scrollAmount / (slider.scrollWidth / totalSlides)
        );
        setCurrentIndex(index % totalSlides);

        requestAnimationFrame(startSlider);
      }
    };

    startSlider();
  }, [totalSlides]);

  return (
    <section className="relative w-full" aria-label="Product Carousel">
      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="flex gap-6 w-max overflow-hidden"
        style={{ whiteSpace: "nowrap" }}
      >
        {/* Duplicate products for infinite effect */}
        {products.concat(products).map((product, index) => (
          <div key={index} className="inline-block">
            <ProductCard
              product={product}
              updateSignedInUser={updateSignedInUser}
              linkProps={{ rel: "nofollow" }} // Pass additional props to ProductCard
            />
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <nav
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 mt-4"
        aria-label="Slider Navigation"
      >
        {products.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-300"
            } transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)} // Optional manual navigation
          ></button>
        ))}
      </nav>
    </section>
  );
};

export default AutoSlider;
