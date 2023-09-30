import { ShoppingData, ShoppingItem, ShoppingState } from '@/types/shopping';
import { useState, ChangeEvent } from 'react';

export const useShoppingState = () => {
    const [shoppingState, setShoppingState] = useState<ShoppingState>({
        isItemModalOpen: false,
        isDeleteModalOpen: false,
        itemActionType: 'add',
        currentItem: null,
        currentItemValidations: {},
    });

    const handleClickAddItem = (data: ShoppingData) => {
        // open add item modal
        let currentItem: ShoppingItem = {
            id: data.items ? data.items.length : 0, // this does not affect the backend, but is used for rendering
            name: '',
            description: '',
            quantity: 0,
            purchased: false,
        };
        setShoppingState({ ...shoppingState, itemActionType: 'add', isItemModalOpen: true, currentItem, comment: "addItemButtonClicked" });
        console.log(shoppingState)
    };

    const handleClickEdit = (currentItem: ShoppingItem) => {
        setShoppingState({ ...shoppingState, itemActionType: 'edit', currentItem, isItemModalOpen: true, comment: "clickEditButton" });
        console.log(shoppingState)
    };


    const handleClickDelete = (currentItem: ShoppingItem) => {
        setShoppingState({ ...shoppingState, currentItem, isDeleteModalOpen: true });
    };

    const closeAddItem = () => {
        setShoppingState({ ...shoppingState, currentItem: null, isItemModalOpen: false });
    };

    const handleItemFieldUpdate = (e: ChangeEvent<HTMLInputElement>) => {
        let updatedItem = { ...shoppingState.currentItem };
        let { value, name, checked, type } = e.target;
        if (name === 'purchased') {
            updatedItem.purchased = checked;
        } else if (name === 'quantity') {
            updatedItem.quantity = parseInt(value);
        } else if (name === 'description') {
            updatedItem.description = value;
        } else if (name === 'name') {
            updatedItem.name = value;
        }
        setShoppingState({ ...shoppingState, currentItem: updatedItem as ShoppingItem, comment: "itemFieldUpdated" });
        console.log(shoppingState)
    };

    const handleItemModalClose = () => {
        setShoppingState({
            ...shoppingState,
            currentItem: null,
            isItemModalOpen: false,
            comment: "itemModalClosed"
        });
        console.log(shoppingState)
    }

    const handleDeleteModalClose = () => {
        setShoppingState({ ...shoppingState, isDeleteModalOpen: false });
    };

    return {
        shoppingState,
        handleClickAddItem,
        handleClickEdit,
        handleClickDelete,
        closeAddItem,
        handleItemFieldUpdate,
        handleItemModalClose,
        handleDeleteModalClose,
    };
};

export default useShoppingState;