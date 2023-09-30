/*
 * Shopping List Service for adding, editing and removing planned shopping items
 *
 * Shopping List Service
 *
 * API version: 0.1.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package handlers

import (
	"context"
	"errors"
	"net/http"

	. "github.com/asolpshinning/shopping-list/backend/api/gen"
)

// ShoppingAPIService is a service that implements the logic for the ShoppingAPIServicer
// This service should implement the business logic for every endpoint for the ShoppingAPI API.
// Include any external packages or services that will be required by this service.
type ShoppingAPIService struct {
}

// NewShoppingAPIService creates a default api service
func NewShoppingAPIService() ShoppingAPIServicer {
	return &ShoppingAPIService{}
}

// DeleteItem - Delete an existing item from the shopping list
func (s *ShoppingAPIService) DeleteItem(ctx context.Context, itemID float32) (ImplResponse, error) {
	// TODO - update DeleteItem with the required logic for this service method.
	// Add api_shopping_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.

	// TODO: Uncomment the next line to return response Response(204, {}) or use other options such as http.Ok ...
	// return Response(204, nil),nil

	// TODO: Uncomment the next line to return response Response(401, Error{}) or use other options such as http.Ok ...
	// return Response(401, Error{}), nil

	// TODO: Uncomment the next line to return response Response(403, Error{}) or use other options such as http.Ok ...
	// return Response(403, Error{}), nil

	// TODO: Uncomment the next line to return response Response(404, Error{}) or use other options such as http.Ok ...
	// return Response(404, Error{}), nil

	// TODO: Uncomment the next line to return response Response(500, Error{}) or use other options such as http.Ok ...
	// return Response(500, Error{}), nil

	return Response(http.StatusNotImplemented, nil), errors.New("DeleteItem method not implemented")
}

// GetItems - Get the items of the shopping list
func (s *ShoppingAPIService) GetItems(ctx context.Context) (ImplResponse, error) {
	// TODO - update GetItems with the required logic for this service method.
	// Add api_shopping_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.

	// TODO: Uncomment the next line to return response Response(200, []ShoppingItem{}) or use other options such as http.Ok ...
	// return Response(200, []ShoppingItem{}), nil

	// TODO: Uncomment the next line to return response Response(401, Error{}) or use other options such as http.Ok ...
	// return Response(401, Error{}), nil

	// TODO: Uncomment the next line to return response Response(403, Error{}) or use other options such as http.Ok ...
	// return Response(403, Error{}), nil

	// TODO: Uncomment the next line to return response Response(500, Error{}) or use other options such as http.Ok ...
	// return Response(500, Error{}), nil

	return Response(http.StatusNotImplemented, nil), errors.New("GetItems method not implemented")
}

// PatchItem - Update an existing item in the shopping list
func (s *ShoppingAPIService) PatchItem(ctx context.Context, itemID float32, patchItemRequest PatchItemRequest) (ImplResponse, error) {
	// TODO - update PatchItem with the required logic for this service method.
	// Add api_shopping_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.

	// TODO: Uncomment the next line to return response Response(200, ShoppingItem{}) or use other options such as http.Ok ...
	// return Response(200, ShoppingItem{}), nil

	// TODO: Uncomment the next line to return response Response(400, Error{}) or use other options such as http.Ok ...
	// return Response(400, Error{}), nil

	// TODO: Uncomment the next line to return response Response(401, Error{}) or use other options such as http.Ok ...
	// return Response(401, Error{}), nil

	// TODO: Uncomment the next line to return response Response(403, Error{}) or use other options such as http.Ok ...
	// return Response(403, Error{}), nil

	// TODO: Uncomment the next line to return response Response(404, Error{}) or use other options such as http.Ok ...
	// return Response(404, Error{}), nil

	// TODO: Uncomment the next line to return response Response(500, Error{}) or use other options such as http.Ok ...
	// return Response(500, Error{}), nil

	return Response(http.StatusNotImplemented, nil), errors.New("PatchItem method not implemented")
}

// PostItem - Post an item to the shopping list
func (s *ShoppingAPIService) PostItem(ctx context.Context, shoppingItem ShoppingItem) (ImplResponse, error) {
	// TODO - update PostItem with the required logic for this service method.
	// Add api_shopping_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.

	// TODO: Uncomment the next line to return response Response(200, PostItem200Response{}) or use other options such as http.Ok ...
	// return Response(200, PostItem200Response{}), nil

	// TODO: Uncomment the next line to return response Response(401, Error{}) or use other options such as http.Ok ...
	// return Response(401, Error{}), nil

	// TODO: Uncomment the next line to return response Response(403, Error{}) or use other options such as http.Ok ...
	// return Response(403, Error{}), nil

	// TODO: Uncomment the next line to return response Response(500, Error{}) or use other options such as http.Ok ...
	// return Response(500, Error{}), nil

	return Response(http.StatusNotImplemented, nil), errors.New("PostItem method not implemented")
}