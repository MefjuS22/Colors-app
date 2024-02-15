import {
  TableBody,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  StyledTable,
  TableWrapper,
} from "./TableComponentStyles";
import { Product } from "../../../../api/apiTypes";
import { TableContents } from "./components.tsx/TableContents";
import { TableColumns } from "./components.tsx/TableColumns";

export const TableComponent = ({
  products,
  isLoading,
  selectProduct
}: {
  products?: Product[] | Product;
  isLoading: boolean;
  selectProduct: (product: Product) => void
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
          <TableContents data={products} isLoading={isLoading} selectProduct={selectProduct}/>
        </TableBody>
      </StyledTable>
    </TableWrapper>
  );
};


