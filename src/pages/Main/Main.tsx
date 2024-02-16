import { InputRow } from "./components/InputRow/InputRow";
import { TableComponent } from "./components/TableComponent/TableComponent";
import { DetailsModal } from "./components/DetailsModal/DetailsModal";
import { MainWrapper } from "./MainStyles";

export const Main = () => {
  return (
    <>
      <MainWrapper>
        <InputRow />
        <TableComponent />
      </MainWrapper>
      <DetailsModal />
    </>
  );
};
