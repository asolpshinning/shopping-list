import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { ShoppingData, ShoppingState } from "@/types/shopping";

// For fetching data from the backend and updating the shopping data for rendering
const useShoppingData = () => {
    const [shoppingData, setShoppingData] = useState<ShoppingData>({
        items: [],
        loading: true,
        error: false,
    });
    useEffect(() => {
        const fetchItems = async () => {
            axios
                .get("http://localhost:8080/shopping/items")
                .then(res => {
                    setShoppingData({ ...shoppingData, items: res.data, loading: false });
                })
                .catch(err => {
                    setShoppingData({ ...shoppingData, error: true, loading: false });
                    console.error(err);
                });
        }
        fetchItems();
    }, []);
    const handleItemSaveData = (state: ShoppingState) => {
        // Implement save logic here to db first
        // axiosEditCurrentItem(state.currentItem)
        // axiosAddNewItem(state.currentItem)
        // only if this succeeds, then do the following:
        const updatedShoppingItems = shoppingData.items ? [...shoppingData.items] : [];
        if (state.itemActionType === 'add' && state.currentItem) {
            // Since there is no current item, add new item to the array
            updatedShoppingItems.push(state.currentItem);
        } else if (state.itemActionType === 'edit' && state.currentItem) {
            updatedShoppingItems[state.currentItem.id] = state.currentItem;
        }

        setShoppingData({ ...shoppingData, items: updatedShoppingItems });

    };

    const handleConfirmDeleteData = (state: ShoppingState) => {
        // Implement delete logic here
        // axiosDeleteItem(state.currentItem)
        // only if this succeeds, then do the following:
        const updatedShoppingItems = [...shoppingData.items];
        if (state.currentItem) {
            updatedShoppingItems.splice(state.currentItem.id, 1);
        }
        setShoppingData({ ...shoppingData, items: updatedShoppingItems });
    };

    const handleMarkItemPurchased = (e: ChangeEvent<HTMLInputElement>, state: ShoppingState) => {
        // Implement mark item purchased axios logic here
        // axiosMarkItemPurchased(state.currentItem)
        // only if this succeeds, then do the following:
        const updatedShoppingItems = [...shoppingData.items];
        if (state.currentItem) {
            updatedShoppingItems[state.currentItem.id].purchased = e.target.checked;
        }
        setShoppingData({ ...shoppingData, items: updatedShoppingItems });
    };

    return { shoppingData, handleItemSaveData, handleConfirmDeleteData, handleMarkItemPurchased };
}

export default useShoppingData;