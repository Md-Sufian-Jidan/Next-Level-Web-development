package main // executable package
import "fmt"

// import (
// 	"Module67GoAdvancedConceptsPackagesandTooling/payment"
// 	"Module67GoAdvancedConceptsPackagesandTooling/test"
// 	"fmt"
// )

// func init() {
// 	fmt.Println("Initializing db...")
// }

// func testing() {
// 	fmt.Println("I am in testing the function")
// }

// callback function
// First class citizen =>

// func process(sayHello func()) {
// 	sayHello()
// }

func calculate(a int, b int, operation func(x int, y int) int) int {
	return operation(a, b)
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

	// mockPm := test.MockPaymentMethod{}
	// paymentService := payment.NewPaymentService(mockPm)

	// paymentService.CheckOut()
	// color.Cyan("Prints text in cyan")

	// color.RGB(255, 128, 0).Println("foreground orange")
	// color.RGB(230, 42, 42).Println("foreground red")

	// color.BgRGB(255, 128, 0).Println("background orange")
	// color.BgRGB(230, 42, 42).Println("background red")

	// fmt.Println("I am in main function")
	// testing()

	// greet := func() {
	// 	fmt.Println("Hello there")
	// }

	// process(greet)

	add := func(n1 int, n2 int) int {
		return n1 + n2
	}

	multiply := func(n1 int, n2 int) int {
		return n1 * n2
	}

	fmt.Println(calculate(10, 20, add))
	fmt.Println(calculate(10, 20, multiply))

}

// module = bunch of packages
// go mod tidy command ta amra jei library use kortasi na mane kono jaigai use kortasi na sei library ta ke remove kore dei
