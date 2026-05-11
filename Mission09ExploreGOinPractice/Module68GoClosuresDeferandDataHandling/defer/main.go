package main

import "fmt"

// func deferred(result int) {
// 	fmt.Println("deferred result: ", result)
// }

func example() int {
	result := 10

	// defer deferred(result) // deferred(10)

	defer func() {
		fmt.Println("deferred result: ", result)
	}()

	fmt.Println("I am from example fn: ", result)

	// result += 100
	result = result + 100

	return result // 110

}

func main() {

	// defer fmt.Println("I am deferred") // deferred function
	// fmt.Println("I am from main function")

	// example()
	fmt.Println("Return result", example())
}
