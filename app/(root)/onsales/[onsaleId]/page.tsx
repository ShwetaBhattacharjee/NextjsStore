import ProductCard from "@/components/ProductCard";
import { getOnsaleDetails } from "@/lib/actions/actions";
import Image from "next/image";
import React from "react";

const OnsaleTitle = async ({ params }: { params: { onsaleId: string } }) => {
  const onsaleDetails = await getOnsaleDetails(params.onsaleId);

  return (
    <div className="px-6 py-8 flex flex-col items-center">
      {/* Onsale Image */}
      <div className="w-full max-w-md">
        <Image
          src={onsaleDetails.image}
          width={200}
          height={150}
          alt="onsale"
          className="w-full h-auto object-cover rounded-md"
          sizes="(max-width: 200px) 100vw, 200px"
        />
      </div>

      {/* Onsale Title and Description */}
      <div className="text-center mt-4 mb-8">
        <h1 className="text-heading3-bold text-grey-2">
          {onsaleDetails.title}
        </h1>
        <p className="text-body-normal text-grey-2 mt-2 max-w-2xl mx-auto">
          {onsaleDetails.description}
        </p>
      </div>

      {/* Products List */}
      <div className="flex flex-wrap gap-6 justify-center w-full">
        {onsaleDetails.products.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default OnsaleTitle;

export const dynamic = "force-dynamic";
