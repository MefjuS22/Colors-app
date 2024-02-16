import { TableBody, TableHead, TableRow } from "@mui/material";
import {
  StyledTable,
  TableWrapper,
} from "./TableComponentStyles";
import { TableContents } from "./components.tsx/TableContents";
import { TableColumns } from "./components.tsx/TableColumns";
import { useSearchParams } from "react-router-dom";
import { useProductsData } from "../../../../hooks/useProductsData";
import { PagesRow } from "../PagesRow/PagesRow";
import { TableSingleProduct } from "./components.tsx/TableSingleProduct";

export const TableComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { productsResponse } = useProductsData();
  const totalPages = productsResponse?.total_pages;

  const paginator = totalPages && searchParams.has("page") && (
    <PagesRow
      currentPage={
        searchParams.get("page") ? Number(searchParams.get("page")) : 1
      }
      totalPages={productsResponse.total_pages}
      setPage={(number) => {
        setSearchParams((params) => {
          params.set("page", String(number));
          return params;
        });
      }}
    />
  );

  const content =
    searchParams.has("id") && !searchParams.has("page") ? (
      <TableSingleProduct />
    ) : (
      <TableContents />
    );

  return (
    <TableWrapper>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableColumns />
          </TableRow>
        </TableHead>
        <TableBody>{content}</TableBody>
      </StyledTable>
      {paginator}
    </TableWrapper>
  );
};
