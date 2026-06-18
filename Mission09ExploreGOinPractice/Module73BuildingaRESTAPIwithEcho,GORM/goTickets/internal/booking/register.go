package booking

import (
	"goTickets/internal/auth"
	"goTickets/internal/config"
	"goTickets/internal/event"
	"goTickets/internal/middleware"

	"github.com/labstack/echo/v5"
	"gorm.io/gorm"
)

func RegisterRoutes(e *echo.Echo, db *gorm.DB, cfg *config.Config) {

	bookingRepo := NewRepository(db)
	eventRepo := event.NewRepository(db)
	bookingService := NewService(bookingRepo, eventRepo)
	bookingHandler := NewHandler(bookingService)

	jwtService := auth.NewJWTService(cfg.JwtSecret)

	api := e.Group("/api/v1/bookings", middleware.AuthMiddleware(jwtService))

	api.POST("", bookingHandler.CreateBooking)
	api.GET("/me", bookingHandler.GetMyBookings)
}
