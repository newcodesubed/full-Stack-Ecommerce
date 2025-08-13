import { Request, Response } from "express";
import { db } from "../../db/index";
import { productsTable } from "../../db/productSchema";
import { eq } from "drizzle-orm";

export async function listProduct(_req: Request, res: Response) {
  try {
    const products = await db.select().from(productsTable);
    res.status(200).json(products);
  } catch (error) {
    console.error("Error listing products:", error);
    res.status(500).send({ error: "Failed to list products" });
  }
}
export async function getProductById(_req: Request, res: Response) {
  try {
    const {id} = _req.params;
    const [product]= await db.select().from(productsTable).where(eq(productsTable.id, Number(id)));
    if(!product) {
      return res.status(404).send({ error: "Product not found" });
    }else{
      res.status(200).json(product);
    }
  
  } catch (error) {
    console.error("Error getting products:", error);
    res.status(500).send({ error: "Failed to get products" });
  }
}

export async function createProduct(_req: Request, res: Response) {
  try{

    const [product] = await db.insert(productsTable).values(_req.body).returning();
    console.log("Inserted product:", product);
    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).send({ error: "Failed to create product check your input probably" });
  }
}

export function updateProduct(_req: Request, res: Response) {
  try {
    
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).send({ error: "Failed to update product" });
  }
}
export function deleteProduct(_req: Request, res: Response) {
  try {
    
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).send({ error: "Failed to delete product" });
  }
}
