package main

import (
	"errors"
	"fmt"
)

type CustomError struct {
	message string
	code    int
}

func (cu *CustomError) Error() string {
	return cu.message
}

func login(password string) error {
	if password != "1234" {
		// return &CustomError{
		// 	message: "Password do not match",
		// 	code:    401,
		// }

		return errors.New("Password do not match")
	}
	return nil
}

func main() {

	err := login("2345")

	if err != nil {

		// CustomErr, ok := err.(*CustomError)
		// if !ok {
		// 	fmt.Println("Error is not of type CustomError", err)
		// } else {
		// 	fmt.Println("Custom error", CustomErr)
		// 	fmt.Println(CustomErr.code)
		// }

		if CustomError, ok := err.(*CustomError); ok {
			fmt.Println("Custom Error", CustomError)
			fmt.Println("Custom Error Code", CustomError.code)
		}

		// fmt.Println("Error", err)

		// fmt.Println("Error", err, "Code", err.(*CustomError).code)
		// fmt.Println("Error", err, "Code", err.code)
	}

	users := map[int]string{
		1: "Mezba",
		2: "Mir",
		3: "Firoz",
	}

	name, ok := users[3]

	fmt.Println(name)
	fmt.Println(ok)

	fmt.Println("Main ends")
}
