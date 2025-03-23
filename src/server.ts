import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!\n");
});

app.listen(3000, "127.0.0.1", () => {
  console.log("Listening on https://localhost:127.0.0.1:3000");
});