import { TableCell } from "@mui/material";
import { TableSkeleton } from "./TableSkeleton";
import { StyledTableRow } from "../TableComponentStyles";
import { useProductsData } from "../../../../../hooks/useProductsData";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { ErrorComponent } from "../../ErrorComponent/ErrorComponent";
import { AxiosError } from "axios";

export const TableContents = () => {
  const { productsResponse, isLoading, isError, error } = useProductsData();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (productsResponse?.page && !searchParams.has("page")) {
      setSearchParams((params) => {
        params.set("page", productsResponse.page.toString());
        return params;
      });
    }
  }, [productsResponse?.page]);

  if (!productsResponse && isLoading) return <TableSkeleton rows={5} />;

  if (isError) {
    return (
      <>
        <StyledTableRow>
          <TableCell align="center" colSpan={3}>
            We were unable to process your request
          </TableCell>
        </StyledTableRow>
        <StyledTableRow>
          <TableCell align="center" colSpan={3}>
            <ErrorComponent errorMsg={(error as AxiosError).message} />
          </TableCell>
        </StyledTableRow>
      </>
    );
  }
  const productsTable =
    productsResponse?.data &&
    productsResponse.data.map((product) => (
      <StyledTableRow
        onClick={() => {
          setSearchParams((params) => {
            params.set("id", product.id.toString());
            params.set("open", "true");
            return params;
          });
        }}
        key={product.id}
        color={product.color}
      >
        <TableCell align="center">{product.id}</TableCell>
        <TableCell align="center">{product.name}</TableCell>
        <TableCell align="center">{product.year}</TableCell>
      </StyledTableRow>
    ));

  return productsTable;
};
