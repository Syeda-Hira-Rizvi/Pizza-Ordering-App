const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const app = express();

const connectDB = require("./config/config");
require("colors");
const morgan = require("morgan");

//config dotenv
dotenv.config();

//connection mongodb
connectDB();


//middlewares
app.use(express.json());
app.use(morgan("dev"));

//route
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoute"));

  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });

app.get("/", (req, res) => {
  res.send("<h1>Hello From Node Server via nodemon</h1>");
});


app.listen(8080, () => {
  console.log(
    `Server Running On ${process.env.NODE_ENV||"development"} mode on port no ${process.env.PORT||8080}`
      .bgMagenta.white
  );
});
