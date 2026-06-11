package server

import (
	"fmt"
	"goTickets/internal/config"
	"goTickets/internal/event"
	"goTickets/internal/user"
	"net/http"

	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v5"
	"github.com/labstack/echo/v5/middleware"
	"gorm.io/gorm"
)

type CustomValidator struct {
	validator *validator.Validate
}

func (cv *CustomValidator) Validate(i any) error {
	if err := cv.validator.Struct(i); err != nil {
		// Optionally, you could return the error to give each route more control over the status code
		return echo.ErrBadRequest.Wrap(err)
	}
	return nil
}

func Start(db *gorm.DB, cfg *config.Config) {
	e := echo.New()

	db.AutoMigrate(&user.User{}, &event.Event{})
	e.Validator = &CustomValidator{validator: validator.New()}
	e.Use(middleware.RequestLogger())

	e.GET("/", func(c *echo.Context) error {
		return c.String(http.StatusOK, "Hello, World From Echo!")
	})

	// User route registration
	user.RegisterRoutes(e, db)

	// Event route registration
	event.RegisterRoutes(e, db)

	port := fmt.Sprintf(":%s", cfg.Port)
	fmt.Println("port", port)
	if err := e.Start(port); err != nil {
		e.Logger.Error("failed to start server", "error", err)
	}
}
