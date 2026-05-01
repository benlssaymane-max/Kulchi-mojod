import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Electronics",
    slug: "electronics",
    image: "https://via.placeholder.com/300x200?text=Electronics",
  },
  {
    id: 2,
    name: "Fashion",
    slug: "fashion",
    image: "https://via.placeholder.com/300x200?text=Fashion",
  },
  {
    id: 3,
    name: "Home & Garden",
    slug: "home",
    image: "https://via.placeholder.com/300x200?text=Home",
  },
  {
    id: 4,
    name: "Sports & Outdoors",
    slug: "sports",
    image: "https://via.placeholder.com/300x200?text=Sports",
  },
];

export default function Categories() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
