package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"slices"
	"strconv"

	"github.com/jackc/pgx/v5"
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
		Age:   20,
		Email: "sufian@gmail.com",
	},
	{
		Id:    3,
		Name:  "Jidan",
		Age:   20,
		Email: "jidan@gmail.com",
	},
}

var db *pgx.Conn

func connectDb() {
	// urlExample := "postgres://username:password@localhost:5432/database_name"

	var err error
	connStr := "postgres://postgres:admin@localhost:5432/go_http_crud"
	db, err = pgx.Connect(context.Background(), connStr)
	if err != nil {
		panic(err)
	}
	fmt.Println("Database connected successfully", db)
}

func main() {
	connectDb()

	defer db.Close(context.Background())

	mux := http.NewServeMux() // /user /order

	mux.HandleFunc("GET /", rootHandler)                    // GET
	mux.HandleFunc("GET /health", healthHandler)            // GET
	mux.HandleFunc("POST /createUser", createUserHandler)   // POST
	mux.HandleFunc("GET /users", getUsersHandler)           // GET
	mux.HandleFunc("GET /users/{id}", getSingleUserHandler) // GET
	mux.HandleFunc("PUT /users/{id}", updateUserHandler)    // PUT
	mux.HandleFunc("DELETE /users/{id}", deleteUserHandler) // DELETE

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

	// fmt.Println(newUser)
	// newUser.Id = len(users) + 1
	// users = append(users, newUser)

	query := `
	INSERT INTO users (username, age, email)
	VALUES ($1, $2, $3)
	RETURNING id
	`

	err = db.QueryRow(context.Background(), query, newUser.Name, newUser.Age, newUser.Email).Scan(&newUser.Id)

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprintln(w, "Failed to create user")
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(newUser)

}

func getUsersHandler(w http.ResponseWriter, r *http.Request) {
	// fmt.Fprintln(w, "Server is up and healthy")
	// users, _ := json.Marshal(users)
	// w.Write(users)
	query := `
	SELECT * FROM users;
	`

	rows, err := db.Query(context.Background(), query)

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprintln(w, "Failed to create user")
		return
	}

	defer rows.Close()

	var users []User

	for rows.Next() {
		var user User

		err := rows.Scan(&user.Id, &user.Name, &user.Age, &user.Email)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			fmt.Fprintln(w, "Could not scan user")
			return
		}
		users = append(users, user)
	}

	if rows.Err() != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprintln(w, "Error reading rows")
		return
	}

	// Send all users as a JSON response
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(users)
}

func getSingleUserHandler(w http.ResponseWriter, r *http.Request) {
	idParam := r.PathValue("id")
	// fmt.Printf("The value of id is %v and the type of the id is %T,", idParam, idParam)

	id, err := strconv.Atoi(idParam) // 1

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		fmt.Fprintln(w, "Invalid user id")
		return
	}

	for _, user := range users {
		if user.Id == id {
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(user)
			return
		}
	}

	w.WriteHeader(http.StatusNotFound)
	fmt.Fprintln(w, "User not found")

}

func updateUserHandler(w http.ResponseWriter, r *http.Request) {
	idParam := r.PathValue("id")

	id, err := strconv.Atoi(idParam)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		fmt.Fprintln(w, "Invalid user id")
		return
	}

	var updatedUser User

	err = json.NewDecoder(r.Body).Decode(&updatedUser)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		fmt.Fprintln(w, "Invalid user id")
		return
	}

	query := `
	UPDATE users
	set username = $1, age = $2, email = $3
	WHERE id = $4
	RETURNING id, username, age, email
	`

	err = db.QueryRow(context.Background(), query, updatedUser.Name, updatedUser.Age, updatedUser.Email, id).Scan(&updatedUser.Name, &updatedUser.Age, &updatedUser.Email, &updatedUser.Id)

	if err == pgx.ErrNoRows {
		w.WriteHeader(http.StatusNotFound)
		fmt.Fprintln(w, "User not found")
		return
	}

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprintln(w, "Could not update user")
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(updatedUser)

	// for idx, user := range users {
	// 	if user.Id == id {
	// 		updatedUser.Id = id
	// 		users[idx] = updatedUser

	// 		w.Header().Set("Content-Type", "application/json")
	// 		json.NewEncoder(w).Encode(updatedUser)
	// 		return
	// 	}
	// }

	// w.WriteHeader(http.StatusNotFound)
	// fmt.Fprintln(w, "User not found")

}

func deleteUserHandler(w http.ResponseWriter, r *http.Request) {
	idParam := r.PathValue("id") // "1"
	id, err := strconv.Atoi(idParam)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		fmt.Fprintln(w, "Invalid user id")
		return
	}

	for idx, user := range users {
		if user.Id == id {
			// users = append(users[:idx], users[idx+1:]...)
			users = slices.Delete(users, idx, idx+1)
			w.WriteHeader(http.StatusNoContent)
			return
		}
	}

	w.WriteHeader(http.StatusNotFound)
	fmt.Fprintln(w, "User not found")
}
