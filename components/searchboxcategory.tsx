"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

const SearchBoxCategory = () => {
  const router = useRouter();

  // State for dropdown selections
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState(""); // Changed to price

  // Sample product data
  const products = [
    {
      make: "Power StopR",
      model: "Evolution Drilled and Slotted",
      price: "$154.89",
    },
    {
      make: "R1 Concepts®",
      model: "eLINE Series Plain Brake Rotors",
      price: "$187.6",
    },
    {
      make: "Right Stuff®",
      model: "Drilled and Slotted Brake Rotor",
      price: "$157.99",
    },
    {
      make: "Technaxx",
      model: "Car Alarm with Charging Function",
      price: "$47.99",
    },
    {
      make: "Thinkware",
      model: "F770 Dash Cam Dual Channel Wifi",
      price: "$249",
    },
  ];

  // Get unique makes and prices from the product data
  const uniqueMakes = Array.from(
    new Set(products.map((product) => product.make))
  );
  const uniquePrices = Array.from(
    new Set(products.map((product) => product.price))
  );

  // Handle the search action by constructing the search URL and redirecting
  const handleSearch = () => {
    let searchParams = `/search`;

    if (make) searchParams += `/${encodeURIComponent(make)}`;
    if (model) searchParams += `/${encodeURIComponent(model)}`;
    if (price) searchParams += `/${encodeURIComponent(price)}`;

    // Redirect to the search page with query parameters
    router.push(searchParams);
  };

  return (
    <>
      <Head>
        {/* Add noindex, nofollow for SEO */}
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div
        className="relative flex flex-col items-center bg-[#05568C] text-white p-4 sm:p-6 rounded-md shadow-lg"
        style={{
          marginTop: "-70px", // Overlap the banner slightly
          left: "50%", // Center horizontally
          transform: "translateX(-50%)", // Center horizontally
          maxWidth: "100%", // Compact for mobile devices
          zIndex: 10,
          width: "70%",
          position: "absolute",
        }}
      >
        {/* Title and Description */}
        <h2 className="text-xs sm:text-sm font-bold mb-2 text-center">
          Find the Right Parts Faster
        </h2>
        <p className="text-xs sm:text-sm text-center mb-4">
          Having the right automotive parts and car accessories will help you to
          boost your travel comfort and go on the long-distance journey
          comfortably that you have been planning.
        </p>

        {/* Dropdowns for make, model, and price */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-2/3 gap-3 mb-4">
          {/* Make Dropdown */}
          <select
            className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-white bg-transparent text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white text-xs sm:text-sm"
            value={make}
            onChange={(e) => setMake(e.target.value)}
          >
            <option value="" className="text-white">
              Select Make
            </option>
            {uniqueMakes.map((makeOption, index) => (
              <option key={index} value={makeOption} className="text-black">
                {makeOption}
              </option>
            ))}
          </select>

          {/* Model Dropdown (Filtered by selected make) */}
          <select
            className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-white bg-transparent text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white text-xs sm:text-sm"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          >
            <option value="" className="text-white">
              Select Model
            </option>
            {products
              .filter((product) => product.make === make) // Filter models based on selected make
              .map((product, index) => (
                <option
                  key={index}
                  value={product.model}
                  className="text-black"
                >
                  {product.model}
                </option>
              ))}
          </select>

          {/* Price Dropdown */}
          <select
            className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-white bg-transparent text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white text-xs sm:text-sm"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="" className="text-white">
              Select Price
            </option>
            {uniquePrices.map((priceOption, index) => (
              <option key={index} value={priceOption} className="text-black">
                {priceOption}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="w-half px-2 sm:px-3 py-1 sm:py-2 border  border-white text-white rounded-md bg-transparent hover:bg-white hover:text-[#05568C] transition text-xs sm:text-sm"
        >
          Find Auto Parts
        </button>

        {/* Additional Text */}
        <p className="text-xs sm:text-sm mt-4 text-center">
          Please fill in the criteria you are looking for
        </p>
      </div>
    </>
  );
};

export default SearchBoxCategory;
