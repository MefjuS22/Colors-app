import { TableCell, TableRow } from "@mui/material";
import { Product } from "../../../../../api/apiTypes";
import { TableSkeleton } from "./TableSkeleton";
import { StyledTableRow } from "../TableComponentStyles";

export const TableContents = ({
    data,
    isLoading,
    selectProduct
  }: {
    data?: Product[] | Product;
    isLoading: boolean;
    selectProduct: (product: Product) => void

  }) => {
    if (!data && isLoading) return <TableSkeleton rows={5} />;
    if (!data) {
      return (
        <TableRow>
          <TableCell align="center"></TableCell>
          <TableCell align="center">Server Error</TableCell>
          <TableCell align="center"></TableCell>
        </TableRow>
      );
    }
    if (!Array.isArray(data)) {
      data = [data];
    }
    return data.map((product) => (
      <StyledTableRow key={product.id} color={product.color} onClick={() => selectProduct(product)}>
        <TableCell align="center">{product.id}</TableCell>
        <TableCell align="center">{product.name}</TableCell>
        <TableCell align="center">{product.year}</TableCell>
      </StyledTableRow>
    ));
  };