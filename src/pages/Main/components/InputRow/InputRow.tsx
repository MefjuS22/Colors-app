import { TextField } from "@mui/material";

export const InputRow = () => {
  return (
    <TextField
      label="id"
      variant="outlined"
      size="small"
      color="primary"
      type="number"
      inputProps={{
        min: 1,
      }}
    />
  );
};
