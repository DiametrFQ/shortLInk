import express from "express";
import cors from "cors";
import { randomString } from "./src/scripts";
import Redis from "./src/redis";

require("dotenv").config();

const app = express();
const redis = new Redis("redis");

const PORT: number = (process.env.PORT as unknown as number) || 3001;

app.use(cors());
app.use(express.json());

//Use for test, DONT TOUCH!!!
app.get("/", function (_, res) {
  res.send("Hello World1!");
});

app.post("/create-link", async (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const { longLink } = req.body;

  let path = await redis.getValue(longLink);

  if (!path) {
    path = randomString(7);

    app.get(`/${path}`, function (_, res) {
      res.redirect(longLink);
    });
    await redis.setValue(longLink, path);
  }

  res.send({ shortLink: path });
});

const server = app.listen(PORT, () =>
  console.log("server started on port", PORT)
);

export default app;
export { server };
