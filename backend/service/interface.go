package service

import (
	"context"

	openapi "github.com/asolpshinning/shopping-list/backend/api/gen"
	"github.com/asolpshinning/shopping-list/backend/clients/db"
)

type Manager interface {
	GetShoppingList(ctx context.Context) ([]*openapi.ShoppingItem, error)
	AddShoppingItem(ctx context.Context, item openapi.ShoppingItem) error
	EditShoppingItem(ctx context.Context, item openapi.ShoppingItem) error
	DeleteShoppingItem(ctx context.Context, itemID int) error
}

type mgr struct {
	ds db.Datastore
}

// NewManager is the constructor for Mgr
func NewManager(ds db.Datastore) Manager {
	return &mgr{
		ds: ds,
	}
}
