import { Box, Table, TableRow, styled } from "@mui/material";

export const TableWrapper = styled(Box)(() => ({
  minHeight: "400px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  gap: '50px',
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
