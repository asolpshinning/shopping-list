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

type ListItemProps = {
    primaryText: string;
    secondaryText: string;
    selected: boolean;
    onSelect: (e: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    onEdit: () => void;
    onDelete: () => void;
};

const ListItem: React.FC<ListItemProps> = ({
    primaryText = '',
    secondaryText = '',
    selected = false,
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
                <Checkbox onChange={onSelect} checked={selected} />
            </ListItemIcon>
            <ListItemText
                primary={
                    <Typography>
                        {primaryText}
                    </Typography>
                }
                secondary={
                    <Typography>
                        {secondaryText}
                    </Typography>
                }
            />
        </MuiListItem>
    );
};

export default ListItem;