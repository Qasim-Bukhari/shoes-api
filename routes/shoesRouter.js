import express from "express";
import { shoes } from "../shoesData.js";

export const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({
    status: 200,
    message: "success",
    shoes: shoes,
  });
});

router.get("/search", (req, res) => {
  let { title, category, brand } = req.query;
  let filteredShoes = shoes;

  if (title) {
    filteredShoes = filteredShoes.filter((show) =>
      shoe.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  if (category) {
    filteredShoes = filteredShoes.filter((shoe) =>
      shoe.category.toLowerCase().includes(category.toLowerCase())
    );
  }

  if (brand) {
    filteredShoes = filteredShoes.filter((shoe) =>
      shoe.brand.toLowerCase().includes(brand.toLowerCase())
    );
  }

  if (filteredShoes.length > 0) {
    res.status(200).send({
      status: 200,
      message: "success",
      shoes: filteredShoes,
    });
  } else {
    res.status(404).send({
      status: 404,
      message: "No shoes found.",
    });
  }
});

router.get("/:id", (req, res) => {
  let { id } = req.params;
  let shoe = shoes.find((shoe) => shoe.id == id);

  if (shoe) {
    res.status(200).send({
      status: 200,
      message: "success",
      shoe: shoe,
    });
  } else {
    res.status(404).send({
      status: 404,
      message: "No shoe found.",
    });
  }
});
