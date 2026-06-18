package event

import (
	"goTickets/internal/auth"
	"goTickets/internal/config"
	"goTickets/internal/middleware"

	"github.com/labstack/echo/v5"
	"gorm.io/gorm"
)

func RegisterRoutes(e *echo.Echo, db *gorm.DB, cfg *config.Config) {
	eventRepository := NewRepository(db)
	eventService := NewService(eventRepository)
	eventHandler := NewHandler(eventService)
	jwtService := auth.NewJWTService(cfg.JwtSecret)

	api := e.Group("/api/v1/events")

	api.POST("", eventHandler.CreateEvent, middleware.AuthMiddleware(jwtService))      // api/v1/events
	api.GET("", eventHandler.GetEvents)                                                // api/v1/events
	api.GET("/:id", eventHandler.GetEventByID, middleware.AuthMiddleware(jwtService))  // api/v1/events/:id
	api.PATCH("/:id", eventHandler.UpdateEvent, middleware.AuthMiddleware(jwtService)) // api/v1/events/:id
}
