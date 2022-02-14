var express = require("express");
const res = require("express/lib/response");
var app     = express();
app.use('/test', express.static('contents'));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/", (req, res) => {
    res.send("Post World");
});

app.get("/hi", (req, res) => {
    res.send("Hi World");
});

app.listen(3000);