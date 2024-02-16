import { Alert } from "@mui/material";

export const ErrorComponent = ({errorMsg}: {errorMsg: string}) => {

  return <Alert severity="error">
    Server responded with: {errorMsg}
  </Alert>;
};
