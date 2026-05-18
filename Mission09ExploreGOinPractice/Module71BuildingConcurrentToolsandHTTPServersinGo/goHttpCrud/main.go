package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// create POST, update PUT, delete delete

type User struct {
	Id    int    `json:"id"`
	Name  string `json:"userName"`
	Age   int    `json:"age"`
	Email string `json:"email"`
}

var users = []User{
	{
		Id:    1,
		Name:  "Md Abu",
		Age:   19,
		Email: "mdabu@gmail.com",
	},
	{
		Id:    2,
		Name:  "Sufian",
		Age:   19,
		Email: "sufian@gmail.com",
	},
	{
		Id:    3,
		Name:  "Jidan",
		Age:   19,
		Email: "jidan@gmail.com",
	},
}

func main() {

	mux := http.NewServeMux() // /user /order

	mux.HandleFunc("GET /", rootHandler)                  // GET
	mux.HandleFunc("GET /health", healthHandler)          // GET
	mux.HandleFunc("POST /createUser", createUserHandler) // POST
	mux.HandleFunc("GET /users", getUsersHandler)         // GET

	fmt.Println("Server is running at port 5000")
	err := http.ListenAndServe(":5000", mux)
	if err != nil {
		fmt.Println("Server error", err)
	}

}

func rootHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Welcome to go server")
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Server is up and healthy")
}

func createUserHandler(w http.ResponseWriter, r *http.Request) {

	// if r.Method != "POST" {
	// 	w.WriteHeader(http.StatusMethodNotAllowed)
	// 	fmt.Fprintln(w, "Method not allowed")
	// 	return
	// }

	var newUser User

	err := json.NewDecoder(r.Body).Decode(&newUser)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		fmt.Fprintln(w, "Invalid request body")
		return
	}

	fmt.Println(newUser)
	newUser.Id = len(users) + 1
	users = append(users, newUser)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(newUser)

}

func getUsersHandler(w http.ResponseWriter, r *http.Request) {
	// fmt.Fprintln(w, "Server is up and healthy")
	w.Header().Set("Content-Type", "application/json")
	// users, _ := json.Marshal(users)
	// w.Write(users)
	json.NewEncoder(w).Encode(users)
}
