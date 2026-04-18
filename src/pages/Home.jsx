import { Link } from "react-router-dom";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-indigo-100 rounded-full shadow-inner">
            <ShoppingBag className="h-16 w-16 text-indigo-600" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">FakeStore</span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Discover a world of premium products at unbeatable prices. 
          From the latest electronics to trendy fashion, we have everything you need.
        </p>
        
        <div className="pt-8 flex justify-center">
          <Link
            to="/shop"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white bg-indigo-600 rounded-full overflow-hidden shadow-lg hover:shadow-xl hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Shopping
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
