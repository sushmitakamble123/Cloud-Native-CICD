const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Cloud Native CI/CD Platform Running Successfully!");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});