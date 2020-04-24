let express = require("express");
let app = express();
let exphbs = require("express-handlebars");
let PORT = process.env.PORT || 8080;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
let routes = require("./controllers/burgers_controller");
app.use(routes);
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
