package main

import (
	"fmt"
	"time"
)

func main() {

	var ch = make(chan string) // un-buffered channel

	go uploadFile(ch) // blocking...
	fileUrl := <-ch
	fmt.Println("File Url", fileUrl)

}

func uploadFile(c chan string) {

	fmt.Println("Uploading file.....")
	time.Sleep(3 * time.Second)
	fmt.Println("File Upload done!")
	fileUrl := "http://localhost:3000"
	c <- fileUrl
	// c <- "http://localhost:3000"
}
