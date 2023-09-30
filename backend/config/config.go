package config

import (
	"strconv"

	. "github.com/asolpshinning/shopping-list/backend/config/viper_pkg"
)

var (
	NUM_ALLOWED_ORIGINS = "0" // Get("NUM_ALLOWED_ORIGINS")
)

func ALLOWED_ORIGIN_(i int) string {
	return Get("ALLOWED_ORIGIN_" + strconv.Itoa(i))
}

func ALLOWED_ORIGINS() ([]string, error) {
	numberAllowedOrigins, err := strconv.Atoi(NUM_ALLOWED_ORIGINS)
	if err != nil {
		return nil, err
	}
	var allowedOrigins []string
	for i := 0; i < numberAllowedOrigins; i++ {
		allowedOrigins = append(allowedOrigins, ALLOWED_ORIGIN_(i))
	}
	allowedOrigins = append(allowedOrigins, "http://localhost:3000")
	return allowedOrigins, nil
}

// Hard coded and used as vars
var ALLOWED_METHODS = "GET,OPTIONS,POST,DELETE,PUT,PATCH"
var ALLOWED_HEADERS = "Access-Control-Allow-Headers,Origin,Accept,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization,X-Version"
