var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var mongoDB = "mongodb://engweb2024-recurso-mongodb-1:27017/livros"
mongoose.connect(mongoDB)
var db = mongoose.connection
db.on("error", console.error.bind(console, "Não foi possível establecer uma conexão com a base de dados."))
db.once("open", () => {
    console.log("Conexão com a base de dados estabelecida com sucesso.")
});

var livroRouter = require("./routes/livro");

var app = express();
    
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/books", livroRouter);

module.exports = app;
