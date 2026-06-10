package db

import (
	"context"
	"fmt"
	"os"

	"github.com/jackc/pgx/v5"
)

var Db *pgx.Conn

func ConnectDb() {
	// urlExample := "postgres://username:password@localhost:5432/database_name"

	var err error
	// connStr := "postgres://postgres:admin@localhost:5432/go_http_crud"

	connStr := os.Getenv("DB_STRING")

	Db, err = pgx.Connect(context.Background(), connStr)

	if err != nil {
		panic(err)
	}
	fmt.Println("Database connected successfully")
}
