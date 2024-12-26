import ProductCard from "@/components/ProductCard";
import { getCollectionDetails } from "@/lib/actions/actions";
import Image from "next/image";
import React from "react";
import Head from "next/head";

const CollectionTitle = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const collectionDetails = await getCollectionDetails(params.collectionId);

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>{collectionDetails.title} | High-Quality Products</title>
        <meta
          name="description"
          content={`Explore our ${collectionDetails.title} collection featuring high-quality products. ${collectionDetails.description}`}
        />
        <meta property="og:title" content={collectionDetails.title} />
        <meta
          property="og:description"
          content={`Discover our ${collectionDetails.title} collection. ${collectionDetails.description}`}
        />
        <meta property="og:image" content={collectionDetails.image} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="px-6 py-8 flex flex-col items-center">
        {/* Collection Image */}
        <div className="w-full max-w-md">
          <Image
            src={collectionDetails.image}
            alt={`Image of ${collectionDetails.title} collection`}
            width={200}
            height={150}
            className="w-full h-auto object-cover rounded-md"
            sizes="(max-width: 640px) 100vw, 200px"
            priority
          />
        </div>

        {/* Collection Title and Description */}
        <div className="text-center mt-4 mb-8">
          <h1 className="text-heading3-bold text-grey-2">
            {collectionDetails.title}
          </h1>
          <p className="text-body-normal text-grey-2 mt-2 max-w-2xl mx-auto">
            {collectionDetails.description}
          </p>
        </div>

        {/* Products List */}
        <div className="flex flex-wrap gap-6 justify-center w-full">
          {collectionDetails.products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CollectionTitle;

export const dynamic = "force-dynamic";
