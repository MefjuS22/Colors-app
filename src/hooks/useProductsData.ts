import { useQuery } from 'react-query';
import { getProduct, getProducts } from '../api/queries';
import { useSearchParams } from 'react-router-dom';

export const useProductsData = () => {
    const [searchParams] = useSearchParams();
    const {
        data: productsResponse,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryFn: () =>
            getProducts({
                page: searchParams.get('page')
                    ? Number(searchParams.get('page'))
                    : 1,
            }),
        queryKey: ['products', { page: searchParams.get('page') }],
        keepPreviousData: true,
    });
    return {
        productsResponse,
        isLoading,
        isError,
        error,
    };
};

export const useProduct = (id: number) => {
    const {
        data: product,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryFn: () => getProduct(id),
        queryKey: ['product', id],
    });
    return { product, isLoading, isError, error };
};