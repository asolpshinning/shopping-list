import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { ShoppingData, ShoppingItem, ShoppingState } from "@/types/shopping";

const findItemIndex = (items: ShoppingItem[], target: ShoppingItem | number): number => {
    return items.findIndex(item => {
        if (typeof target === 'number') {
            return item.id === target;
        } else {
            return item.id === target.id;
        }
    });
};








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
                    const updatedItems = res.data.map((item: ShoppingItem) => ({
                        ...item,
                        purchased: !item.purchased ? false : item.purchased,
                    }));

                    setShoppingData({ ...shoppingData, items: updatedItems, loading: false });
                })
                .catch(err => {
                    setShoppingData({ ...shoppingData, error: true, loading: false });
                    console.error(err);
                });
        }
        fetchItems();
    }, []);

    const handleItemSaveData = (state: ShoppingState) => {
        const updatedShoppingItems = shoppingData.items ? [...shoppingData.items] : [];
        if (state.itemActionType === 'add' && state.currentItem) {
            axios
                .post("http://localhost:8080/shopping/items", state.currentItem, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(() => {
                    updatedShoppingItems.push(state.currentItem as ShoppingItem);
                    setShoppingData({ ...shoppingData, items: updatedShoppingItems });
                })
                .catch(err => {
                    setShoppingData({ ...shoppingData, error: true, loading: false });
                    console.error(err);
                });


        } else if (state.itemActionType === 'edit' && state.currentItem) {
            const { name, description, quantity, purchased } = state.currentItem;
            const payload = { name, description, quantity, purchased };
            axios
                .patch("http://localhost:8080/shopping/items/" + state.currentItem.id, payload, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(() => {
                    if (state.currentItem) {
                        let i = findItemIndex(updatedShoppingItems, state.currentItem);
                        updatedShoppingItems[i] = state.currentItem as ShoppingItem;
                    }
                    setShoppingData({ ...shoppingData, items: updatedShoppingItems });
                    console.log("updatedShoppingItems", updatedShoppingItems);
                })
                .catch(err => {
                    setShoppingData({ ...shoppingData, error: true, loading: false });
                    console.error(err);
                });

        }


    };

    const handleConfirmDeleteData = (state: ShoppingState) => {
        axios
            .delete("http://localhost:8080/shopping/items/" + state.currentItem?.id)
            .then(() => {
                let updatedShoppingItems = [...shoppingData.items];
                if (state.currentItem) {
                    let i = findItemIndex(updatedShoppingItems, state.currentItem);
                    updatedShoppingItems.splice(i, 1);
                }
                setShoppingData({ ...shoppingData, items: updatedShoppingItems });
            })
            .catch(err => {
                setShoppingData({ ...shoppingData, error: true, loading: false });
                console.error(err);
            });
    };

    const handleMarkItemPurchased = (item: ShoppingItem) => {
        const { name, description, quantity, purchased } = item;
        const payload = { name, description, quantity, purchased };
        payload.purchased = !payload.purchased;
        axios
            .patch("http://localhost:8080/shopping/items/" + item.id, payload, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(() => {
                let newShoppingItems = [...shoppingData.items];
                let i = findItemIndex(newShoppingItems, item);
                newShoppingItems[i].purchased = !newShoppingItems[i].purchased;
                setShoppingData({ ...shoppingData, items: newShoppingItems });
            })
            .catch(err => {
                setShoppingData({ ...shoppingData, error: true, loading: false });
                console.error(err);
            });
    };

    return { shoppingData, handleItemSaveData, handleConfirmDeleteData, handleMarkItemPurchased };
}

export default useShoppingData;