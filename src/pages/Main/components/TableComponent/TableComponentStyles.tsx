import { Box, Table, TableRow, styled } from "@mui/material";

export const TableWrapper = styled(Box)(() => ({
  minHeight: "600px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
}));

export const StyledTable = styled(Table)(() => ({
  maxWidth: "800px",
}));

export const StyledTableRow = styled(TableRow)(
  ({ color }: { color: string }) => ({
    backgroundColor: color,
    cursor: "pointer",
  })
);
