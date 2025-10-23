"use client";

import { Button } from "./Button";


interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  onAddToCart?: () => void;
}

export function ProductCard({ name, price, image, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden flex flex-col">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
            {name}
          </h3>
          <p className="text-blue-600 font-medium text-xl mb-3">
            R$ {price.toFixed(2)}
          </p>
        </div>

        <Button
          onClick={onAddToCart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
        >
          Adicionar ao Carrinho
        </Button>
      </div>
    </div>
  );
}
