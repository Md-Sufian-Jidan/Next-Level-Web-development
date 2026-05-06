package main

import "fmt"

// ts ==> interface for data shape
// go ==> interface for behaviore contract

type Animal interface {
	speak()
}

type Dog struct{}
type Cat struct{}
type Human struct {
	name string
}

// dog er
func (d Dog) speak() {
	fmt.Println("Woof Woof")
}

// cat er
func (d Cat) speak() {
	fmt.Println("Meow Meow")
}

// Human er
func (h Human) speak() {
	fmt.Println("My name is ", h.name)
}

// func makeSound(d *Dog) {
// 	d.speak()
// }

// func makeSound(c *Cat) {
// 	c.speak()
// }

func makeSound(a Animal) {
	a.speak()
}

func main() {

	// Abstraction, Polymorphism, Inheritance & Encapsulation

	dexter := Dog{}
	cater := Cat{}
	human := Human{
		name: "Md Abu sufian jidan",
	}

	makeSound(dexter)
	makeSound(cater)
	makeSound(human)

}
