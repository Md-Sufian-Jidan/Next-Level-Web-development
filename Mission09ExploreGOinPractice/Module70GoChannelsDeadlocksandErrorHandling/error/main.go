package main

import (
	"errors"
	"fmt"
)

// var err error

func main() {

	// data, err := doSomething()

	// if err == nil { // error nai

	// }
	// if err != nil { // error ache

	// }

	result, err := divide(1, 2)

	if err != nil {
		fmt.Println("Error from the divide function", err)
	}

	fmt.Println(result)

}

func divide(a int, b int) (int, error) {
	if b == 0 {
		return 0, errors.New("Can not divide by zero")
	}
	return a / b, nil
}
