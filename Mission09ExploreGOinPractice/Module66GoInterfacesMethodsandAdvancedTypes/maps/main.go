package main

import "fmt"

type user struct {
	name       string
	age        int
	isLoggedIn bool
}

func main() {

	// myMap := make(map[int]int)

	// myMap["user1Score"] = 5
	// myMap["user2Score"] = 10
	// myMap[2] = 5
	// myMap[3] = 10

	// fmt.Println(myMap)
	// fmt.Println(myMap[2])

	// myMap := map[string]string{
	// 	"name":    "Md Abu Sufian Jidan",
	// 	"success": "ok",
	// }

	// delete(myMap, "name")

	// // fmt.Println(myMap["name"])
	// fmt.Println(myMap)

	myMap := map[string]user{
		"data1": {
			name:       "Md Abu Sufian Jidan",
			age:        20,
			isLoggedIn: true,
		},
	}
	fmt.Println(myMap)

}
