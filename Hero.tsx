import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to Premium EStore
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Discover an exclusive collection of premium quality products
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/shop"
            className="bg-secondary hover:bg-opacity-90 text-white px-8 py-3 rounded font-semibold transition"
          >
            Shop Now
          </Link>
          <Link
            href="/categories"
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3 rounded font-semibold transition"
          >
            Browse Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
