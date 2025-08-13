import { Request, Response } from "express";
import { db } from "../../db/index";
import { productsTable } from "../../db/productSchema";

export function listProduct(_req: Request, res: Response) {
  res.send("listProduct");
}
export function getProductById(_req: Request, res: Response) {
  res.send("getProductById");
}

export async function createProduct(_req: Request, res: Response) {
  console.log("Request body:", _req.body);
  const inserted = await db.insert(productsTable).values(_req.body).returning();
  console.log("Inserted product:", inserted);
  res.json(inserted);
}

export function updateProduct(_req: Request, res: Response) {
  res.send("updateProduct");
}
export function deleteProduct(_req: Request, res: Response) {
  res.send("deleteProduct");
}
