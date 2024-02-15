import axios from "axios";
import { BASE_URL } from "./apiUrl";
import { ProductsResponse } from "./apiTypes";

type GetProductsProps = {
  perPage?: number;
  page?: number;
  id?: number;
};

export const getProducts = async ({
  perPage = 5,
  page,
  id,
}: GetProductsProps): Promise<ProductsResponse> => {
  const url = () => {
    if (page){
        return `${BASE_URL}?per_page=${perPage}&page=${page}`;
        
    }
    if (id){
        return `${BASE_URL}/${id}`;
    }
    return `${BASE_URL}?per_page=${perPage}`;
  };
  return axios.get(url()).then((res) => res.data);
};
