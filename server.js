// importing packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

// importing routes
const exerciseRouter = require("./routes/exercise");
const userRouter = require("./routes/user");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Database connection
const uri = process.env.ATLAS_URI;
mongoose.connect(process.env.MONGODB_URI || uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connection established successfully");
});

// using middleware
app.use(cors());
app.use(express.json());
app.use("/exercises", exerciseRouter);
app.use("/users", userRouter);

// for heroku deployment
// serve the static assets
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
