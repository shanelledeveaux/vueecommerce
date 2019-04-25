var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const massive = require("massive");
const session = require("express-session");
require("dotenv").config();

const mc = require("./controller");

var app = express();

app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(dbInstance =>
  app.set("db", dbInstance)
);

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    user: [],
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2 //2 weeks
    }
  })
);

app.get("/api/products", mc.getInventory);
app.get("/api/getcart", mc.getCart);
app.post("/api/cart", mc.addToCart);

const port = 3001;
app.listen(port, () => {
  //   console.log(`listening on ${port}`);
});
