package main

import "fmt"

// func sumTwo(a, b int) int {
// 	return a + b
// }

func add(numbers ...int) int {
	total := 0

	for _, number := range numbers {
		total += number
	}
	return total
}

func great(prefix string, mps ...string) {
	for _, mp := range mps {
		fmt.Println(prefix, mp)
	}
}

func main() {
	// sum := sumTwo(5, 10)
	// fmt.Println(sum)

	// sum := add(5, 10, 23)
	// fmt.Println(sum)

	mps := []string{"Kamal", "jamal", "Bamal", "chamal", "Amal"}

	// great("Welcome", "Kamal", "jamal", "Bamal", "chamal")
	great("Welcome", mps...)

}

// Flexible amount of arguments
// Must be last parameter
// Internally slice
