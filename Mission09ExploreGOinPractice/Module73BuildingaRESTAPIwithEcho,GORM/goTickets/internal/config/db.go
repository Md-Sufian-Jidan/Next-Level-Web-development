package config

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func ConnectDatabase(cfg *Config) *gorm.DB {

	dsn := cfg.Dsn
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		TranslateError: true,
	})

	if err != nil {
		panic("Failed to connect database")
	} else {
		println("Database connection successfully")
	}
	return db
}
