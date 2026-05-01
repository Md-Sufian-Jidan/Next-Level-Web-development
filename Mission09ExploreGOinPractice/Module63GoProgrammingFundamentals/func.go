package main

import "fmt"

// func makeCoffee(coffeeType string, isSugar bool){

// 	// Use Printf for formatted string interpolation
// 	fmt.Printf("Making %s coffee with %t sugar\n", coffeeType, isSugar)
// }

func makeCoffee(kind string) (coffee string, price int) { // named return values
	// fmt.Printf("Making %s Coffee...../n", kind)
	price = 25
	coffee = fmt.Sprintf("%s coffee", kind)
	return
}

// func main() {
// 	// makeCoffee("Espresso", true)
// 	// makeCoffee("Cold Coffee", false)

// 	myCoffee, myBill := makeCoffee("Black")
// 	myCoffee2, myBill2 := makeCoffee("cold")

// 	fmt.Printf("I am having %s which costs $%d\n", myCoffee, myBill)
// 	fmt.Printf("I am having %s which costs $%d\n", myCoffee2, myBill2)

// 	name := "Next level"
// 	name = "Next Level Batch..."
// 	fmt.Print(name)
// }
