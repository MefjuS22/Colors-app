import { TableCell, TableRow } from "@mui/material";
import { Product } from "../../../../../api/apiTypes";
import { TableSkeleton } from "./TableSkeleton";
import { StyledTableRow } from "../TableComponentStyles";

export const TableContents = ({
    data,
    isLoading,
  }: {
    data?: Product[] | Product;
    isLoading: boolean;
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
    return data.map((row) => (
      <StyledTableRow key={row.id} color={row.color}>
        <TableCell align="center">{row.id}</TableCell>
        <TableCell align="center">{row.name}</TableCell>
        <TableCell align="center">{row.year}</TableCell>
      </StyledTableRow>
    ));
  };