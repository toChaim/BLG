const express = require("express");
const app = express();

var Users = {
  chaim: {
    email: 'toChaim@gmail.com',
    passhash: 'xxxxxxx12345',
    privacy: 'public',
    friends: [],
  }
}

// home
app.get("/", (req, res) => res.send("BLG"));
// prayer
// gratbot
// CBT
// users
app.get("/users/:username", (req, res) => {
  res.json(Users[req.params.username]);
});
app.get("/users", (req, res) => {
  res.send(Object.keys(Users));
});
app.post("/users/", (req, res) => {

})
app.listen(3000, () => console.log("app listening on prot 3000"));
