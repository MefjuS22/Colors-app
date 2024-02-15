import { TableCell } from "@mui/material";

export const TableColumns = () => {
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
  