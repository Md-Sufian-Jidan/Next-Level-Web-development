package main

import (
	"fmt"
	"time"
)

func main() {
	var ch = make(chan string, 2)

	// upload file and get the url
	go func() {
		time.Sleep(2 * time.Second)
		ch <- "File uploaded"
	}()

	// save file url to database
	go func() {
		time.Sleep(1 * time.Second)
		ch <- "File url saved"
	}()

	// send email to user
	go func() {
		time.Sleep(3 * time.Second)
		ch <- "Email sent!"
	}()

	for range 4 {
		data := <-ch
		fmt.Println(data)
	}

}
