import { ChangeEvent, ReactElement } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ListItem, Button } from '.';
import { ShoppingData, ShoppingItem, ShoppingState } from '@/types/shopping';


interface ShoppingListProps {
    reveal: boolean;
    data: ShoppingData;
    onClickAddItem: (data: ShoppingData) => void;
    onMarkedAsPurchased: (item: ShoppingItem) => void;
    onClickEdit: (item: ShoppingItem) => void;
    onClickDelete: (item: ShoppingItem) => void;
}

const ShoppingList: React.FC<ShoppingListProps> = ({
    reveal,
    data,
    onClickAddItem,
    onMarkedAsPurchased,
    onClickEdit,
    onClickDelete,
}): ReactElement | null => {
    return (
        reveal ? (
            <Box>

                <Box>
                    <Typography>
                        Your Items
                    </Typography>
                    <Button onClick={() => onClickAddItem(data)}>Add Item</Button>
                </Box>
                <Box component="ul">
                    {data.items.map(item => {
                        return (
                            <ListItem
                                key={item.id}
                                onSelect={() => onMarkedAsPurchased(item)}
                                onEdit={() => onClickEdit(item)}
                                onDelete={() => onClickDelete(item)}
                                checked={item.purchased}
                                primaryText={item.name}
                                secondaryText={item.description}
                            />
                        );
                    })}
                </Box>
            </Box>
        ) : null
    );
}

export default ShoppingList;