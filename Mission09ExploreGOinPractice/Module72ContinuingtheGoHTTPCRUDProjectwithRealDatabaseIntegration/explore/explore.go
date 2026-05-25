package main

var users = []string{
	"Mizan", // 0
	"Mezba", // 1
	"Mir",   // 2
	"Firoz", // 3
}

func main() {

	idx := 1
	users = append(users[:idx], users[idx+1:]...)

}

// users[:1] => ["mizan"]
// users[1+1:] => users[2:] => ["Mir", "Firoz"]
// append["mizan"], ["Mir", "Firoz"] => ["Mizan", ["Mir", "Firoz"]]
