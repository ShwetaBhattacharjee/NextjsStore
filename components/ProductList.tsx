import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";
import Head from "next/head";

const ProductList = async () => {
  const products = await getProducts();

  return (
    <>
      <Head>
        {/* Add noindex, nofollow for SEO */}
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="flex flex-col items-center gap-10 py-8 px-5">
        {/* Empty State */}
        {!products || products.length === 0 ? (
          <p className="text-body-bold">No products found</p>
        ) : (
          // Product Cards Container
          <div className="flex flex-wrap justify-center gap-16">
            {/* Map through products and render each ProductCard */}
            {products.map((product: ProductType) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;
