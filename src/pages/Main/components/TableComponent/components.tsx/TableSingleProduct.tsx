import { useSearchParams } from "react-router-dom";
import { useSingleProductData } from "../../../../../hooks/useProductsData";
import { StyledTableRow } from "../TableComponentStyles";
import { TableCell } from "@mui/material";
import { ErrorComponent } from "../../ErrorComponent/ErrorComponent";
import { AxiosError } from "axios";
import { TableSkeleton } from "./TableSkeleton";

export const TableSingleProduct = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id")!;

  const { product, isError, error, isLoading } = useSingleProductData(
    Number(id)
  );

  if (!product && isLoading) return <TableSkeleton rows={1} />;

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
  if (product) {
    return (
      <StyledTableRow
        onClick={() => {
          setSearchParams((params) => {
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
    );
  }
  return null;
};
