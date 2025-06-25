"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({
  name,
  imageUrls,
}: {
  name: string;
  imageUrls: string[];
}) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const goToPrev = () => {
    setSelectedIdx((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
  };
  const goToNext = () => {
    setSelectedIdx((prev) => (prev + 1) % imageUrls.length);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative aspect-square max-h-[800px] w-full overflow-hidden">
        {imageUrls[selectedIdx] && (
          <Image
            className="object-contain"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            alt={name + " image " + (selectedIdx + 1)}
            src={imageUrls[selectedIdx]}
            priority={true}
          />
        )}
      </div>

      {/* Navigation arrows below the main image, above thumbnails */}
      {imageUrls.length > 1 && (
        <div className="flex w-full justify-center my-4 pointer-events-auto">
          <div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80">
            <button
              aria-label="Previous product image"
              onClick={goToPrev}
              className="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center"
            >
              <ArrowLeftIcon className="h-5" />
            </button>
            <div className="mx-1 h-6 w-px bg-neutral-500"></div>
            <button
              aria-label="Next product image"
              onClick={goToNext}
              className="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center"
            >
              <ArrowRightIcon className="h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Thumbnails below the main image */}
      {imageUrls.length > 1 && (
        <ul className="flex items-center justify-center gap-2 py-1 mt-8 mb-10 z-20">
          {imageUrls.map((url, index) => (
            <li
              key={url + index}
              className="h-20 w-20 flex items-center justify-center"
            >
              <button
                aria-label={`Show image ${index + 1}`}
                onClick={() => setSelectedIdx(index)}
                className="h-full w-full flex items-center justify-center"
              >
                <Image
                  alt={name + " thumbnail " + (index + 1)}
                  src={url}
                  width={80}
                  height={80}
                  className={`rounded border object-contain  ${
                    selectedIdx === index ? "ring-2 ring-blue-500" : ""
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
