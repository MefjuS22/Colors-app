import { useSearchParams } from "react-router-dom";
import { InputRow } from "./components/InputRow/InputRow";
import { PagesRow } from "./components/PagesRow/PagesRow";
import { TableComponent } from "./components/TableComponent/TableComponent";
import { MainWrapper } from "./MainStyles";
import { useQuery } from "react-query";
import { getProducts } from "../../api/queries";
import { useState } from "react";

export const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryPage = () => {
    if (!searchParams.has("page")) {
      return 1;
    }
    return Number(searchParams.get("page"));
  };
  const [page, setPage] = useState(queryPage());
  const { data: productsResponse, isLoading } = useQuery({
    queryFn: () =>
      getProducts({
        perPage: 5,
        page,
      }),
    queryKey: ["products", { page }],
    keepPreviousData: true,
  });
  const id = Number(searchParams.get("id"));

  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
    setPage(page);
  };

  return (
    <MainWrapper>
      <button onClick={() => setSearchParams({ page: "2" })}>
        Set page to 2
      </button>
      <button onClick={() => setSearchParams({ id: "2" })}>Set id to 2</button>
      <button onClick={() => setSearchParams({})}>reset</button>
      currentPage: {page}
      currentId: {id}
      <InputRow />
      <TableComponent products={productsResponse?.data} isLoading={isLoading} />
      <PagesRow
        currentPage={productsResponse?.page}
        totalPages={productsResponse?.total_pages}
        isLoading={isLoading}
        setPage={handlePageChange}
      />
    </MainWrapper>
  );
};
