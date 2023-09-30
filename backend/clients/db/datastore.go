package db

import (
	"context"
	"fmt"
	"strings"

	openapi "github.com/asolpshinning/shopping-list/backend/api/gen"
	"github.com/sirupsen/logrus"
)

// Datastore provides a common interface for available functions that all implementations
// must provide to be a valid Datastore.
type Datastore interface {
	GetShoppingList(ctx context.Context) ([]*openapi.ShoppingItem, error)
	AddShoppingItem(ctx context.Context, item openapi.ShoppingItem) error
	EditShoppingItem(ctx context.Context, item openapi.ShoppingItem) error
	DeleteShoppingItem(ctx context.Context, itemID int) error
}

// DatastoreFactory is a type for datastore factory methods
type DatastoreFactory func(opts map[string]string) (Datastore, error)

var datastoreFactories = make(map[string]DatastoreFactory)

// Register adds a DatastoreFactory for usage
func Register(name string, factory DatastoreFactory) {
	if factory == nil {
		logrus.Panicf("Datastore factory %s did not provide initialization function.", name)
	}

	_, registered := datastoreFactories[name]
	if registered {
		logrus.Warnf("Datastore factory %s already registered. Ignoring.", name)
	}
	datastoreFactories[name] = factory
}

// NewDatastore creates a configured datastore
func NewDatastore(datastoreType string, opts map[string]string) (Datastore, error) {
	factory, ok := datastoreFactories[datastoreType]
	if !ok {
		availableDatastores := make([]string, len(datastoreFactories))
		for k := range datastoreFactories {
			availableDatastores = append(availableDatastores, k)
		}
		return nil, fmt.Errorf("unknown Datastore type. Must be one of: %s", strings.Join(availableDatastores, ", "))
	}

	// create an instance of the requested Datastore
	return factory(opts)
}
