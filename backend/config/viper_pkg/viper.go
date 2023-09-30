package viper_pkg

import (
	"os"

	"github.com/spf13/viper"
)

func init() {
	// Set the config name and type
	viper.SetConfigName(".env")
	viper.SetConfigType("env")
	// Set the path for the config file
	envPath, err := os.Getwd()
	if err != nil {
		panic(err)
	}
	viper.AddConfigPath(envPath)
	// Read the config file
	err = viper.ReadInConfig()
	if err != nil {
		panic(err)
	}
	// Bind environment variables to Viper
	viper.AutomaticEnv()
}

func Get(key string) string {
	return viper.GetString(key)
}
