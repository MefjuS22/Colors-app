import { TextField } from "@mui/material";
import { useSearchParams } from "react-router-dom";

export const InputRow = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (value: string) => {
    if (value.trim().length === 0) {
      setSearchParams((searchParams) => {
        searchParams.delete("id");
        return searchParams;
      });
      return;
    }

    setSearchParams({
      id: value,
    });
  };

  const getValue = () => {
    if (searchParams.get("id") && !searchParams.has("page")) {
      return searchParams.get("id");
    }
    return "";
  };

  return (
    <TextField
      label="id"
      variant="outlined"
      size="small"
      color="primary"
      type="number"
      value={getValue()}
      onChange={(e) => handleChange(e.target.value)}
      inputProps={{
        min: 1,
      }}
    />
  );
};
