package main

import "fmt"

type PaymentMethod interface {
	pay(amount float64)
}

type Bkash struct {
	apiKey string
}

type Nagad struct {
	apiKey string
}

// bkash pay method
func (bk *Bkash) pay(amount float64) {
	// acctual payment logic
	fmt.Printf("Paying %.2f tk with Bkash", amount)
}

// nagad pay method
func (ng *Nagad) pay(amount float64) {
	fmt.Printf("Paying %.2f with nagad", amount)
}

type PaymentService struct {
	method PaymentMethod
}

func NewPaymentService(method PaymentMethod) *PaymentService {
	return &PaymentService{
		method: method,
	}

}

func NewNagad(apiKey string) *Nagad {
	return &Nagad{
		apiKey: apiKey,
	}
}
func (ps PaymentService) checkOut() {
	// bkash := Bkash{apiKey: "123456789"}
	// bkash.pay(100.00)
	ps.method.pay(10.00)
}

type MockPaymentMethod struct {
}

func (mockPm MockPaymentMethod) pay(amount float64) {
	// test logic
	fmt.Println("Testing payment method")
}

func main() {
	// bkash := Bkash{apiKey: "1234567890"}
	// paymentService := NewPaymentService(bkash)

	// paymentService := PaymentService{
	// 	// method: bkash,
	// }

	// nagad := Nagad{apiKey: "09876543412"}
	// nagad := NewNagad("0987654321")
	// paymentService := NewPaymentService(nagad)

	mockPm := MockPaymentMethod{}
	paymentService := NewPaymentService(mockPm)

	paymentService.checkOut()
}
