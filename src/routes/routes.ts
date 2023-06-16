import { Router } from "express";
import { CreateProductController } from "../controller/CreateProductController";
import { CreateCategoryController } from "../controller/CreateeCategoryController"

const router = Router()

const createProduct = new CreateProductController()
const createCategory = new CreateCategoryController()

router.post("/product", createProduct.handle)
router.post("/category", createCategory.handle2)


export { router }