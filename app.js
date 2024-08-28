require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/index");
const app = express();

//middleware inbuild
app.use(express.json()); //for using posting data

app.use("/v1/api", route);

const port = process.env.PORT || 3001;
const monogoString = process.env.DATABASE_URL;
app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});

mongoose.connect(monogoString);

const database = mongoose.connection;
console.log(database);

database.on("error", (err) => {
  console.log("error", err);
});

database.on("connected", () => {
  console.log("Database connected");
});

app.get("/", (req, res) => {
  res.send("Hi iam moorthy using crud application");
});
