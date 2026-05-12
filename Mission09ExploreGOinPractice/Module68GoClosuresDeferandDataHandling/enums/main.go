package main

import "fmt"

// enum
// const pi = 3.1416
// const (
// 	admin     = "Mezba"
// 	moderator = "Sabbir"
// )

type weekDay int

const (
	Monday weekDay = iota // 0
	Tuesday
	Wednesday
	Thursday
	Friday
	Saturday
	Sunday
)

// Without enum
// func getWorkDayStatus(day string) string {
// 	switch day {
// 	case "Sunday", "Monday", "Tuesday", "Wednesday":
// 		return "Office is open"
// 	case "Thursday":
// 		return "Half day open"
// 	case "Friday", "Saturday":
// 		return "Off day"
// 	default:
// 		return "Invalid day"
// 	}
// }

// With Enums
func getWorkDayStatus(day weekDay) string {
	switch day {
	case Sunday, Monday, Tuesday, Wednesday:
		return "Office is open"
	case Thursday:
		return "Half day open"
	case Friday, Saturday:
		return "Off day"
	default:
		return "Invalid day"
	}
}

type officeStatus string

const (
	StatusOpen    officeStatus = "open"
	StatusClosed  officeStatus = "closed"
	statusHalfDay officeStatus = "half_day"
)

func main() {

	fmt.Println(getWorkDayStatus(Sunday))

}
