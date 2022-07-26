const router = require("express").Router();
const Cart = require("../models/cart");

router.post("/post", async (req, res) => {
  try {
    await new Cart(req.body).save();
    res.status(201).send({ message: "Added to cart" });
  } catch (error) {
    res.status(500).send({ message: "Server Error" });
  }
});

router.get("/get", async (req, res) => {
  try {
    const cart = await Cart.find();
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send({ message: "Server Error" });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    await Cart.deleteOne(req.body);
    res.status(201).send({ message: "deleted!" });
  } catch (error) {
    res.status(500).send({ message: "Server Error" });
  }
});

module.exports = router;
