package main

import (
	"fmt"
	"sync"
	"time"
)

// waitgroup is used to wait for a collection of goroutines to finish. It provides a way to block until all goroutines have completed their tasks. A waitgroup is typically used when you have multiple concurrent operations and you want to ensure that they all finish before proceeding with the next steps in your program.

var wg sync.WaitGroup

var fileUrl string

func main() {

	var start = time.Now()

	// wg.Add(1)
	// go uploadFile()
	wg.Go(uploadFile)

	// Blocking code
	// uploadFile() // waiting ...

	// wg.Add(1)
	// go saveToDB()
	wg.Go(saveToDB)

	// wg.Add(1)
	// go sendEmail()
	wg.Go(sendEmail)

	// time.Sleep(3 * time.Second)
	wg.Wait() // wating ..... until counter is 0

	fmt.Println("File Url", fileUrl)
	fmt.Println("All Tasks Completed")
	fmt.Println("Time taken", time.Since(start))
}

func uploadFile() {
	// defer wg.Done()

	fmt.Println("Uploading file.....")
	time.Sleep(3 * time.Second)
	fmt.Println("File Upload done!")
	fileUrl = "http://localhost:3000"
	// var uploadUrl string = "http://localhost:3000"
	// return uploadUrl

	// wg.Add(-1) // 2
	// wg.Done()
}

func saveToDB() {
	// defer wg.Done()
	fmt.Println("Saving to db.....")
	time.Sleep(1 * time.Second)
	fmt.Println("Saved to db!")

	// wg.Add(-1) // 1
	// wg.Done()
}

func sendEmail() {
	// defer wg.Done()
	fmt.Println("Sending email.....")
	time.Sleep(2 * time.Second)
	fmt.Println("Email sent!")

	// wg.Add(-1) // 0
	// wg.Done()
}
