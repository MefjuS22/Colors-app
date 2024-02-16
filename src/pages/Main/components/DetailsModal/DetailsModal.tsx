import { Button, Dialog, DialogTitle } from "@mui/material";
import { ModalTile } from "./DetailsModalStyles";
import { useSearchParams } from "react-router-dom";
import { useSingleProductData } from "../../../../hooks/useProductsData";

export const DetailsModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const isModalOpen =
    searchParams.get("open") === "true" && searchParams.get("id") !== null;

  const handleCloseModal = () => {
    if (searchParams.has('page')){
      setSearchParams((params) => {
        params.delete("id");
        params.delete("open");
        return params;
      });
      return;
    }

    setSearchParams((params) => {
      params.delete("open");
      return params;
    });
    
  };

  const modalContent = isModalOpen && <ModalContent />;

  return (
    <Dialog
      open={isModalOpen}
      onClose={handleCloseModal}
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
      <Button
        onClick={handleCloseModal}
        variant="outlined"
        color="info"
      >
        Close
      </Button>
    </Dialog>
  );
};

const ModalContent = () => {
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  const { product } = useSingleProductData(Number(id));

  if (!product) {
    return null;
  }

  return (
    <>
      <DialogTitle>Color details</DialogTitle>
      <ModalTile borderColor={product.color}>Id: {product.id}</ModalTile>
      <ModalTile borderColor={product.color}>Name: {product.name}</ModalTile>
      <ModalTile borderColor={product.color}>Year: {product.year}</ModalTile>
      <ModalTile borderColor={product.color}>
        Color HEX: {product.color}
      </ModalTile>
      <ModalTile borderColor={product.color}>
        Pantonevalue: {product.pantone_value}
      </ModalTile>
    </>
  );
};
