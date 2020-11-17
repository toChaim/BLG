const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("BLG"));

app.listen(3000, () => console.log("app listening on prot 3000"));
