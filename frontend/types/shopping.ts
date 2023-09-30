// Define the type for each shopping item
export type ShoppingItem = {
    id: number;
    name: string;
    description: string;
    quantity: number;
    purchased: boolean;
};

// Define the type for validations for item modal
export type Validations = {
    name?: { error: boolean; errorText: string };
    amount?: { error: boolean; errorText: string };
}

// Define the type for the shopping data (actual items, loading, error)
export type ShoppingData = {
    items: ShoppingItem[];
    loading: boolean;
    error: boolean;
};

// Define the type for the shopping state (item modal open, delete modal open, current item, etc.)
export type ShoppingState = {
    isItemModalOpen: boolean;
    isDeleteModalOpen: boolean;
    itemActionType: 'add' | 'edit';
    currentItem: ShoppingItem | null;
    currentItemValidations: Validations;
    comment?: string;
};