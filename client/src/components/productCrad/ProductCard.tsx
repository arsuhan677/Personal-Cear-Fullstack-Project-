import Image from "next/image";
import Button from "../buttone/Button";

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
    <div className=" transition duration-300">
      
      {/* Image */}
      <div className="relative bg-gray-100 flex items-center justify-center h-52">
        <Image
          src={product.image}
          alt={product.title}
          width={140}
          height={140}
          className="object-contain"
        />
        <div>
          <Button />
        </div>
      </div>

      {/* Rating */}
        <div className="flex items-center justify-center gap-1 mt-3 text-sm text-gray-600">
        ⭐ {product.rating}
        <span className="text-gray-400">| {product.sold} Sold</span>
      </div>

      {/* Title */}
      <h3 className="flex items-center justify-center text-sm mt-1 font-medium text-gray-800">
        {product.title}
      </h3>

      {/* Price */}
      <div className="flex items-center justify-center gap-2 mt-1 text-sm">
        <span className="text-gray-400 line-through">{product.oldPrice}</span>
        <span className="text-green-700 font-semibold">{product.price}</span>
      </div>
    </div>
  );
}