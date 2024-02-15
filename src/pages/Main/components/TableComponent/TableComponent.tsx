import { TableCell } from "@mui/material";
import { StyledTable, StyledTableRow, TableWrapper } from "./TableComponentStyles";

export const TableComponent = () => {
  const tempData = [
    {
      id: 1,
      name: "cerulean",
      year: "2000",
      color: "#98B2D1",
    },
  ]

  return (
    <TableWrapper>
      <StyledTable>
        <TableColumns />
        <TableContents data={tempData} />
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

}

type TableContentsProps = {
  data: Array<{
    id: number;
    name: string;
    year: string;
    color: string;
  }>;
}
const TableContents = ({data}: TableContentsProps) => {
  return data.map((row) => (
      <StyledTableRow key={row.id} color={row.color}>
        <TableCell key={row.id} align="center">
          {row.id}
        </TableCell>
        <TableCell key={row.name} align="center">
          {row.name}
        </TableCell>
        <TableCell key={row.year} align="center">
          {row.year}
        </TableCell>
      </StyledTableRow>
    ));
}