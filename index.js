// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello Basanti");
// });

// app.listen(3333);
// console.log("App is Running on port 3333");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello deepu");
});

app.listen(3344);
console.log("App is running on port 3344");
