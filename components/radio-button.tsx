"use client";
import { RadioButtonOptions } from "@root/lib/helpers/radio-button-helper";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RadioButton({
  name,
  radioButtonOptions,
}: {
  name: string;
  radioButtonOptions: RadioButtonOptions[];
}) {
  const router = useRouter();
  // Find the first visible value
  const firstVisible = radioButtonOptions.find((v) => v.visible)?.name;
  const [selected, setSelected] = useState(firstVisible || "");

  const updateUrl = (optionName: string, value: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set(optionName, value);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    // On mount, ensure the URL has the preselected value for this option
    if (firstVisible) {
      const params = new URLSearchParams(window.location.search);
      if (!params.get(name)) {
        params.set(name, firstVisible);
        // Use replaceState to avoid triggering a navigation and preserve all params
        window.history.replaceState({}, "", `?${params.toString()}`);
      }
      setSelected(params.get(name) || firstVisible);
    }
  }, [firstVisible, name, router]);

  return (
    <div className="grid gap-2">
      <h1 className="text-black font-bold ">{name}</h1>
      <div className="flex flex-wrap items-center gap-4">
        {radioButtonOptions.map((value) => {
          const isAvailableForSale = value.visible;
          const isActive = selected === value.name;
          return (
            <button
              key={name + value.name}
              aria-disabled={!isAvailableForSale}
              disabled={!isAvailableForSale}
              onClick={() => {
                if (isAvailableForSale) {
                  setSelected(value.name);
                  updateUrl(name, value.name);
                }
              }}
              title={`${name} ${value.name}${
                !isAvailableForSale ? " (Out of Stock)" : ""
              }`}
              className={[
                "flex min-w-[100px] min-h-10 items-center justify-center rounded-full border px-2 py-1 text-lg font-bold shadow-md border-gray-400 bg-white/30 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900",
                isActive
                  ? "cursor-default ring-2 ring-blue-600 border-blue-600"
                  : "",
                !isActive && isAvailableForSale
                  ? "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600"
                  : "",
                !isAvailableForSale
                  ? "relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {value.name}
              {!isAvailableForSale && " (Out of Stock)"}
            </button>
          );
        })}
      </div>
    </div>
  );
}
