import React from "react";
import Button from "./Button";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  description,
  price,
  onAddToCart,
}) => {
  return (
    <div
      className="
        w-3/4
        bg-white rounded-xl shadow-md 
        overflow-hidden flex flex-col
      "
    >

      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 flex-grow mt-1">{description}</p>
        <p className="text-base font-semibold text-gray-900 mt-2">
          {price.toLocaleString()} ฿
        </p>

        <div className="mt-4">
          <Button onClick={onAddToCart} variant="primary" size="md">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;