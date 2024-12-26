"use client";

import ProductCard from "@/components/ProductCard";
import { getSearchedCategoryProducts } from "@/lib/actions/actions";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const SearchPage = () => {
  const searchParams = useSearchParams();

  const make = searchParams.get("make") || "";
  const model = searchParams.get("model") || "";
  const price = searchParams.get("price") || "";

  // State to manage products and loading state
  const [searchedCategoryProducts, setSearchedCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data whenever filters change
    const fetchData = async () => {
      const filters = { make, model, price };
      const response = await getSearchedCategoryProducts(filters);
      setSearchedCategoryProducts(response);
      setLoading(false);
    };

    fetchData();
  }, [make, model, price]);

  return (
    <div className="px-10 py-5">
      <h1 className="text-heading3-bold my-10">Search Results</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {searchedCategoryProducts?.length === 0 && (
            <p className="text-body-bold my-5">No results found</p>
          )}
          <div className="flex flex-wrap justify-between gap-16">
            {searchedCategoryProducts?.map((product: any) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPage;
