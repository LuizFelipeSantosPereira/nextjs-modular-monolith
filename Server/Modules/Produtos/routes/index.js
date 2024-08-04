import { Router } from "express";
const router = Router();

import productController from "../controllers/productController.js";
const { GetAllProducts, GetProduct } = productController;

router.get("/", GetAllProducts);
router.get("/:id", GetProduct);

export default router;