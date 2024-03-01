import express from "express";
import cors from "cors";
require("dotenv").config();

const app = express();
const PORT: number = (process.env.PORT as unknown as number) || 3000;

app.use(cors());
app.use(express.json());

function randomInteger(min: number, max: number): number {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function randomChar(): string {
  return String.fromCharCode(randomInteger(97, 122));
}

function randomString(length: number): string {
  let string = "";
  for (let i = 0; i < length; i++) {
    string += randomChar();
  }
  return string;
}

//Use for test, DONT TOUCH!!!
app.get("/", function (_, res) {
  res.send("Hello World1!");
});

app.post("/create-link", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const { longLink } = req.body;

  const path = randomString(7);

  app.get(`/:${path}`, function (_, res) {
    res.redirect(longLink);
  });

  res.send({ shortLink: path });
});

const server = app.listen(PORT, () =>
  console.log("server started on port", PORT, `http://localhost:${PORT}`)
);

export default app;
export { server };
