package main

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
