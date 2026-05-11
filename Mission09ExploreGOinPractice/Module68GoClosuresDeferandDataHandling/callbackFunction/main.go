package main

import "fmt"

// func init() {
// 	fmt.Println("Initializing db...")
// }

// func testing() {
// 	fmt.Println("I am in testing the function")
// }

// callback function
// First class citizen =>

// func process(sayHello func()) {
// 	sayHello()
// }

func calculate(a int, b int, operation func(x int, y int) int) int {
	return operation(a, b)
}

func main() {

	add := func(n1 int, n2 int) int {
		return n1 + n2
	}

	multiply := func(n1 int, n2 int) int {
		return n1 * n2
	}

	fmt.Println(calculate(10, 20, add))
	fmt.Println(calculate(10, 20, multiply))

	// anonymous callback function
	calculate(3, 5, func(x int, y int) int {
		return x - y
	})

}
