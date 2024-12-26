"use client";

import { useUser } from "@clerk/nextjs";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface HeartFavoriteProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const HeartFavorite = ({ product, updateSignedInUser }: HeartFavoriteProps) => {
  const router = useRouter();
  const { user } = useUser();

  const [loading, setLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const getUser = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/users", {
        headers: { "Cache-Control": "no-" },
      }); // Prevent caching
      if (!res.ok) throw new Error("Failed to fetch user data");
      const data = await res.json();
      setIsLiked(data.wishlist.includes(product._id));
      setLoading(false);
    } catch (err) {
      console.error("[users_GET]", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  const handleLike = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!user) {
      router.push("/sign-in");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/users/wishlist", {
        method: "POST",
        body: JSON.stringify({ productId: product._id }),
        headers: { "Content-Type": "application/json", "Cache-Control": "no-" }, // Prevent caching
      });
      if (!res.ok) throw new Error("Failed to update wishlist");
      const updatedUser = await res.json();
      setIsLiked(updatedUser.wishlist.includes(product._id));
      updateSignedInUser && updateSignedInUser(updatedUser);
      setLoading(false);
    } catch (err) {
      console.error("[wishlist_POST]", err);
      alert("Failed to update wishlist. Please try again.");
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLike}
      aria-label={
        isLiked
          ? "Remove this product from your wishlist"
          : "Add this product to your wishlist"
      }
      title={isLiked ? "Remove from Wishlist" : "Add to Wishlist"}
      disabled={loading}
      rel="nofollow" // Add rel="nofollow" to prevent search engines from following the action
      className={`relative ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {loading ? (
        <div className="spinner" aria-hidden="true" />
      ) : (
        <Heart
          fill={isLiked ? "red" : "white"}
          aria-hidden="true"
          role="img"
          className="icon-heart"
        />
      )}
    </button>
  );
};

export default HeartFavorite;
