import express, { Request, Response } from "express";

const app = express();
const PORT = 3000
const HOST = "localhost";
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! Wiht Typescript\n");
});
app.get("/instance", (req: Request, res: Response) => { 
  res.send('Create a new instance of')
})
app.listen(PORT, HOST, () => {
  console.log(`Local Server Startup | http://${HOST}:${PORT}`);
});