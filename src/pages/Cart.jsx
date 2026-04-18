import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft } from "lucide-react";

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-10 rounded-3xl shadow-sm text-center max-w-md w-full border border-gray-100">
          <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="h-10 w-10 text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-8">
            Looks like you haven't added anything to your cart yet. Let's get you some great items!
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 sm:p-8 space-y-8">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-gray-100 last:border-0 last:pb-0"
              >
                <div className="w-32 h-32 bg-gray-50 rounded-2xl p-4 flex-shrink-0 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                  />
                </div>

                <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left gap-2 w-full">
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="text-xl font-black text-indigo-600">
                    ${item.price.toFixed(2)}
                  </div>
                </div>

                <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                  <div className="flex items-center gap-3 bg-gray-50 rounded-full p-1">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 flex items-center justify-center bg-white text-gray-600 rounded-full shadow-sm hover:text-indigo-600 hover:shadow transition-all"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-6 text-center font-bold text-gray-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 flex items-center justify-center bg-white text-gray-600 rounded-full shadow-sm hover:text-indigo-600 hover:shadow transition-all"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-6 sm:p-8 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="text-gray-500 text-lg">
                Total ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)
              </div>
              <div className="text-3xl font-black text-gray-900">
                ${total.toFixed(2)}
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-end gap-4">
              <Link
                to="/shop"
                className="px-8 py-4 text-center font-bold text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Continue Shopping
              </Link>
              <button className="px-8 py-4 text-center font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all active:scale-95">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
