"use client";

import { useState } from "react";
import "/app/globals.css";
import Head from "next/head";

const AboutUs = () => {
  const [imageCount] = useState(6); // Total number of images

  return (
    <>
      <Head>
        <title>About Us | Your Company Name</title>
        <meta
          name="description"
          content="Learn more about our company, mission, values, and vision."
        />
        <meta
          name="keywords"
          content="about us, company information, mission, vision, values"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us | Your Company Name" />
        <meta
          property="og:description"
          content="Learn more about our company, mission, values, and vision."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="about-us-container">
        <div className="images-container">
          {Array.from({ length: imageCount }).map((_, index) => (
            <img
              key={index}
              src={`/about_page-${(index + 1).toString().padStart(4, "0")}.jpg`}
              alt={`About Page ${index + 1}`}
              className="about-image"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
