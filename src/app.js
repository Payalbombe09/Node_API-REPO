import express from "express";
const APP = express()

APP.get("/api/users", function (req, res) {
    res.send(["Vinita", "Shwetali", "Gaurav"]);
});
APP.listen(4002, function () {
    console.log("Application started");
});



APP.post("/api/users/add", function (req, res) {
  res.send({"msg":"UserAdded in database"});
});


APP.put("/api/users/update", function (req, res) {
  res.send({ msg: "User updated database" });
});


APP.delete("/api/users/delete", function (req, res) {
  res.send({ msg: "User deleted from DB" });
});

//http://localhost:4002/api/users  <-----apipath