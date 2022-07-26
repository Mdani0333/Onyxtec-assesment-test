const router = require("express").Router();
const Products = require("../models/product");

router.get("/", async (req, res) => {
  try {
    const products = await Products.find();
    res.status(201).send(products);
  } catch (error) {
    res.status(500).send({ message: "Server Error" });
  }
});

module.exports = router;
