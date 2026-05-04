package main

import "fmt"

func change(x *int) {
	*x = 200
	fmt.Println("inside function:", *x)
}

func main() {
	a := 42
	// p := a // 42
	p := &a // 0xa665d4860c0 --> pointer

	// // p = 20
	a = 100

	// fmt.Println("a", a)
	// fmt.Println("P", p)
	// fmt.Println("P", *p)

	// & --> address of a variable
	// * --> dereference (value from address)

	*p = 1000

	// fmt.Println("a", a)
	// fmt.Println("P", p)
	// fmt.Println("P", *p)

	// fmt.Println(&a)

	// y := 1
	// change(&y)
	// fmt.Println("outside function y:", y)

	bigArray := [5]int{1, 2, 3, 4, 5}

	modifyWithoutPointer(bigArray)
	fmt.Println(bigArray)

	modifyWithPointer(&bigArray)
	fmt.Println(bigArray)

}

func modifyWithoutPointer(arr [5]int) {
	arr[0] = 999
	fmt.Println("Inside without pointer: ", arr)
}

func modifyWithPointer(arr *[5]int) {
	arr[0] = 111
	// (*arr)[0] = 111 // dereferences
	fmt.Println("Inside with pointer: ", *arr)
}

// Pointer basics
// Dereference Example
// Modify Value Using Pointer
// Pointer in Function
// Nil pointer

// Large data copy avoid করা যায়
// Struct modify করা যায়
// Performance improve হয়
