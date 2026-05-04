package main

import "fmt"

func main() {
	day := "sun"

	// switch day { // tagged switch
	// case "Sat":
	// 	fmt.Println("Off day sleep more")
	// case "Fri":
	// 	fmt.Println("Work day")
	// default:
	// 	fmt.Println("Invalid Day")
	// }

	switch { // normal switch
	case day == "Sat":
		fmt.Println("Off day sleep more")
	case day == "Fri":
		fmt.Println("Work day")
	default:
		fmt.Println("Invalid Day")
	}
}
