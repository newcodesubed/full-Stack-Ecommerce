import express, { json, Request, urlencoded } from "express";
import productRoutes from "./routes/products";

const PORT = 4000;
const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());

app.get("/", (_req: Request, res) => {
  res.send("Hello from TypeScript + Node.js! hello");
});

app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
