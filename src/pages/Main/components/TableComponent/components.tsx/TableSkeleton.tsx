import { Skeleton, TableCell, TableRow } from "@mui/material";

export const TableSkeleton = ({ rows }: { rows: number }) => {
  return Array.from({ length: rows }).map((_, index) => (
    <TableRow key={index}>
      <TableCell align="center">
        <Skeleton variant="rectangular" />
      </TableCell>
      <TableCell align="center">
        <Skeleton variant="rectangular" />
      </TableCell>
      <TableCell align="center">
        <Skeleton variant="rectangular" />
      </TableCell>
    </TableRow>
  ));
};
