import Head from "next/head";
import Collections from "@/components/Collections";
import Footer from "@/components/Footer";
import Onsales from "@/components/onsales";
import OnsaleSecond from "@/components/onsalesecond";
import ProductList from "@/components/ProductList";
import SearchBoxCategory from "@/components/searchboxcategory";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        {/* Add noindex, nofollow for SEO */}
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* Centered Content - Text Above Image */}
      <div className="relative">
        {/* Banner Image */}
        <Image
          src="/banner.png"
          alt="banner"
          width={1800}
          height={400}
          className="w-screen h-[400px] object-cover"
        />

        {/* Text Centered Above Banner */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <button className="bg-[#05568C] text-white px-6 py-3 rounded-full text-sm mb-4 hover:bg-[#04466D] transition">
            Unleash the Power of Your Ride
          </button>
          <div className="text-20xl">
            {/* Make the text very big */}
            <p className="text-white  text-lg sm:text-xl max-w-xl font-bold ">
              Find the Perfect Fit for Your Vehicle
            </p>
          </div>

          <h2 className=" text-white text-18xl sm:text-9xl  leading-tight mb-3">
            Explore a vast selection of high-quality car parts, accessories, and
            upgrades for every make and model.
          </h2>
        </div>
      </div>

      {/* Add padding-bottom to accommodate the absolute search bar */}
      <div className="relative pb-42">
        <SearchBoxCategory />
      </div>

      {/* Add extra margin-top for Collections */}
      <div className="mt-20">
        <Collections />
      </div>

      {/* Other Sections */}
      <Onsales />
      <ProductList />
      <OnsaleSecond />
      <Footer />
    </>
  );
}

export const dynamic = "force-dynamic";
