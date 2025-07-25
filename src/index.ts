import express, { Request } from "express";
import productRoutes from "./routes/products";

const app = express();
const PORT = 4000;

app.get("/", (_req: Request, res) => {
  res.send("Hello from TypeScript + Node.js! hello");
});

app.use("/products", productRoutes);
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
