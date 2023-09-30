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