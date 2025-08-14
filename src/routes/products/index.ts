import { Router, Request, Response } from "express";
import {
  createProduct,
  getProductById,
  listProduct,
  updateProduct,
  deleteProduct,
} from "./productController";
import { validateData } from "../../middlerwares/validationMiddleware";

import {z} from 'zod';

const createProductSchema = z.object({
  name:z.string(),
  price:z.number({message:"Price must be a number"}),
});

//products endpoints

const router = Router();

router.get("/", listProduct);
router.get("/:id", getProductById);
router.post("/",validateData(createProductSchema) ,createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
