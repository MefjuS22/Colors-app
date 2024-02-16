import { TextField } from "@mui/material";
import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const InputRow = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const debounceTimeout = useRef<number>();

  const getValue = () => {
    if (searchParams.get("id") && !searchParams.has("page")) {
      return searchParams.get("id");
    }
    return "";
  };
  const [value, setValue] = useState(getValue());

  const handleSearchParamsChange = (value: string) => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
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
    }, 500);
  };

  const handleChange = (value: string) => {
    setValue(value);
    handleSearchParamsChange(value);
  };
 

  return (
    <TextField
      label="id"
      variant="outlined"
      size="small"
      color="primary"
      type="number"
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      inputProps={{
        min: 1,
      }}
    />
  );
};
