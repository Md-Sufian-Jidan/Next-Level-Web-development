package main

import "fmt"

// type user struct {
// 	name       string
// 	age        int
// 	isLoggedIn bool
// 	greet      func()
// }

type user struct {
	name       string
	age        int
	isLoggedIn bool
}

func main() {

	// user1 := user{
	// 	name:       "Md Abu Sufian Jidan",
	// 	age:        25,
	// 	isLoggedIn: false,
	// }

	// user1.greet = func() {
	// 	fmt.Println("Hello", user1.name)
	// }

	user1 := user{
		name:       "Md Abu Sufian",
		age:        25,
		isLoggedIn: false,
	}

	user1.greet()
	// pointerUser1 := &user1
	user1.login()

	// fmt.Printf("%+v", pointerUser1)
	fmt.Printf("%+v", user1)

	// user2 := user{
	// 	name:       "Md Abu Sufian Jidan",
	// 	age:        25,
	// 	isLoggedIn: false,
	// }
	// user2.greet()

}

func (u *user) login() {
	fmt.Println("Login called")
	u.isLoggedIn = true
}

func (u user) greet() {
	fmt.Println("Hello", u.name)
}
