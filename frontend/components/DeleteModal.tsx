import { FC } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from './Button';

interface DeleteItemModalProps {
    open: boolean;
    onExit: () => void;
    onConfirm: () => void;
}

const DeleteItemModal: FC<DeleteItemModalProps> = ({ open, onExit, onConfirm }) => {
    return (
        <Modal open={open} onClose={onExit}>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                borderRadius: 2
            }}>
                <Box sx={{ mb: 2, width: 400, paddingBottom: 8 }}>
                    <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                        Delete Item?
                    </Typography>
                    <Typography sx={{ color: 'grey.700' }}>
                        Are you sure you want to delete this item? This cannot be undone.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="text" onClick={onExit}>
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={onConfirm}>
                        Delete
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default DeleteItemModal;
