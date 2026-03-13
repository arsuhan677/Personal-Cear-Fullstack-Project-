import ProductCard from "./ProductCard";
import { products } from "@/";

export default function BestSellingProducts() {
  return (
    <section className="max-w-7xl mx-auto py-12">
      
      <h2 className="text-3xl font-semibold text-center mb-10">
        Best Selling Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

    </section>
  );
}