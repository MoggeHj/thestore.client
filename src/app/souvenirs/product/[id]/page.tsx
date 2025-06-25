import ProductDetails from "@root/components/products/product-details";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  return (
    <main>
      <ProductDetails id={id} />
    </main>
  );
}
