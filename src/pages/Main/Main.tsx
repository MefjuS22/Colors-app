import { useSearchParams } from "react-router-dom";
import { InputRow } from "./components/InputRow/InputRow";
import { PagesRow } from "./components/PagesRow/PagesRow";
import { TableComponent } from "./components/TableComponent/TableComponent";
import { useEffect, useState } from "react";
import { ErrorComponent } from "./components/ErrorComponent/ErrorComponent";
import { queryId, queryPage } from "../../utils/searchParams";
import { DetailsModal } from "./components/DetailsModal/DetailsModal";
import { MainWrapper } from "./MainStyles";
import { Product } from "../../api/apiTypes";
import { useProductsData } from "../../hooks/useProductsData";

export const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [id, setId] = useState<string>(queryId(searchParams));
  const [page, setPage] = useState(queryPage(searchParams));
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { productsResponse, isLoading, isError, error, isResponseSingular } =
    useProductsData({
      page,
      id,
    });
  const handlePageChange = (page: number) => {
    setPage(page);
    if (page === 1) {
      setSearchParams({});
      return;
    }
    setSearchParams({ page: page.toString() });
  };

  const handleIdChange = (id: string) => {
    if (!id) {
      setSearchParams({});
      setId("");
      return;
    }
    setSearchParams({ id: id });
    setId(id);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    if (!isResponseSingular) {
      setSearchParams({
        page: page.toString(),
        id: product.id.toString(),
        open: "true",
      });
      return;
    }
    setSearchParams({
      id: product.id.toString(),
      open: "true",
    });
  };

  const handleCloseModal = () => {
    const id = searchParams.get("id");
    handlePageChange(page);
    if (isResponseSingular && id) {
      handleIdChange(id);
    }
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (searchParams.has("id") && Boolean(searchParams.get("open"))) {
      const productsData = productsResponse?.data;
      if (productsData) {
        if (isResponseSingular) {
          setSelectedProduct(productsData as unknown as Product);
          setIsModalOpen(true);
          return;
        }
        const product = productsData.find(
          (product) => product.id === Number(searchParams.get("id"))
        );
        if (product) {
          setSelectedProduct(product);
          setIsModalOpen(true);
        }
      }
    }
  }, [searchParams, productsResponse, isResponseSingular]);

  const errorComponent = isError && (
    <ErrorComponent errorMsg={(error as Error).message} />
  );
  return (
    <>
      <MainWrapper>
        <InputRow currentId={id} setCurrentId={handleIdChange} />
        {errorComponent}
        <TableComponent
          products={productsResponse?.data}
          isLoading={isLoading}
          selectProduct={handleSelectProduct}
        />
        <PagesRow
          isSingular={isResponseSingular}
          currentPage={productsResponse?.page}
          totalPages={productsResponse?.total_pages}
          isLoading={isLoading}
          setPage={handlePageChange}
        />
      </MainWrapper>
      <DetailsModal
        isOpen={isModalOpen}
        product={selectedProduct}
        handleClose={() => handleCloseModal()}
      />
    </>
  );
};
