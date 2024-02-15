import { TextField } from "@mui/material";
import {useState, useEffect} from 'react'

type Props = {
  currentId: string; 
  setCurrentId: (id: string) => void;
}

export const InputRow = ({currentId, setCurrentId}: Props) => {
  const [debouncedValue, setDebouncedValue] = useState(currentId);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const handleChange = (value: string) => {
    if (timerId) clearTimeout(timerId);
    setDebouncedValue(value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentId(debouncedValue);
    }, 500);

    setTimerId(timer);

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [debouncedValue]);

  return (
    <TextField
      label="id"
      variant="outlined"
      size="small"
      color="primary"
      type="number"
      value={debouncedValue}
      onChange={(e) => handleChange(e.target.value)}
      inputProps={{
        min: 1,
      }}
    />
  );
};
