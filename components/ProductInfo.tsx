"use client";

import { useState } from "react";
import HeartFavorite from "./HeartFavorite";
import { MinusCircle, PlusCircle } from "lucide-react";
import useCart from "@/lib/hooks/useCart";
import Head from "next/head";

const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    productInfo.colors[0]
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    productInfo.sizes[0]
  );
  const [quantity, setQuantity] = useState<number>(1);

  const cart = useCart();

  return (
    <>
      <Head>
        {/* Add noindex, nofollow for SEO */}
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="max-w-[400px] flex flex-col gap-4">
        {/* Product Title and Favorite Button */}
        <div className="flex justify-between items-center">
          <p className="text-heading3-bold">{productInfo.title}</p>
          <HeartFavorite product={productInfo} />
        </div>

        {/* Product Category */}
        <div className="flex gap-2">
          <p className="text-base-medium text-grey-2">Category:</p>
          <p className="text-base-bold">{productInfo.category}</p>
        </div>

        {/* Product Price */}
        <p className="text-heading3-bold">AED {productInfo.price}</p>

        {/* Product Description */}
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Description:</p>
          <p className="text-small-medium">{productInfo.description}</p>
        </div>

        {/* Color Selection */}
        {productInfo.colors.length > 0 && (
          <div className="flex flex-col gap-2">
            <p className="text-base-medium text-grey-2">Colors:</p>
            <div className="flex gap-2">
              {productInfo.colors.map((color, index) => (
                <p
                  key={index}
                  className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                    selectedColor === color ? "bg-black text-white" : ""
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Size Selection */}
        {productInfo.sizes.length > 0 && (
          <div className="flex flex-col gap-2">
            <p className="text-base-medium text-grey-2">Sizes:</p>
            <div className="flex gap-2">
              {productInfo.sizes.map((size, index) => (
                <p
                  key={index}
                  className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                    selectedSize === size ? "bg-black text-white" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Quantity Selector */}
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Quantity:</p>
          <div className="flex gap-4 items-center">
            <MinusCircle
              className="hover:text-red-1 cursor-pointer"
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            />
            <p className="text-body-bold">{quantity}</p>
            <PlusCircle
              className="hover:text-red-1 cursor-pointer"
              onClick={() => setQuantity(quantity + 1)}
            />
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          className="outline text-base-bold py-3 rounded-lg hover:bg-black hover:text-white"
          onClick={() => {
            cart.addItem({
              item: productInfo,
              quantity,
              color: selectedColor,
              size: selectedSize,
            });
          }}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
