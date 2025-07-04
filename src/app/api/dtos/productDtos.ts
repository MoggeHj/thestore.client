export interface ProductDto {
  id?: number;
  name: string;
  price: number;
  imageUrl: string; // URL to the product image selected to be displayed when adding product
}

export interface ProductDetailsDto {
  id?: number;
  name: string;
  price: number;
  imageUrl: string; // URL to the product image selected to be displayed when adding product
  description: string;
  variants: ProductVarientDto[];
}

export interface ProductVarientDto {
  id?: number;
  colorName?: string;
  size?: Size;
  imageUrls: string[];
  stock: number;
}

export enum Size {
  Undefined,
  Small,
  Medium,
  Large,
  XL,
  XXL,
}

export function GetSizeString(size: number | undefined): string | undefined {
  switch (size) {
    case 1:
      return "Small";
    case 2:
      return "Medium";
    case 3:
      return "Large";
    case 4:
      return "XL";
    case 5:
      return "XXL";
    default:
      return undefined;
  }
}

// export interface CategoryDto {
//   id?: number;
//   categoryType: CategoryType;
//   subCategoryType: SubCategoryType;
// }

// export enum CategoryType {
//   Undefined,
//   Other,
//   Clothing,
//   Souvenirs,
//   Accessories,
//   WelcomePackages,
//   Sale,
//   Books,
//   Toys,
// }

// export enum SubCategoryType {
//   Undefined,
//   Other,
//   // Clothing
//   TShirts,
//   Hoodies,
//   Caps,
//   Scarves, // Souvenirs
//   Magnets,
//   Keychains,
//   Postcards,
//   SnowGlobes,
//   // Drinkware
//   Mugs,
//   Glasses,
//   WaterBottles,
//   ShotGlasses, // Accessories
//   Bags,
//   Wallets,
//   Pins, // Toys
//   Plushies,
//   Puzzles,
//   MiniGames,
// }
