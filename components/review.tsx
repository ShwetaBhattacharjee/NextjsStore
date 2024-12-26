"use client";

import { useState } from "react";

interface Review {
  _id: string;
  stars: number;
  comment: string;
}

interface ProductReviewsProps {
  productId: string;
  reviews: Review[];
  averageRating: number;
}

const ProductReviews = ({
  productId,
  reviews,
  averageRating,
}: ProductReviewsProps) => {
  const [stars, setStars] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (stars < 1 || stars > 5) {
      setError("Please select a valid star rating.");
      return;
    }

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, comment, stars }),
      });

      if (res.ok) {
        setSuccess("Review added successfully!");
        setStars(0);
        setComment("");
        // Optionally refresh the page or fetch updated reviews
      } else {
        setError("Failed to submit the review.");
      }
    } catch (err) {
      setError("An error occurred while submitting the review.");
    }
  };

  return (
    <div>
      <h2>Average Rating: {(averageRating || 0).toFixed(1)} / 5</h2>
      <form onSubmit={handleSubmit} className="review-form">
        <label>
          Stars:
          <select
            value={stars}
            onChange={(e) => setStars(Number(e.target.value))}
          >
            <option value="0">Select Rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </label>
        <label>
          Comment:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your review..."
          />
        </label>
        <button type="submit">Submit Review</button>
      </form>
      {error && <p className="error-text">{error}</p>}
      {success && <p className="success-text">{success}</p>}

      <div>
        <h3>Reviews:</h3>
        {reviews?.map((review) => (
          <div key={review._id}>
            <p>{review.stars} Stars</p>
            <p>{review.comment}</p>
          </div>
        )) || <p>No reviews yet.</p>}
      </div>
    </div>
  );
};

export default ProductReviews;
