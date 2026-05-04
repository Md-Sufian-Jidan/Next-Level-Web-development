package main

import "fmt"

// type additionalInfo struct {
// 	phone   string
// 	address string
// }

// type user struct {
// 	name     string
// 	email    string
// 	metaInfo additionalInfo
// }

type user struct {
	name string
	age  int
	role string
}

func main() {

	// user1 := user{"Jhon", "jhongmail.com"} // Positional

	// user1 := user{name: "Jhon", email: "jhongmail.com"} // key value pairs & industry standrad

	// user1.email = "jidan@gmail.com"

	// fmt.Printf("%+v", user1)

	// var user1 user

	// user1.name = "Md Abu Sufian"
	// user1.email = "jidan@gmail.com"

	// fmt.Println(user1)

	// user1 := user{
	// 	name:  "Jhon",
	// 	email: "jhongmail.com",
	// 	metaInfo: additionalInfo{
	// 		phone:   "107273434",
	// 		address: "2 no shahid nagar",
	// 	},
	// }

	// fmt.Printf("%+v", user1)

	newUser := func(name string, age int, role string) user {
		if name == "" {
			fmt.Println("User name is required")
			return user{}
		}

		if age <= 0 {
			fmt.Println("User age is required")
			return user{}
		}

		return user{
			name: name,
			age:  age,
			role: role,
		}
	}

	jidan := newUser("jidan", 19, "Super Admin")
	fmt.Print(jidan)

}
