import { fetchProductDetails } from "@/app/api/products";
import Image from "next/image";

export default async function ProductDetails({ id }: { id: string }) {
  const details = await fetchProductDetails(Number(id));
  if (!details || !details.variants) {
    return (
      <main>
        <h1 className="text-black text-2xl font-bold">Product Details</h1>
        <p className="text-red-600">Product not found.</p>
      </main>
    );
  }
  return (
    <>
      <main>
        <h1 className="text-black text-2xl font-bold">Product Details</h1>
        <Image
          alt={details.name}
          className="object-cover rounded-t-lg bg-slate-300"
          src={details.imageUrl}
          priority
          quality={100}
          height="350"
          width="350"
        />
        {details.variants.map((variant, idx) => (
          <div
            key={variant.id ?? idx}
            className="flex flex-col items-center gap-4 mt-4"
          >
            <Image
              alt={details.name}
              className="object-cover rounded-t-lg bg-slate-300"
              src={variant.imageUrls[0]}
              priority
              quality={100}
              height="350"
              width="350"
            />
            <p>
              Color: {variant.colorName || "Not specified"}
              <br />
            </p>
          </div>
        ))}
        <h2 className="text-xl font-semibold">{details.name}</h2>
        <p className="text-lg font-bold">${details.price.toFixed(2)}</p>
        <p className="text-gray-600">
          {details.description || "No description available."}
        </p>
      </main>
    </>
  );
}
