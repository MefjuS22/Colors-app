import { TableCell, TableRow } from "@mui/material";
import { TableSkeleton } from "./TableSkeleton";
import { StyledTableRow } from "../TableComponentStyles";
import { useProductsData } from "../../../../../hooks/useProductsData";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export const TableContents = () => {
  const { productsResponse, isLoading } = useProductsData();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if(productsResponse?.page && !searchParams.has('page')) {
      setSearchParams((params) => {
        params.set("page", productsResponse.page.toString());
        return params;
      });
    }
  }, [productsResponse?.page]);

  if (!productsResponse && isLoading) return <TableSkeleton rows={5} />;

  if (!productsResponse) {
    return (
      <>
        <TableRow>
          <TableCell align="center"></TableCell>
          <TableCell align="center">Server Error</TableCell>
          <TableCell align="center"></TableCell>
        </TableRow>
      </>
    );
  }

  return (
    <>
      {productsResponse.data.map((product) => (
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
      ))}
    </>
  );
};
