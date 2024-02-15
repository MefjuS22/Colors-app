import { BASE_URL } from "./apiUrls";
import { ProductsResponse } from "./dtos";

export const getProducts = async ({perPage = 5, page}: {perPage?: number, page?: number}): Promise<ProductsResponse> => {
    const url = page ? `${BASE_URL}?per_page=${perPage}&page=${page}` : `${BASE_URL}?per_page=${perPage}`;
    const response = await fetch(url);
    return response.json();
}