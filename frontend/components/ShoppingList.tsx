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
            <Box sx={{ width: '100%', paddingLeft: 20, paddingRight: 11, paddingTop: 4.5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 1.5 }}>
                    <Typography sx={{ color: 'black', fontFamily: 'sans-serif', fontSize: 18, fontWeight: 600 }}>
                        Your Items
                    </Typography>
                    <Button onClick={() => onClickAddItem(data)}>Add Item</Button>
                </Box>
                <Box component="ul" sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
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