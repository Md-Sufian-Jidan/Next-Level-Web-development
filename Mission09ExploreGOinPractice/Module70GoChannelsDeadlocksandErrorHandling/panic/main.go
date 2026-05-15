package main

import (
	"fmt"
	"log"
)

func doSomething() {

	defer func() {
		fmt.Println("Deffered function ran")
		r := recover()
		if r != nil {
			fmt.Println("Recovered form", r)
		}
	}()

	panic("Something really bad happens") // missile
}

func doAnotherThing() {

	defer func() {
		fmt.Println("Defered from the do another thing")
	}()

	log.Fatal("Something very big happen")
}

func main() {
	// doSomething()
	doAnotherThing()

	fmt.Println("Main completed normally")
}
