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
            <Box>
                <Box>
                    <Typography>
                        Delete Item?
                    </Typography>
                    <Typography>
                        Are you sure you want to delete this item? This cannot be undone.
                    </Typography>
                </Box>
                <Box>
                    <Button variant="text" onClick={onExit}>
                        Cancel
                    </Button>
                    <Button onClick={onConfirm}>
                        Delete
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default DeleteItemModal;