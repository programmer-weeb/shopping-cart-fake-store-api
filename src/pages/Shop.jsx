import { useCart } from "../context/CartContext";
import { Plus, ShoppingCart, Loader2 } from "lucide-react";
import { useFetchProducts } from "../../CustomHookToFetchFromFakeAPI";

export default function Shop() {
  const { products, loading, error } = useFetchProducts();
  const { addToCart } = useCart();

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-gray-50">
        <Loader2 className="h-12 w-12 animate-spin text-indigo-600 mb-4" />
        <p className="text-lg font-medium text-gray-600">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-gray-50 p-4">
        <div className="bg-red-50 text-red-600 p-4 rounded-lg shadow max-w-md text-center">
          <p className="font-bold mb-2">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <ShoppingCart className="h-8 w-8 text-indigo-600" />
          <h1 className="text-4xl font-extrabold text-gray-900">Shop</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group border border-gray-100"
            >
              <div className="h-64 p-6 bg-white flex items-center justify-center relative overflow-hidden group-hover:bg-gray-50 transition-colors">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-900 shadow-sm">
                  ${product.price.toFixed(2)}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow border-t border-gray-50">
                <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2">
                  {product.category}
                </div>
                <h2
                  className="text-lg font-bold text-gray-900 mb-2 line-clamp-2"
                  title={product.title}
                >
                  {product.title}
                </h2>

                <div className="mt-auto pt-6">
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full py-3 px-4 bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 active:scale-95"
                  >
                    <Plus className="h-5 w-5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
