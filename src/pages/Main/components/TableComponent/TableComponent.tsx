import {
  Skeleton,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  StyledTable,
  StyledTableRow,
  TableWrapper,
} from "./TableComponentStyles";
import { Product } from "../../../../api/apiTypes";

export const TableComponent = ({
  products,
  isLoading,
}: {
  products?: Product[];
  isLoading: boolean;
}) => {

  return (
    <TableWrapper>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableColumns />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableContents data={products} isLoading={isLoading} />
        </TableBody>
      </StyledTable>
    </TableWrapper>
  );
};

const TableColumns = () => {
  return [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
    },
    {
      field: "year",
      headerName: "Year",
    },
  ].map((column) => (
    <TableCell key={column.field} align="center">
      {column.headerName}
    </TableCell>
  ));
};

const TableContents = ({
  data,
  isLoading,
}: {
  data?: Product[];
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
  return data.map((row) => (
    <StyledTableRow key={row.id} color={row.color}>
      <TableCell align="center">{row.id}</TableCell>
      <TableCell align="center">{row.name}</TableCell>
      <TableCell align="center">{row.year}</TableCell>
    </StyledTableRow>
  ));
};

const TableSkeleton = ({ rows }: { rows: number }) => {
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
