import { ChangeEvent, ReactElement } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ListItem, Button } from '.';
import { ShoppingData, ShoppingItem, ShoppingState } from '@/types/shopping';


interface ShoppingListProps {
    reveal: boolean;
    data: ShoppingData;
    state: ShoppingState;
    onClickAddItem: (data: ShoppingData) => void;
    onMarkedAsPurchased: (e: ChangeEvent<HTMLInputElement>, state: ShoppingState) => void;
    onClickEdit: (item: ShoppingItem) => void;
    onClickDelete: (item: ShoppingItem) => void;
}

const ShoppingList: React.FC<ShoppingListProps> = ({
    reveal,
    data,
    state,
    onClickAddItem,
    onMarkedAsPurchased,
    onClickEdit,
    onClickDelete,
}): ReactElement | null => {
    const handleMarkedPurchased = (e: ChangeEvent<HTMLInputElement>) => {
        onMarkedAsPurchased(e, state);
    };
    const handleClickEdit = (item: ShoppingItem) => {
        onClickEdit(item);
    };
    const handleClickDelete = (item: ShoppingItem) => {
        onClickDelete(item);
    };
    const handleClickAddItem = (shoppingData: ShoppingData) => {
        onClickAddItem(shoppingData);
    }

    return (
        reveal ? (
            <Box>

                <Box>
                    <Typography>
                        Your Items
                    </Typography>
                    <Button onClick={() => handleClickAddItem(data)}>Add Item</Button>
                </Box>
                <Box component="ul">
                    {data.items.map(item => {
                        return (
                            <ListItem
                                key={item.id}
                                onSelect={e => {
                                    handleMarkedPurchased(e);
                                }}
                                onEdit={() => {
                                    handleClickEdit(item);
                                }}
                                onDelete={() => {
                                    handleClickDelete(item);
                                }}
                                selected={item.purchased}
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