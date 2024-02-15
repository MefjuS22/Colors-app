import { useSearchParams } from "react-router-dom";
import { InputRow } from "../../components/InputRow/InputRow";
import { PagesRow } from "../../components/PagesRow/PagesRow";
import { TableComponent } from "../../components/TableComponent/TableComponent";

export const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page"));
  const id = Number(searchParams.get("id"));

  return (
    <>
    <button onClick={() => setSearchParams({ page: "2" })}>Set page to 2</button>
    <button onClick={() => setSearchParams({ id: "2" })}>Set id to 2</button>
    <button onClick={() => setSearchParams({})}>reset</button>
    currentPage: {page}
    currentId: {id}
      <InputRow />
      <PagesRow />
      <TableComponent />
    </>
  );
};
