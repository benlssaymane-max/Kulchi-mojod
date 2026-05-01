'use client';

import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    image: "https://via.placeholder.com/250x250?text=Headphones",
    category: "Electronics",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Luxury Watch",
    price: 349.99,
    image: "https://via.placeholder.com/250x250?text=Watch",
    category: "Fashion",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Designer Backpack",
    price: 129.99,
    image: "https://via.placeholder.com/250x250?text=Backpack",
    category: "Fashion",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Smart Home Hub",
    price: 99.99,
    image: "https://via.placeholder.com/250x250?text=Hub",
    category: "Electronics",
    rating: 4.4,
  },
];

export default function FeaturedProducts() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-cover transition duration-300 ${
                    hoveredId === product.id ? "scale-110" : ""
                  }`}
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-secondary">
                    ${product.price}
                  </span>
                  <span className="text-sm text-yellow-500">
                    ⭐ {product.rating}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-secondary text-white py-2 rounded hover:bg-opacity-80 transition font-semibold">
                    Add to Cart
                  </button>
                  <Link
                    href={`/product/${product.id}`}
                    className="flex-1 border border-secondary text-secondary py-2 rounded hover:bg-secondary hover:text-white transition font-semibold text-center"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
