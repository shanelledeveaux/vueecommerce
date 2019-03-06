var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const massive = require("massive");
require("dotenv").config();

const mc = require("./controller");

var app = express();

app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(dbInstance =>
  app.set("db", dbInstance)
);

app.get("/api/products", mc.getInventory);

const port = 3001;
app.listen(port, () => {
  //   console.log(`listening on ${port}`);
});
