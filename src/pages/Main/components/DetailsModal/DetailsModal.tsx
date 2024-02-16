import { Button, Dialog, DialogTitle } from '@mui/material';
import { ModalTile } from './DetailsModalStyles';
import { useSearchParams } from 'react-router-dom';
import { useProduct } from '../../../../hooks/useProductsData';

export const DetailsModal = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const handleCloseModal = () => {
        const pageParam = searchParams.get('page');
        
    }
    return (
        <Dialog
            open={
                searchParams.get('open') === 'true' &&
                searchParams.get('id') !== null
            }
            onClose={() => {
                setSearchParams(params => {
                    params.set('open', 'false');
                    params.set('id', String(params.get('id')));
                    return params;
                });
            }}
            PaperProps={{
                sx: {
                    width: '80vw',
                    height: '80vh',
                    maxHeight: '500px',
                    maxWidth: '500px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                },
            }}
        >
            <ModalContent />
            <Button
                onClick={() => {
                    setSearchParams(params => {
                        params.delete('open');
                        return params;
                    });
                }}
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

    const id = searchParams.get('id')!;

    const { product } = useProduct(Number(id));

    if (!product) {
        return null;
    }

    return (
        <>
            <DialogTitle>Color details</DialogTitle>
            <ModalTile borderColor={product.color}>Id: {product.id}</ModalTile>
            <ModalTile borderColor={product.color}>
                Name: {product.name}
            </ModalTile>
            <ModalTile borderColor={product.color}>
                Year: {product.year}
            </ModalTile>
            <ModalTile borderColor={product.color}>
                Color HEX: {product.color}
            </ModalTile>
            <ModalTile borderColor={product.color}>
                Pantonevalue: {product.pantone_value}
            </ModalTile>
        </>
    );
};