const express = require("express");
const app = express()
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

app.get("/", (req, res) => {
    res.send(`Hello World NODE_ENV=${NODE_ENV}`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
