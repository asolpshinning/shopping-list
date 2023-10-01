import MuiListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import EditIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ChangeEvent } from 'react';
import styles from '@/styles/listItem';

type ListItemProps = {
    primaryText: string;
    secondaryText: string;
    checked: boolean;
    onSelect: (e: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    onEdit: () => void;
    onDelete: () => void;
};

const ListItem: React.FC<ListItemProps> = ({
    primaryText = '',
    secondaryText = '',
    checked = false,
    onSelect,
    onEdit,
    onDelete,
}) => {
    return (
        <MuiListItem
            secondaryAction={
                <Box>
                    <ListItemButton>
                        <EditIcon onClick={onEdit} />
                    </ListItemButton>
                    <ListItemButton>
                        <DeleteIcon onClick={onDelete} />
                    </ListItemButton>
                </Box>
            }
        >
            <ListItemIcon>
                <Checkbox onChange={onSelect} checked={checked} />
            </ListItemIcon>
            <ListItemText
                primary={
                    <Typography sx={checked ? styles.checkedPrimaryText : styles.primaryText}>
                        {primaryText}
                    </Typography>
                }
                secondary={
                    <Typography sx={checked ? styles.checkedSecondaryText : styles.secondaryText}>
                        {secondaryText}
                    </Typography>
                }
            />
        </MuiListItem>
    );
};

export default ListItem;