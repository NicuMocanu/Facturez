const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Fa un drop si re-sincronizeaza baza de date!");
  });
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bine-ai venit in aplicatia FACTUREZ!" });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Serverul este deschis pe portul ${PORT}.`);
});