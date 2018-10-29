const express = require("express");
const app = express();
const morgan =  require("morgan");
const path = require("path");
const ruta = __dirname;
//setting
app.set("port", 3000);
app.set("view engine", "ejs");
app.set("views", path.join(ruta, "/views"));
//middleware
app.use(morgan("dev"));
app.use(require("./routes/index"));


//routes
//static files
app.use(express.static(path.join(__dirname, 'public')));

//listeng server

app.listen(app.get("port"), "localhost", () => {
console.log("server 3000");
});