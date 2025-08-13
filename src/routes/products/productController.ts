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
  try{

    const [product] = await db.insert(productsTable).values(_req.body).returning();
    console.log("Inserted product:", product);
    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Failed to create product check your input probably" });
  }
}

export function updateProduct(_req: Request, res: Response) {
  res.send("updateProduct");
}
export function deleteProduct(_req: Request, res: Response) {
  res.send("deleteProduct");
}
