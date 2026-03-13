import Image from "next/image";

type Product = {
  id: number;
  title: string;
  image: string;
  rating: number;
  sold: string;
  oldPrice: string;
  price: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300">
      
      {/* Image */}
      <div className="relative bg-gray-100 rounded-lg flex items-center justify-center h-44">
        <Image
          src={product.image}
          alt={product.title}
          width={140}
          height={140}
          className="object-contain"
        />

        {/* Hover Buttons */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
          
          <button className="bg-green-700 text-white text-sm px-4 py-1.5 rounded-full hover:bg-green-800">
            Add to Cart
          </button>

          <button className="border border-green-700 text-green-700 text-sm px-4 py-1.5 rounded-full hover:bg-green-700 hover:text-white">
            Compare
          </button>

        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-3 text-sm text-gray-600">
        ⭐ {product.rating}
        <span className="text-gray-400">| {product.sold} Sold</span>
      </div>

      {/* Title */}
      <h3 className="text-sm mt-1 font-medium text-gray-800">
        {product.title}
      </h3>

      {/* Price */}
      <div className="flex gap-2 mt-1 text-sm">
        <span className="text-gray-400 line-through">{product.oldPrice}</span>
        <span className="text-green-700 font-semibold">{product.price}</span>
      </div>
    </div>
  );
}