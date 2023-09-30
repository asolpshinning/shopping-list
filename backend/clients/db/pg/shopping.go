package postgres

import (
	"context"
	"errors"

	openapi "github.com/asolpshinning/shopping-list/backend/api/gen"
	"github.com/asolpshinning/shopping-list/backend/config"
)

func (c *client) GetShoppingList(ctx context.Context) ([]*openapi.ShoppingItem, error) {
	var items []*openapi.ShoppingItem
	query := "SELECT * FROM " + config.DB_SHOPPING_TABLE
	rows, err := QueryPgDB(query)
	if err != nil {
		log(ctx).Errorf("failed to query db when getting items: %v", err)
		return nil, errors.New("failed to query db when getting items")
	}
	defer rows.Close()
	for rows.Next() {
		var item openapi.ShoppingItem
		err := rows.Scan(&item.Id, &item.Name, &item.Description, &item.Quantity, &item.Purchased)
		if err != nil {
			log(ctx).Errorf("failed to scan row when getting items: %v", err)
			return nil, errors.New("failed to scan row when getting items")
		}
		items = append(items, &item)
	}

	return items, nil
}

func (c *client) AddShoppingItem(ctx context.Context, item openapi.ShoppingItem) error {
	sess := *c.client
	defer sess.Close()
	_, err := sess.Collection("items").Insert(item)
	if err != nil {
		log(ctx).Errorf("failed to add item: %v", err)
		return errors.New("failed to add item")
	}
	return nil
}

func (c *client) EditShoppingItem(ctx context.Context, item openapi.ShoppingItem) error {
	sess := *c.client
	err := sess.Collection("items").Find("id = ?", item.Id).Update(item)
	if err != nil {
		log(ctx).Errorf("failed to edit item: %v", err)
		return errors.New("failed to edit item")
	}
	return nil
}

func (c *client) DeleteShoppingItem(ctx context.Context, itemID int) error {
	sess := *c.client
	err := sess.Collection("items").Find("id = ?", itemID).Delete()
	if err != nil {
		log(ctx).Errorf("failed to delete item: %v", err)
		return errors.New("failed to delete item")
	}
	return nil
}
