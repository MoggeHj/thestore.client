import { GetSizeString } from "@/app/api/dtos/productDtos";

export type RadioButtonOptions = {
  name: string;
  visible: boolean;
};

export function GetColorRadioButtonVisability(
  variants: { colorName?: string; stock: number }[]
): RadioButtonOptions[] {
  const colorMap = new Map<string, boolean>();
  for (const v of variants) {
    if (typeof v.colorName === "string") {
      if (!colorMap.has(v.colorName)) {
        colorMap.set(v.colorName, v.stock > 0);
      } else if (v.stock > 0) {
        colorMap.set(v.colorName, true);
      }
    }
  }
  return Array.from(colorMap.entries()).map(([name, visible]) => ({
    name,
    visible,
  }));
}

export function GetSizeRadioButtonVisability(
  variants: { size?: number; stock: number }[]
): RadioButtonOptions[] {
  const sizeMap = new Map<number, boolean>();
  for (const v of variants) {
    if (typeof v.size === "number") {
      if (!sizeMap.has(v.size)) {
        sizeMap.set(v.size, v.stock > 0);
      } else if (v.stock > 0) {
        sizeMap.set(v.size, true);
      }
    }
  }
  return Array.from(sizeMap.entries()).map(([size, visible]) => ({
    name: GetSizeString(size) ?? "",
    visible,
  }));
}
