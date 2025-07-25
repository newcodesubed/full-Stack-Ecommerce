import { Router, Request, Response } from "express";
import {
  createProduct,
  getProductById,
  listProduct,
  updateProduct,
  deleteProduct,
} from "./productController";
//products endpoints

const router = Router();

router.get("/", listProduct);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
