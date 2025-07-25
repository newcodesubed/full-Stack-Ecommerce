import express, { Request } from "express";

const app = express();
const PORT = 4000;

app.get("/", (_req: Request, res) => {
  res.send("Hello from TypeScript + Node.js! hello");
});
app.get("/products", (_req: Request, res) => {
  res.send("all the product");
});
app.get("/products/:id", (_req: Request, res) => {
  console.log(_req.params);
  res.send("A Product");
});
app.post("/products", (_req: Request, res) => {
  res.send("A Product");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
