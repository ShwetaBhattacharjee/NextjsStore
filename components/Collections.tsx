import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Head from "next/head";

const Collections = async () => {
  const Collections = await getCollections();
  const collections = Collections.slice(0, 3);

  return (
    <>
      <Head>
        <title>Collections of High-Quality Car Parts | HD Partz</title>
      </Head>

      <div className="mt-64 sm:mt-48 flex flex-col items-center gap-6 py-8 px-5">
        <h2 className="text-3xl font-bold text-[#05568C] mb-8"></h2>
        {!collections || collections.length === 0 ? (
          <p className="text-body-bold">No collections found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {collections.map((collection: CollectionType) => (
              <Link
                href={`/collections/${collection._id}`}
                key={collection._id}
                className="w-full flex border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="flex-shrink-0 w-1/2 bg-gray-200 p-4 flex justify-center items-center">
                  <div className="rounded-md p-2">
                    <Image
                      src={collection.image}
                      alt={`Image of ${collection.title} collection`}
                      width={180}
                      height={180}
                      className="object-contain border border-gray-300 rounded-md"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-between p-5 w-1/2">
                  <h2 className="text-lg font-semibold text-[#05568C]">
                    {collection.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    {collections.description ||
                      "Explore our wide range of products."}
                  </p>
                  <div className="flex flex-col mt-4 text-sm font-medium text-[#05568C]">
                    <p className="flex items-center gap-1">
                      All {collection.title} <ArrowRight size={18} />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Collections;
