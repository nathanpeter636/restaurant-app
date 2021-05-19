require("dotenv").config();

const express = require("express");

const db = require("./db");

const morgan = require("morgan");

const app = express();

app.use(express.json());

//get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("select * from restaurants");

    console.log(results);
    res.status(200).json({
      status: "success",

      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//get single restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
  console.log(req.params.id);

  try {
    const results = await db.query(
      "select * from restaurants where id = $1", [req.params.id]);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });

    console.log(results.rows[0])
  } catch (err) {
    console.log(err);
  }

  
});

//create restaurant

app.post("/api/v1/restaurants", (req, res) => {
  console.log(req.body);
  res.status(201).json({
    status: "success",
    data: {
      restaurant: "mcdonalds",
    },
  });
});

//update restaurant

app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);

  console.log(req.body);

  res.status(200).json({
    status: "success",
    data: {
      restaurant: "mcdonalds",
    },
  });
});

//delete restaurant

app.delete("/api/v1/restaurants/:id", (req, res) => {
  res.status(204).json({
    status: "success",
  });
});

const port = process.env.PORT || 3005;

app.listen(3005, () => {
  console.log(`server listening on port ${port}`);
});
