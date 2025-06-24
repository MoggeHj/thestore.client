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

  // Color options
  const colorOptions = ["Red", "Blue", "Black"];
  const sizeOptions = ["S", "M", "L", "XL", "XXL"];

  // This is a server component, so useState cannot be used directly.
  // For demo, show radio buttons with the first color selected by default.

  return (
    <>
      <div className="grid md:grid-cols-5 gap-3">
        <div className="md:col-span-4">
          <Image
            alt={details.name}
            className="object-cover rounded-t-lg bg-slate-300"
            src={details.imageUrl}
            height="500"
            width="500"
          />
        </div>
      </div>
      <div className="grid gap-4 md:gap-10">
        <div className="md:flex items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-3xl lg:text-4xl text-balance">
              {details.name}
            </h1>
            <div>
              <p>{details.description}</p>
            </div>
            <div className="text-4xl font-bold ml-auto">
              {details.price.toFixed(2)}
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:gap-10">
          <div className="grid gap-2">
            <h1 className="text-black font-bold ">Color</h1>
            <form className="flex items-center gap-4">
              {colorOptions.map((color) => (
                <label
                  key={color}
                  className="flex items-center gap-1 cursor-pointer rounded-md p-2 border shadow-md border-gray-400 bg-white/30 backdrop-blur-sm transition-colors hover:border-gray-900"
                  style={{ minWidth: 64, justifyContent: "center" }}
                >
                  <input
                    type="radio"
                    name="color"
                    value={color}
                    defaultChecked={color === colorOptions[0]}
                    className="accent-gray-900"
                  />
                  <span className="font-medium">{color}</span>
                </label>
              ))}
            </form>
          </div>
        </div>
        <div className="grid gap-4 md:gap-10">
          <div className="grid gap-2">
            <h1 className="text-black font-bold ">Size</h1>
            <form className="flex items-center gap-4">
              {sizeOptions.map((size) => (
                <label
                  key={size}
                  className="flex items-center gap-1 cursor-pointer rounded-md p-2 border shadow-md border-gray-400 bg-white/30 backdrop-blur-sm transition-colors hover:border-gray-900"
                  style={{ minWidth: 64, justifyContent: "center" }}
                >
                  <input
                    type="radio"
                    name="color"
                    value={size}
                    defaultChecked={size === sizeOptions[0]}
                    className="accent-gray-900"
                  />
                  <span className="font-medium">{size}</span>
                </label>
              ))}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
