import { getOnsales } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Import ArrowRight icon from Lucide React
import Head from "next/head";

const Onsales = async () => {
  const onsales = await getOnsales();

  // Limit to first two onsales
  const limitedOnsales = onsales.slice(3, 6);

  return (
    <>
      <Head>
        <title>On Sales | HDPartz</title>
        <meta
          name="description"
          content="Explore the latest on-sale automotive parts at HDPartz. Limited time offers and discounts!"
        />
        <meta
          name="keywords"
          content="automotive parts, sale, discounts, tires, wheels, interior accessories, on sale"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="On Sales | HDPartz" />
        <meta
          property="og:description"
          content="Explore the latest on-sale automotive parts at HDPartz. Limited time offers and discounts!"
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="mt-2 flex flex-col items-center gap-8 py-8 px-5">
        {/* Empty State */}
        {!limitedOnsales || limitedOnsales.length === 0 ? (
          <p className="text-body-bold">No onsales found</p>
        ) : (
          // Onsale Cards Container (One row, two columns)
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto">
            {limitedOnsales.map((onsale: OnsaleType) => (
              <Link
                href={`/onsales/${onsale._id}`}
                key={onsale._id}
                className="relative w-full h-80 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                aria-label={`On Sale: ${onsale.title}`}
                rel="nofollow" // Added nofollow for individual links
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={onsale.image}
                    alt={`Image of ${onsale.title}`}
                    layout="fill"
                    objectFit="cover"
                    className="object-center"
                  />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-6">
                  {/* Sale Badge */}
                  <button className="bg-blue-600 text-white py-0.5 px-2 rounded-full text-xs font-semibold w-fit">
                    On Sale This Week
                  </button>

                  {/* Content */}
                  <div>
                    <h1 className="text-xl font-bold text-white mb-2">
                      {onsale.title}
                    </h1>
                    <p className="text-sm text-white text-opacity-90 mb-4">
                      {onsales.description ||
                        "Explore our wide range of products."}
                    </p>
                    <div className="flex items-center gap-2 text-white font-medium">
                      <p>Shop Now</p>
                      <ArrowRight size={18} />
                    </div>
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

export default Onsales;
