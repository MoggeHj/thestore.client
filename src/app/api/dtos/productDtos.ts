export interface ProductDto {
  id?: number;
  name: string;
  price: number;
  imageUrl: string;
}

export interface CategoryDto {
  id?: number;
  categoryType: CategoryType;
  subCategoryType: SubCategoryType;
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

export enum CategoryType {
  Undefined,
  Other,
  Clothing,
  Souvenirs,
  Accessories,
  WelcomePackages,
  Sale,
  Books,
  Toys,
}

export enum SubCategoryType {
  Undefined,
  Other,
  // Clothing
  TShirts,
  Hoodies,
  Caps,
  Scarves, // Souvenirs
  Magnets,
  Keychains,
  Postcards,
  SnowGlobes,
  // Drinkware
  Mugs,
  Glasses,
  WaterBottles,
  ShotGlasses, // Accessories
  Bags,
  Wallets,
  Pins, // Toys
  Plushies,
  Puzzles,
  MiniGames,
}
