package user

import (
	"goTickets/internal/auth"
	"goTickets/internal/config"
	"goTickets/internal/middleware"

	"github.com/labstack/echo/v5"
	"gorm.io/gorm"
)

func RegisterRoutes(e *echo.Echo, db *gorm.DB, cfg *config.Config) {
	userRepository := NewRepository(db)
	jwtService := auth.NewJWTService(cfg.JwtSecret) // you can pass a custom secret key here
	userService := NewService(userRepository, jwtService)
	userHandler := NewHandler(userService)

	api := e.Group("/api/v1/auth")

	api.POST("/register", userHandler.CreateUser)                            // api/v1/auth/register
	api.POST("/login", userHandler.LoginUser)                                // api/v1/auth/login
	api.GET("/me", userHandler.GetMe, middleware.AuthMiddleware(jwtService)) // api/v1/auth/me
}
