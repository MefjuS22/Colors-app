// import { useSearchParams } from "react-router-dom";
import { InputRow } from "./components/InputRow/InputRow";
import { TableComponent } from "./components/TableComponent/TableComponent";
// import { useEffect } from "react";
import { DetailsModal } from "./components/DetailsModal/DetailsModal";
import { MainWrapper } from "./MainStyles";

export const Main = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // useEffect(() => {
  //     setSearchParams(params => {
  //         if (!params.has('page')) {
  //             params.set('page', '1');
  //         }
  //         return params;
  //     });
  // }, []);
  return (
      <>
          <MainWrapper>
              <InputRow />
              {/* {errorComponent} */}
              <TableComponent />
          </MainWrapper>
          <DetailsModal />
      </>
  );
};
