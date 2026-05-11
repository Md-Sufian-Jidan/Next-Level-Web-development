package main

import "fmt"

// func multiplyBy(factor int) func(int) int { //
// 	return func(x int) int {
// 		return x * factor
// 	}
// }

func makeCounter() func() int {
	count := 0

	inner := func() int {
		count++
		return count
	}

	return inner
}

func main() {

	// double := multiplyBy(2) //func(x int) int {return x * factor}
	// fmt.Println(double(5))
	next := makeCounter()

	fmt.Println(next())
	fmt.Println(next())
	fmt.Println(next())

}
