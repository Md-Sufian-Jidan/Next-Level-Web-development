package main

import "fmt"

func main() {
	// numbers := [6]int{10, 20, 30, 40, 50, 60} // Partial array initialization
	// fmt.Println(numbers)

	// var orders = [6]int{10, 20, 30, 40, 50, 60}
	// slice := orders[1:4] // [start:end(excluded)]
	// slice := orders[:] // [start:end(excluded] len, cap, pointer
	// learningSlice := orders[1:4] // [start:end(excluded] len, cap, pointer
	// fmt.Println(learningSlice)

	// // learningSlice[0] = 100

	// learningSlice = append(learningSlice, 500)
	// learningSlice = append(learningSlice, 600)
	// learningSlice = append(learningSlice, 700)
	// learningSlice = append(learningSlice, 800)
	// learningSlice = append(learningSlice, 500)
	// learningSlice = append(learningSlice, 600)
	// learningSlice = append(learningSlice, 700)
	// learningSlice = append(learningSlice, 800)

	// fmt.Println(learningSlice)
	// fmt.Println("Orders", orders)

	// fmt.Println("The length of the slice is ", len(learningSlice))
	// fmt.Println("The cap of the slice is ", cap(learningSlice))

	var slice2 = []int{1, 2, 3}
	slice2 = append(slice2, 4)

	fmt.Println(slice2)
	fmt.Println(cap(slice2))

}
