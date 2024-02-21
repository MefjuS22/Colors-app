import { Box, styled } from "@mui/material";

export const ModalTile = styled(Box)(
  ({ borderColor }: { borderColor?: string }) => ({
    width: "80%",
    borderTop: borderColor ? `3px solid ${borderColor}` : 'inherit',
    backgroundColor: "#5c5c5c",
    borderRadius: "8px",
    padding: "10px",
  })
);
