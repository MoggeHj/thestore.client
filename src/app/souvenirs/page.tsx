import ProductGrid from "@root/components/products/product-grid";

export default async function Souvenirs() {
  return (
    <>
      <section>
        <h1 className="text-black text-2xl font-bold">
          Explore our collection of unique souvenirs!
        </h1>
      </section>

      <section className="flex flex-col items-center justify-center w-full space-y-4 px-4">
        <h2 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl mb-8">
          Popular Products
        </h2>
        <div className="w-full max-w-screen-lg mx-auto">
          <ProductGrid />
        </div>
      </section>
    </>
  );
}
