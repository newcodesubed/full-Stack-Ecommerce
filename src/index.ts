import express, { Request, Router } from "express";

const app = express();
const PORT = 4000;

app.get("/", (_req: Request, res) => {
  res.send("Hello from TypeScript + Node.js! hello");
});

//products endpoints

const router = Router();

router.get("/", (_req: Request, res) => {
  res.send("all the product");
});
router.get("/:id", (_req: Request, res) => {
  console.log(_req.params);
  res.send("A Product");
});
router.post("/", (_req: Request, res) => {
  res.send("New Product created");
});

app.use("/products", router);
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
