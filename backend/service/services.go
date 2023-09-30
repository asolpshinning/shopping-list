package service

// this package is actually unnecessary for this simple API functions, but it's usually included when there are more complex business logic
// that should be included in the service layer. In this case, it's just a wrapper around the datastore to illustrate how it can be used
import (
	"context"

	openapi "github.com/asolpshinning/shopping-list/backend/api/gen"
)

func (m *mgr) GetShoppingList(ctx context.Context) ([]*openapi.ShoppingItem, error) {
	return m.ds.GetShoppingList(ctx)
}

func (m *mgr) AddShoppingItem(ctx context.Context, item openapi.ShoppingItem) error {
	return m.ds.AddShoppingItem(ctx, item)
}

func (m *mgr) EditShoppingItem(ctx context.Context, item openapi.ShoppingItem) error {
	return m.ds.EditShoppingItem(ctx, item)
}

func (m *mgr) DeleteShoppingItem(ctx context.Context, itemID int) error {
	return m.ds.DeleteShoppingItem(ctx, itemID)
}
