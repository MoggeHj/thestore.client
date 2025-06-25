import { fetchProductDetails } from "@/app/api/products";
import RadioButton from "../radio-button";
import {
  GetColorRadioButtonVisability,
  GetSizeRadioButtonVisability,
} from "@root/lib/helpers/radio-button-helper";
import ProductGallery from "./product-gallery";

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

  const images = details.variants.map((v) => v.imageUrls).flat();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-12 items-start min-h-[700px]">
        {/* Image section */}
        <div className="flex-[1.5] flex flex-col items-stretch justify-center min-w-[600px] max-w-3xl aspect-square bg-white shadow-lg rounded-xl overflow-hidden mx-auto lg:mx-0 mb-8 lg:mb-0 h-full min-h-[800px]">
          <ProductGallery name={details.name} imageUrls={images} />
        </div>
        {/* Details section */}
        <div className="flex-[1.2] min-w-[320px] flex flex-col gap-10 lg:pl-8">
          <h1 className="font-bold text-3xl lg:text-5xl text-balance mb-2 text-gray-900 dark:text-white">
            {details.name}
          </h1>
          <div className="text-lg text-gray-700 dark:text-gray-300 mb-8 min-h-[120px] lg:min-h-[180px] w-full">
            {details.description}
          </div>
          <div className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-8">
            {"$" + details.price.toFixed(2)}
          </div>
          <div className="flex flex-col gap-8">
            <RadioButton
              name="Color"
              radioButtonOptions={GetColorRadioButtonVisability(
                details.variants
              )}
            />
            <RadioButton
              name="Size"
              radioButtonOptions={GetSizeRadioButtonVisability(
                details.variants
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
