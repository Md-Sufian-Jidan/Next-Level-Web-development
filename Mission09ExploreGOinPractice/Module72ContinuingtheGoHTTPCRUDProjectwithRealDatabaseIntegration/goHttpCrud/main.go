package main

import (
	"context"
	"fmt"
	"goHttpCrud/db"
	"net/http"

	"github.com/joho/godotenv"
)

func main() {
	var err error

	err = godotenv.Load()

	if err != nil {
		panic("Env file not found")
	}

	db.ConnectDb()

	defer db.Db.Close(context.Background())

	mux := http.NewServeMux() // /user /order

	mux.HandleFunc("GET /", rootHandler)                    // GET
	mux.HandleFunc("GET /health", healthHandler)            // GET
	mux.HandleFunc("POST /createUser", createUserHandler)   // POST
	mux.HandleFunc("GET /users", getUsersHandler)           // GET
	mux.HandleFunc("GET /users/{id}", getSingleUserHandler) // GET
	mux.HandleFunc("PUT /users/{id}", updateUserHandler)    // PUT
	mux.HandleFunc("DELETE /users/{id}", deleteUserHandler) // DELETE

	fmt.Println("Server is running at port 5000")
	err = http.ListenAndServe(":5000", mux)
	if err != nil {
		fmt.Println("Server error", err)
	}
}
