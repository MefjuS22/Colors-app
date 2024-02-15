import { useQuery } from "react-query";
import { getProducts } from "../api/queries";

export const useProductsData = ({page, id}: {page?: number, id?: string}) => {
    const {
        data: productsResponse,
        isLoading,
        isError,
        error,
      } = useQuery({
        queryFn: () =>
          getProducts({
            page,
            id: id ? Number(id) : undefined,
          }),
        queryKey: ["products", { page, id }],
        keepPreviousData: true,
      });
    const isResponseSingular = !Array.isArray(productsResponse?.data)
      return {
        productsResponse, isLoading, isError, error, isResponseSingular
      }
}