const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const colors = require("colors");
const connectDb = require("./config/db");
const cors = require("cors"); // ---> npm install cors

connectDb();

const app = express();

// added cors
app.use(cors());

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use("/api/v1/user", require("./routes/userRoutes"));

app.get("/", (req, res) => {
  res.render("firstFile");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port = ${PORT}`.bgYellow);
});
