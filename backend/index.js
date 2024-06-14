const express = require("express");
require("./db/config");
const Users = require("./db/User");
const Product = require("./db/Product");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  const user = new Users(req?.body);
  const resp = await user.save();
  res.send(resp);
});

app.post("/login", async (req, res) => {
  if (req?.body.email && req?.body.password) {
    const user = await Users.findOne(req?.body);
    if (user) {
      const data = user.toObject();
      delete data.password;
      res?.send(data);
    } else {
      res?.send({
        msg: "User not found",
      });
    }
  } else {
    res?.send({
      msg: "Provide complete data",
    });
  }
});

app.post("/add-product", async (req, res) => {
  const product = Product(req?.body);
  const result = await product.save();
  res.send(result);
});
app.get("/get-products", async (req, res) => {
  const products = await Product.find({});
  if (products?.length > 0) {
    res.send(products);
  } else {
    res.send({
      msg: "No product found",
    });
  }
});

app.delete("/delete-product/:id", async (req, res) => {
  const result = await Product.deleteOne({ _id: req?.params?.id });
  if (result) {
  }
  res.send(result);
});

app.get("/get-product/:id", async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  if (product) {
    res.send(product);
  } else {
    res.send({
      msg: "Product not found",
    });
  }
});

app.put("/update-product/:id", async (req, res) => {
  const product = await Product.updateOne(
    {
      _id: req?.params?.id,
    },
    {
      $set: req.body,
    }
  );
  if (product) {
    res.send(product);
  } else {
    res?.send({
      msg: "Product not updated",
    });
  }
});

app.listen(4000);
