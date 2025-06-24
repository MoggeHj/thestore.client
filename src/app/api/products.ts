import { ProductDetailsDto, ProductDto } from "./dtos/productDtos";
import dummyProducts from "@root/lib/dummyData/dummy-products.json";
import dummyProductDetails from "@root/lib/dummyData/dummy-product-details.json";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const USE_DUMMY_PRODUCTS =
  process.env.NEXT_PUBLIC_USE_DUMMY_PRODUCTS === "true";

export async function fetchProducts(): Promise<ProductDto[]> {
  if (USE_DUMMY_PRODUCTS) {
    // Directly return the dummy products as a resolved promise
    return Promise.resolve(dummyProducts);
  } else {
    const apiResponse = await fetch(`${API_BASE_URL}/getproducts`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      // credentials: 'include', // Uncomment if you need cookies/auth
    });

    if (!apiResponse.ok) {
      throw new Error("Failed to fetch products");
    }

    return apiResponse.json();
  }
}

export async function fetchProductDetails(
  id: number
): Promise<ProductDetailsDto> {
  if (USE_DUMMY_PRODUCTS) {
    // Find the product in dummy data
    const product = dummyProductDetails.find((p) => p.id === id);
    return Promise.resolve((product as ProductDetailsDto) || null);
  } else {
    const response = await fetch(`${API_BASE_URL}/getproductdetails/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      // credentials: 'include', // Uncomment if you need cookies/auth
    });

    if (!response.ok) {
      throw new Error("Failed to fetch product details");
    }

    return response.json();
  }
}

export async function postProduct(product: ProductDto): Promise<ProductDto> {
  const response = await fetch(`${API_BASE_URL}/product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(product),
    // credentials: 'include', // Uncomment if you need cookies/auth
  });

  if (!response.ok) {
    throw new Error("Failed to post product");
  }

  return response.json();
}

export async function postProductAdmin(
  product: ProductDto
): Promise<ProductDto> {
  const response = await fetch(`${API_BASE_URL}/productAdmin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(product),
    // credentials: 'include', // Uncomment if you need cookies/auth
  });

  if (!response.ok) {
    throw new Error("Failed to post product");
  }

  return response.json();
}
