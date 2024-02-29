import express from "express";
require("dotenv").config();

const app = express();
const PORT: number = (process.env.PORT as unknown as number) || 4001;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(PORT, () =>
  console.log("server started on port", PORT, `http://localhost:${PORT}`)
);
