import ProductDetails from "@root/components/products/product-details";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <h4 className="text-black text-2xl font-bold">Product Details</h4>
      <ProductDetails id={params.id}></ProductDetails>
    </>
  );
}
