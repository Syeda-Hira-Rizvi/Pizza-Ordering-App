const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const app = express();

const connectDB = require("./config/config");
require("colors");
const morgan = require("morgan");
const cors = require("cors");


// Enable CORS
app.use(cors({
  origin: "http://localhost:5173",// Frontend's URL (adjust as needed)
  credentials: true, // Allow cookies to be sent with cross-origin requests
}));

//config dotenv
dotenv.config();

//connection mongodb
connectDB();


//middlewares
app.use(express.json());
app.use(morgan("dev"));


app.get("/", (req, res) => {
  res.send("<h1>Hello From Node Server via nodemon</h1>");
});

//route
app.use("/api/v1/pizzas", require("./routes/pizzaRoute"));
app.use("/api/v1/users", require("./routes/userRoutes"));
app.use("/api/v1/orders", require("./routes/orderRoute"));

  // app.use(express.static(path.join(__dirname, "/frontend/dist")));
  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  // });


// app.listen(8080, () => {
//   console.log(
//     `Server Running On ${process.env.NODE_ENV||"development"} mode on port no ${process.env.PORT||8080}`
//       .bgMagenta.white
//   );
// });

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
});
