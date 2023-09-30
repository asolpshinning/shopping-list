package postgres

import (
	"context"

	openapi "github.com/asolpshinning/shopping-list/backend/api/gen"
)

func (c *client) GetShoppingList(ctx context.Context) ([]*openapi.ShoppingItem, error) {

	return nil, nil
}

func (c *client) AddShoppingItem(ctx context.Context, item openapi.ShoppingItem) error {

	return nil
}

func (c *client) EditShoppingItem(ctx context.Context, item openapi.ShoppingItem) error {

	return nil
}

func (c *client) DeleteShoppingItem(ctx context.Context, itemID int) error {

	return nil
}
