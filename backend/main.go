package main

import (
	"context"
	"log"
	"net/http"
	"time"

	g "github.com/asolpshinning/shopping-list/backend/api/gen"
	api "github.com/asolpshinning/shopping-list/backend/api/handlers"
	"github.com/asolpshinning/shopping-list/backend/clients/db"
	_ "github.com/asolpshinning/shopping-list/backend/clients/db/pg"
	"github.com/asolpshinning/shopping-list/backend/config"
	logger "github.com/asolpshinning/shopping-list/backend/log"
	"github.com/asolpshinning/shopping-list/backend/service"
	"github.com/sirupsen/logrus"
)

var opts = map[string]string{
	"Host":     config.DB_HOST,
	"User":     config.DB_USER,
	"Password": config.DB_PASSWORD,
	"Database": config.DB,
}

func logging(ctx context.Context) logrus.FieldLogger {
	return logger.Logger(ctx).WithField("package", "main")
}

func main() {
	logging(context.Background()).Infof("service started: %v", time.Now())

	// persistence layer
	ds, err := db.NewDatastore(config.DB, opts)
	if err != nil {
		logging(context.Background()).Fatalf("failed to create datastore: %v", err)
	}

	// business service layer
	svc := service.NewManager(ds)

	// api layer services
	miscellaneousAPIService := api.NewMiscellaneousAPIService()
	miscellaneousAPIController := g.NewMiscellaneousAPIController(miscellaneousAPIService)

	shoppingApiService := api.NewShoppingAPIService(&svc)
	shoppingApiController := g.NewShoppingAPIController(shoppingApiService)

	router := g.NewRouter(miscellaneousAPIController, shoppingApiController)

	srv := &http.Server{
		Addr:    ":" + config.SERVER_PORT,
		Handler: router,
	}

	log.Fatal(srv.ListenAndServe(), router)
}
