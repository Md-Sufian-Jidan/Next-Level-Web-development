package main

import "fmt"

func main() {
	// logical and
	// age := 18
	// nid := true

	// if age >= 18 && nid == true {
	// 	fmt.Println("You can vote")
	// }

	// if age >= 18 && nid == true {
	// 	fmt.Println("You can vote")
	// } else {
	// 	fmt.Println("You can not vote")
	// }

	displayMenu := func() {
		fmt.Println("Welcome to great calculator")
		fmt.Println("1) Calculate grade")
		fmt.Println("2) Check pass/fail status")
		fmt.Println("3) Exit the program")
		fmt.Print("Choose an option: ")
	}

	var choice int
	var score int
	running := true

	for running {
		displayMenu()
		fmt.Scan(&choice)

		switch choice {
		case 1:
			fmt.Println("Calculate grade")
			fmt.Print("For calculating the grade, give me your score between (1-100) ")
			fmt.Scan(&score)

			result := calculateGrade(score)

			if result == "Invalid score" {
				fmt.Println("Choose a valid number from 0 - 100")
			}

			fmt.Printf("You got %s grade", result)

			running = false
		case 2:
			fmt.Println("Check pass or fail")
			running = false
		case 3:
			fmt.Println("Exiting the program")
			running = false
		default:
			fmt.Println("Invalid input")
		}

		// if choice == 1 {
		// 	fmt.Print("Enter your score ")
		// 	fmt.Scan(&score)
		// 	calculateGrade(score)
		// 	break
		// } else if choice == 2 {
		// 	fmt.Print("Check pass or fail")
		// } else if score == 3 {
		// 	fmt.Print("Exiting the program")
		// } else {
		// 	fmt.Print("Invalid input")
		// }
	}

}

func calculateGrade(score int) string {
	if score >= 90 {
		return "A+"
	} else if score >= 80 && score <= 89 {
		return "A"
	} else if score >= 70 && score <= 79 {
		return "b"
	} else if score >= 60 && score <= 69 {
		return "C"
	} else if score >= 50 && score <= 59 {
		return "D"
	} else if score >= 0 && score < 50 {
		return "F"
	} else {
		return "Invalid score"
	}
}

func checkPassFail(score int) string {
	if score >= 50 {
		return "Pass"
	} else if score >= 0 && score < 49 {
		return "Failed"
	} else {
		return "Invalid score"
	}
}
