import ProductDetails from "@root/components/products/product-details";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <main className="max-w-5xl mx-auto py-6 px-4 md:px-6">
        <section className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start py-4 md:py-8 lg:py-12">
          <ProductDetails id={params.id}></ProductDetails>
        </section>
      </main>
    </>
  );
}
