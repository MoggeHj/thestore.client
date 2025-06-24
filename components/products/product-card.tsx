import Image from "next/image";
import Link from "next/link";

export default async function ProductCard({
  id,
  name,
  price,
  imageUrl,
}: {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}) {
  return (
    <div className="flex flex-col items-center gap-0 border border-gray-200 rounded-lg shadow-lg">
      <Image
        alt={name}
        className="object-cover rounded-t-lg bg-slate-300"
        src={imageUrl}
        priority
        quality={100}
        height="350"
        width="350"
      />
      <div className="flex flex-col p-4 space-y-4 items-center">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-lg font-bold mt-2">${price.toFixed(2)}</p>
        <Link
          prefetch={true}
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          href={`/souvenirs/product/${id}`}
        >
          View Product
        </Link>
      </div>
    </div>
  );
}
