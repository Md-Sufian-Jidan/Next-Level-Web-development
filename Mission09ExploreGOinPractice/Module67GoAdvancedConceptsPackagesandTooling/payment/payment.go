package payment

import "fmt"

type paymentMethod interface {
	Pay(amount float64)
}

type bkash struct {
	apiKey string
}

type nagad struct {
	apiKey string
}

// bkash pay method
func (bk *bkash) pay(amount float64) {
	// acctual payment logic
	fmt.Printf("Paying %.2f tk with bkash", amount)
}

// nagad pay method
func (ng *nagad) pay(amount float64) {
	fmt.Printf("Paying %.2f with nagad", amount)
}

type paymentService struct {
	method paymentMethod
}

func NewPaymentService(method paymentMethod) *paymentService {
	return &paymentService{
		method: method,
	}

}

func NewNagad(apiKey string) *nagad {
	return &nagad{
		apiKey: apiKey,
	}
}
func (ps paymentService) CheckOut() {
	// bkash := bkash{apiKey: "123456789"}
	// bkash.pay(100.00)
	ps.method.Pay(10.00)
}
