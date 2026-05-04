package main

import "fmt"

func makeCoffee(num int) {
	fmt.Printf("Making %d cup of coffee...\n", num)
}

func main() {
	// makeCoffee()

	howManyTimesMakeCoffee := 50

	for i := 1; i < howManyTimesMakeCoffee; i++ {
		// if i == 6 {
		// 	break
		// }
		// if i%2 == 0 {
		// 	continue
		// }
		// if i%2 == 1 {
		// 	continue
		// }
		makeCoffee(i)
	}

}
