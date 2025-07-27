import { Request, Response } from "express";
export function listProduct(_req: Request, res: Response) {
  res.send("listProduct");
}
export function getProductById(_req: Request, res: Response) {
  res.send("getProductById");
}
export function createProduct(_req: Request, res: Response) {
  console.log(_req.body);
  res.send("createProduct");
}
export function updateProduct(_req: Request, res: Response) {
  res.send("updateProduct");
}
export function deleteProduct(_req: Request, res: Response) {
  res.send("deleteProduct");
}
