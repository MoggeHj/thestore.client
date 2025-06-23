import ProductCard from "./product-card";
import { fetchProducts } from "@/app/api/products";

export default async function ProductGrid() {
  const products = await fetchProducts();

  return (
    <div
      role="list"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full py-4 px-1"
    >
      {products
        .filter((product) => product.id !== undefined)
        .map((product) => (
          <div role="listitem" key={product.id}>
            <ProductCard
              id={product.id as number}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          </div>
        ))}
    </div>
  );
}
