package main

import "fmt"

// --- Exercise 2: Basic Function ---
// TODO: Write the addNumbers function here
// It should take two ints and return an int

func addNumbers(num1 int, num2 int) int {
	return num1 + num2
}

// --- Exercise 3: Multiple Return Values ---
// TODO: Write the rectangleProperties function here
// It should take length and width, and return area and perimeter

func rectangleProperties(length int, width int) (area int, perimeter int) {
	area = length * width
	perimeter = 2 * (length + width)
	return area, perimeter
}

// --- Exercise 4: Putting it all together (Named Returns) ---
// TODO: Write the calculateDiscount function here
// It should take productName and originalPrice, and use named returns for product and finalPrice

func calculateDiscount(productName string, originalPrice int) (string, int) {
	const discount float64 = .20
	product := productName
	finalPrice := originalPrice - int(float64(originalPrice)*discount)
	return product, finalPrice
}

func main() {
	fmt.Println("--- Exercise 1: Variables & Formatting ---")
	// TODO: Declare constant for author, variables for title, pages, price
	// TODO: Print using fmt.Printf
	const author = "Md Abu Sufian Jidan"
	var title = "Next Level Programming"
	var pages = 120
	var price = 26

	fmt.Printf("The author of this book is %s", author)
	fmt.Printf("The title of the book is %s", title)
	fmt.Printf("Total pages of the book is %d", pages)
	fmt.Printf("The price of the book is %d", price)

	fmt.Println("\n--- Exercise 2: Basic Function ---")
	// TODO: Call addNumbers here and print the result
	fmt.Printf("%d\n", addNumbers(1, 2))

	fmt.Println("\n--- Exercise 3: Multiple Return Values ---")
	// TODO: Call rectangleProperties here and print area and perimeter
	area, perimeter := rectangleProperties(20, 30)
	fmt.Printf("%d %d\n", area, perimeter)

	fmt.Println("\n--- Exercise 4: Putting it all together ---")
	// TODO: Call calculateDiscount here and print the result
	product, finalPrice := calculateDiscount("Book", 100)
	fmt.Printf("%s %d\n", product, finalPrice)
}
