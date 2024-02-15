import { Button, Dialog, DialogTitle } from "@mui/material";
import { ModalTile } from "./DetailsModalStyles";
import { Product } from "../../../../api/apiTypes";

type ModalProps = {
  product?: Product;
  isOpen: boolean;
  handleClose: () => void;
};

export const DetailsModal = ({ product, isOpen, handleClose }: ModalProps) => {
  const modalContent = product ? (
    <>
      <DialogTitle>Color details</DialogTitle>
      <ModalTile borderColor={product.color}>Id: {product.id}</ModalTile>
      <ModalTile borderColor={product.color}>Name: {product.name}</ModalTile>
      <ModalTile borderColor={product.color}>Year: {product.year}</ModalTile>
      <ModalTile borderColor={product.color}>Color HEX: {product.color}</ModalTile>
      <ModalTile borderColor={product.color}>Pantonevalue: {product.pantone_value}</ModalTile>
    </>
  ) : (
    <DialogTitle>No Product selected!</DialogTitle>
  );

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      PaperProps={{
        sx: {
          width: "80vw",
          height: "80vh",
          maxHeight: "500px",
          maxWidth: "500px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        },
      }}
    >
      {modalContent}
      <Button onClick={handleClose} variant="outlined" color="info">Close</Button>
    </Dialog>
  );
};
