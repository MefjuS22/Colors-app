import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import {
  StyledTable,
  StyledTableRow,
  TableWrapper,
} from "./TableComponentStyles";
import { TableContents } from "./components.tsx/TableContents";
import { TableColumns } from "./components.tsx/TableColumns";
import { useSearchParams } from "react-router-dom";
import { useProduct, useProductsData } from "../../../../hooks/useProductsData";
import { PagesRow } from "../PagesRow/PagesRow";

export const TableComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { productsResponse } = useProductsData();
  const totalPages = productsResponse?.total_pages;

  const paginator = totalPages && searchParams.has('page') && (
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

  const content = searchParams.has("id") && !searchParams.has('page') ? (
    <TableSingleProduct />
  ) : (
    <>
      <TableContents />
    </>
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

export const TableSingleProduct = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id")!;

  const { product } = useProduct(Number(id));

  if (!product) {
    return null;
  }

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
};
