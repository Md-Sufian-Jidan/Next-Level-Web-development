package event

import (
	"github.com/labstack/echo/v5"
	"gorm.io/gorm"
)

func RegisterRoutes(e *echo.Echo, db *gorm.DB) {
	eventRepository := NewRepository(db)
	eventService := NewService(eventRepository)
	eventHandler := NewHandler(eventService)

	api := e.Group("/api/v1/events")

	api.POST("", eventHandler.CreateEvent)     // api/v1/events
	api.GET("", eventHandler.GetEvents)        // api/v1/events
	api.GET("/:id", eventHandler.GetEventByID) // api/v1/events/:id
}
