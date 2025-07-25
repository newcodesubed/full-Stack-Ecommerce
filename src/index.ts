import express, { Request } from "express";

const app = express();
const PORT = 4000;

app.get("/", (_req: Request, res) => {
  res.send("Hello from TypeScript + Node.js! hello");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
