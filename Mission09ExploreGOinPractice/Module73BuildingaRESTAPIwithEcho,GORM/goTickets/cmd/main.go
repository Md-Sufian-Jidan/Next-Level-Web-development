package main

import (
	"goTickets/internal/config"
	"goTickets/internal/server"
)

// type User struct {
// 	gorm.Model
// 	Name     string `json:"name" validate:"required" gorm:"type:varchar(100); not null"`                     //xml:"name" form:"name" query:"name"
// 	Email    string `json:"email" validate:"required,email" gorm:"type:varchar(255); uniqueIndex; not null"` // xml:"email" form:"email" query:"email"
// 	Password string `json:"password" validate:"required,min=6" gorm:"type:varchar(100); not null"`
// }

func main() {
	// Load the config
	cfg := config.LoadEnv()
	// Connect to the database
	db := config.ConnectDatabase(cfg)
	// start the server
	server.Start(db, cfg)

	// e.GET("/", func(c *echo.Context) error {
	// 	return c.String(http.StatusOK, "Hello, World From Echo!")
	// })

	// e.POST("/users", func(c *echo.Context) error {
	// 	newUser := new(User)

	// 	// Binding the user data
	// 	if err := c.Bind(newUser); err != nil {
	// 		return c.JSON(http.StatusBadRequest, map[string]any{"error": err.Error()})
	// 	}

	// 	// Validating the user data
	// 	if err := c.Validate(newUser); err != nil {
	// 		return c.JSON(http.StatusBadRequest, map[string]any{"error": err.Error()})
	// 	}

	// 	// Process the user data (e.r.. save to databae)
	// 	result := db.Create(&newUser)
	// 	if result.Error != nil {
	// 		return c.JSON(http.StatusInternalServerError, map[string]any{"error": result.Error})
	// 	}

	// 	return c.JSON(http.StatusOK, newUser)
	// 	// err
	// })

	// userRepository := user.NewRepository(db)
	// userService := user.NewService(userRepository)
	// userHandler := user.NewHandler(userService)

	// e.POST("/users", userHandler.CreateUser)

	// User route registration
	// user.RegisterRoutes(e, db)

	// port := fmt.Sprintf(":%s", cfg.Port)
	// if err := e.Start(port); err != nil {
	// 	e.Logger.Error("failed to start server", "error", err)
	// }
}
