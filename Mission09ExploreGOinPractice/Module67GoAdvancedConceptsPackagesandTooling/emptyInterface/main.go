package main

import "fmt"

// any * interface{}

// func Print(data any) {
// 	fmt.Println(data)
// }

// type assertion
// ok idiom

func Process(data any) {
	strData, ok := data.(string)
	if !ok {
		fmt.Println("Data is not string")
	} else {
		fmt.Println(strData)
	}

	intData, ok := data.(int)
	if ok {
		fmt.Println(intData)
	}

}

func main() {
	// var data interface{}

	// data = "Mizan"
	// fmt.Println(data)

	// data = 25
	// fmt.Println(data)

	// Print([]int{6, 7, 8, 9})
	// Print("Next Level")

	Process(10)
	// Process("10")

}
