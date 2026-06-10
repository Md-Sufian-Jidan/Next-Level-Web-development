package dto

type Response struct {
	ID        uint   `json:"id"`
	Name      string `json:"name"`  //xml:"name" form:"name" query:"name"
	Email     string `json:"email"` // xml:"email" form:"email" query:"email"
	Token     string `json:"token,omitempty"`
	CreatedAt string `json:"created_at"`
}
