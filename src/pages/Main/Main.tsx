import { useSearchParams } from "react-router-dom";
import { InputRow } from "./components/InputRow/InputRow";
import { PagesRow } from "./components/PagesRow/PagesRow";
import { TableComponent } from "./components/TableComponent/TableComponent";
import { MainWrapper } from "./MainStyles";
import { useQuery } from "react-query";
import { getProducts } from "../../api/queries";
import { useState } from "react";
import { ErrorComponent } from "./components/ErrorComponent/ErrorComponent";
import { queryId, queryPage } from "../../utils/searchParams";

export const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [id, setId] = useState<string>(queryId(searchParams));
  const [detailsId, setDetailsId] = useState<string>(queryId(searchParams));
  const [page, setPage] = useState(queryPage(searchParams));
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
  const handlePageChange = (page: number) => {
    setPage(page);
    if (page === 1) {
      setSearchParams({});
      return;
    }
    setSearchParams({ page: page.toString() });
  };
  const errorComponent = isError && (
    <ErrorComponent errorMsg={(error as Error).message} />
  );

  const handleIdChange = (id: string) => {
    if (!id) {
      setSearchParams({});
      setId("");
      return;
    }
    setSearchParams({ id: id });
    setId(id);
  };

  return (
    <MainWrapper>
      {errorComponent}
      <InputRow currentId={id} setCurrentId={handleIdChange} />
      <TableComponent products={productsResponse?.data} isLoading={isLoading} />
      <PagesRow
        isSingular={!Array.isArray(productsResponse?.data)}
        currentPage={productsResponse?.page}
        totalPages={productsResponse?.total_pages}
        isLoading={isLoading}
        setPage={handlePageChange}
      />
    </MainWrapper>
  );
};
