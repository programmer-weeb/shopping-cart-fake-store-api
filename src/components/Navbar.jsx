import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Store } from "lucide-react";

export default function Navbar() {
  const { cartItems } = useCart();
  
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Store className="h-8 w-8 text-indigo-600" />
              <span className="font-bold text-xl text-gray-900">FakeStore</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/cart"
              className="relative text-gray-600 hover:text-indigo-600 transition-colors flex items-center"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
