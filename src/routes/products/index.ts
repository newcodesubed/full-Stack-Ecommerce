import { Router, Request } from "express";
//products endpoints

const router = Router();

router.get("/", (_req: Request, res) => {
  res.send("The List of Product");
});
router.get("/:id", (_req: Request, res) => {
  res.send("A Product");
});
router.post("/", (_req: Request, res) => {
  res.send("New Product created");
});

export default router;
