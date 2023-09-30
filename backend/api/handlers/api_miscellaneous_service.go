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
	"net/http"

	g "github.com/asolpshinning/shopping-list/backend/api/gen"
)

// MiscellaneousAPIService is a service that implements the logic for the MiscellaneousAPIServicer
// This service should implement the business logic for every endpoint for the MiscellaneousAPI API.
// Include any external packages or services that will be required by this service.
type MiscellaneousAPIService struct {
}

// NewMiscellaneousAPIService creates a default api service
func NewMiscellaneousAPIService() g.MiscellaneousAPIServicer {
	return &MiscellaneousAPIService{}
}

// GetHealth - Check if the application is running
func (s *MiscellaneousAPIService) GetHealth(ctx context.Context) (g.ImplResponse, error) {
	return g.Response(http.StatusOK, g.GetHealth200Response{Msg: "OK"}), nil
}
