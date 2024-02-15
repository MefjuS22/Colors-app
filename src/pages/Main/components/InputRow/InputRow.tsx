import { TextField } from "@mui/material";

type Props = {
  currentId: string; 
  setCurrentId: (id: string) => void;
}

export const InputRow = ({currentId, setCurrentId}: Props) => {

  const handleChange = (value: string) => {
    //future debouncing logic
    console.log(value)
    setCurrentId(value);
  };

  return (
    <TextField
      label="id"
      variant="outlined"
      size="small"
      color="primary"
      type="number"
      value={currentId}
      onChange={(e) => handleChange(e.target.value)}
      inputProps={{
        min: 1,
      }}
    />
  );
};
