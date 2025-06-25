"use client";
"@heroicons/react/24/outline";
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
  const [startIdx, setStartIdx] = useState(0);
  const maxThumbnails = 4;
  const canScrollLeft = startIdx > 0 && imageUrls.length > maxThumbnails;
  const canScrollRight =
    imageUrls.length > maxThumbnails &&
    startIdx + maxThumbnails < imageUrls.length;
  const visibleThumbnails = imageUrls.slice(startIdx, startIdx + maxThumbnails);

  return (
    <div className="grid md:grid-cols-5 gap-3">
      <div className="md:col-span-10">
        <Image
          alt={name}
          className="object-cover object-top rounded-t-lg w-full"
          src={imageUrls[selectedIdx]}
          height={350}
          width={350}
        />
        <div className="flex items-center gap-2 justify-center mt-4">
          {imageUrls.length > maxThumbnails && (
            <button
              className="p-2 bg-white rounded-full shadow border mr-2 disabled:opacity-30"
              onClick={() => setStartIdx(startIdx - 1)}
              aria-label="Scroll thumbnails left"
              disabled={!canScrollLeft}
            >
              &#8592;
            </button>
          )}
          {visibleThumbnails.map((url: string, idx: number) => (
            <button
              key={url + idx + startIdx}
              onClick={() => setSelectedIdx(startIdx + idx)}
              aria-label={`Show image ${startIdx + idx + 1}`}
              className={
                (selectedIdx === startIdx + idx
                  ? "ring-2 ring-blue-500 "
                  : "") + "rounded"
              }
            >
              <Image
                alt={name + " thumbnail " + (startIdx + idx + 1)}
                src={url}
                width={100}
                height={100}
                className="rounded border object-cover shadow-md"
              />
            </button>
          ))}
          {imageUrls.length > maxThumbnails && (
            <button
              className="p-2 bg-white rounded-full shadow border ml-2 disabled:opacity-30"
              onClick={() => setStartIdx(startIdx + 1)}
              aria-label="Scroll thumbnails right"
              disabled={!canScrollRight}
            >
              &#8594;
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
