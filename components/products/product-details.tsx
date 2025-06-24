import { fetchProductDetails } from "@/app/api/products";
import Image from "next/image";
import RadioButton from "../radio-button";
import {
  GetColorRadioButtonVisability,
  GetSizeRadioButtonVisability,
} from "@root/lib/helpers/radio-button-helper";

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
      <div className="grid md:grid-cols-5 gap-3">
        <div className="md:col-span-4">
          <Image
            alt={details.name}
            className="object-cover rounded-t-lg bg-slate-300 "
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
              {"$" + details.price.toFixed(2)}
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:gap-10">
          <RadioButton
            name="Color"
            radioButtonOptions={GetColorRadioButtonVisability(details.variants)}
          ></RadioButton>
        </div>
        <div className="grid gap-4 md:gap-10">
          <RadioButton
            name="Size"
            radioButtonOptions={GetSizeRadioButtonVisability(details.variants)}
          ></RadioButton>
        </div>
      </div>
    </>
  );
}
