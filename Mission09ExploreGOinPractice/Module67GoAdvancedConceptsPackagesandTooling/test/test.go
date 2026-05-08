package test

import "fmt"

func init() {
	fmt.Println("I am from test package init function...")
}

type MockPaymentMethod struct {
}

func (mockPm MockPaymentMethod) Pay(amount float64) {
	// test logic
	fmt.Println("Testing payment method")
}

func test() {

}
