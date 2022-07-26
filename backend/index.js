require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require('./db');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');


//connecting to mongoDB
connection();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

//Server running on localhost
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on ${port}`));
