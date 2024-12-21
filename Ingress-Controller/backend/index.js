const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors())

app.get("/", (req, res) => {
    res.json({
        message: "Hello, from Express!"
    });
});

app.listen(8000, () => {
    console.log("Server started in port 8000");
});
