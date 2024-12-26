import Link from "next/link";
import Image from "next/image";
import HeartFavorite from "./HeartFavorite";
import Head from "next/head";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
  linkProps?: React.LinkHTMLAttributes<HTMLAnchorElement>; // Add linkProps here
}

const ProductCard = ({ product, updateSignedInUser, linkProps }: ProductCardProps) => {
  return (
    <>

      <Link
        href={`/products/${product._id}`}
        className="w-[220px] flex flex-col gap-2"
        aria-label={`View details of ${product.title}`}
        {...linkProps} // Spread the linkProps here
      >
        {/* Product Image */}
        <Image
          src={product.media[0]}
          alt={product.title}
          width={250}
          height={300}
          className="h-[250px] rounded-lg object-cover"
        />

        {/* Product Information */}
        <div>
          <p className="text-base-bold">{product.title}</p>
          <p className="text-small-medium text-grey-2">{product.category}</p>
        </div>

        {/* Price and Favorite Icon */}
        <div className="flex justify-between items-center">
          <p className="text-body-bold">AED {product.price}</p>
          <HeartFavorite
            product={product}
            updateSignedInUser={updateSignedInUser}
          />
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
