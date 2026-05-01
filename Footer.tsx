import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">Premium EStore</h3>
            <p className="text-gray-300">
              Your destination for premium quality products and exceptional shopping experience.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/shop" className="hover:text-secondary transition">Shop</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-secondary transition">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/shipping" className="hover:text-secondary transition">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-secondary transition">Returns</Link></li>
              <li><Link href="/privacy" className="hover:text-secondary transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-secondary transition">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">Email: support@premiumestore.com</p>
            <p className="text-gray-300 mb-4">Phone: +1 (800) 123-4567</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition">Facebook</a>
              <a href="#" className="hover:text-secondary transition">Twitter</a>
              <a href="#" className="hover:text-secondary transition">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Premium EStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
