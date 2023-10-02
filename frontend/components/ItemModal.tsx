import { ChangeEvent } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import LastPageIcon from '@mui/icons-material/LastPage';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DropDownSelect from './DropDownSelect';
import Button from './Button'
import { ShoppingItem, Validations } from '@/types/shopping';
import styles from '@/styles/itemModal';

interface ItemModalProps {
    actionType: 'add' | 'edit';
    item: ShoppingItem | null;
    onExit: () => void;
    reveal: boolean;
    onFieldChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSave: () => void;
    validations: Validations;
}

const actionTypeLabels = {
    primaryButton: {
        add: 'Add Item',
        edit: 'Save Item',
    },
    primaryText: {
        add: 'Add an Item',
        edit: 'Edit an Item',
    },
    secondaryText: {
        add: 'Add new item below',
        edit: 'Edit item below',
    },
};

const ItemModal: React.FC<ItemModalProps> = ({
    actionType,
    item,
    onExit,
    reveal,
    onFieldChange,
    onSave,
    validations,
}) => {
    const handleFieldUpdate = (e: ChangeEvent<HTMLInputElement>) => {
        onFieldChange && onFieldChange(e);
    };
    return (
        <>
            <Modal open={reveal} onClose={onExit}>
                <Box sx={styles.container}>
                    <Box sx={styles.header}>
                        <Typography sx={{ fontFamily: 'Nunito' }}>
                            SHOPPING LIST
                        </Typography>
                        <LastPageIcon sx={styles.headerIcon} onClick={onExit} />
                    </Box>
                    <Box sx={styles.padding}>
                        <Typography sx={styles.primaryText}>
                            {actionTypeLabels.primaryText[actionType]}
                        </Typography>
                        <Typography sx={styles.secondaryText}>
                            {actionTypeLabels.secondaryText[actionType]}
                        </Typography>
                        <Box sx={{ paddingBottom: 15 }}>
                            <TextField
                                error={validations?.name?.error}
                                helperText={validations?.name?.errorText}
                                placeholder="Item name"
                                onChange={handleFieldUpdate}
                                variant="outlined"
                                fullWidth
                                value={item?.name}
                                inputProps={{
                                    sx: styles.inputText,
                                    name: 'name',
                                }}
                                sx={{ paddingBottom: 2 }}
                            />
                            <Box sx={{ position: 'relative' }}>
                                <TextField
                                    placeholder="Description"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={7}
                                    value={item?.description}
                                    onChange={handleFieldUpdate}
                                    inputProps={{
                                        maxLength: 100,
                                        name: 'description',
                                        sx: styles.inputText,
                                    }}
                                />
                                <Box sx={styles.counter}>
                                    {`${item?.description.length}/100`}
                                </Box>
                            </Box>
                            <DropDownSelect
                                onSelect={handleFieldUpdate}
                                value={item?.quantity}
                                amount={2 * (item?.quantity as number) || 5}
                                error={validations?.amount?.error}
                                errorText={validations?.amount?.errorText}
                            />
                            {actionType === 'edit' ? (
                                <FormGroup>
                                    <FormControlLabel sx={styles.checkbox}
                                        control={
                                            <Checkbox
                                                checked={item?.purchased}
                                                onChange={handleFieldUpdate}
                                                name="purchased"
                                            />
                                        }
                                        label="Purchased"
                                    />
                                </FormGroup>
                            ) : null}
                        </Box>
                    </Box>
                    <Box sx={styles.footer}>
                        <Button variant="text" onClick={onExit}>
                            Cancel
                        </Button>
                        <Button variant="contained" onClick={onSave}>
                            {actionTypeLabels.primaryButton[actionType]}
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default ItemModal;