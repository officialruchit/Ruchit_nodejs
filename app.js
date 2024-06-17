const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const url =
  "mongodb+srv://testing:test@atlascluster.ij20tlj.mongodb.net/Todoapp?retryWrites=true&w=majority";

mongoose
  .connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connect");
  })
  .catch((err) => {
    console.log("err");
  });

// Routes
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

app.listen(3333, () => {
  console.log("done");
});
