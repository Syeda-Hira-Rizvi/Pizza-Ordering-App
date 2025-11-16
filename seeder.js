const mogoose = require("mongoose");
require("colors");
const connectDb = require("./config/config");
const Pizza = require("./models/pizzaModel");
const Pizzas = require("./data/pizza-data");

//config mongodb conn file
connectDb();

//import data
const importData = async () => {
  try {
    await Pizza.deleteMany();
    const sampleData = Pizzas.map((pizza) => {
      return { ...pizza };
    });
    await Pizza.insertMany(sampleData);
    console.log("DATA IMPOrted".bgGreen.white);
    process.exit();
  } catch (error) {
    console.log(`${error}`.bgRed.white);
    process.exit(1);
  }
};

const dataDestroy = async () => {
  try {
    await Pizza.deleteMany();
    console.log("DATA Destroyed!".bgRed.white);
    process.exit();
  } catch (error) {
    console.error(`${error}`.bgRed.white);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  importData();
}
