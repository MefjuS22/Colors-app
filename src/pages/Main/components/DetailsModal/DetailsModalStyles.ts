import { Box, styled } from "@mui/material";

export const ModalTile = styled(Box)(
    ({ borderColor }: { borderColor: string }) => ({
        width: '80%',
        borderTop: `3px solid ${borderColor}`,
        backgroundColor: '#5c5c5c',
        borderRadius: '8px',
        padding: '10px'
    })
  );