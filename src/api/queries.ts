import axios from 'axios';
import { BASE_URL } from './apiUrl';
import { Product, ProductsResponse } from './apiTypes';

type GetProductsProps = {
    page: number;
};

const PER_PAGE = 5;

export const getProducts = async ({
    page,
}: GetProductsProps): Promise<ProductsResponse> => {
    const url = () => {
        if (page) {
            return `${BASE_URL}?per_page=${PER_PAGE}&page=${page}`;
        }
        return `${BASE_URL}?per_page=${PER_PAGE}`;
    };
    return axios.get(url()).then(res => res.data);
};

export const getProduct = async (id: number) => {
    const response = await axios.get(`${BASE_URL}${id}`).then(res => res.data);

    return response.data as Product;
};