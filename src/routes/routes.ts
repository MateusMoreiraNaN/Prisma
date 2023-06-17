import { Router } from "express";
import { CreateProductController } from "../controller/CreateProductController";
import { CreateCategoryController } from "../controller/CreateeCategoryController"
import { CreateProductCategoryController } from "../controller/CreateProductCategoryController";
import { CreateProductWithExistCategory } from "../controller/CreateProductWithExistCategory"


const router = Router()

const createProduct = new CreateProductController()
const createCategory = new CreateCategoryController()
const createProductCategoryController = new CreateProductCategoryController()
const createProductWithExistCategory = new CreateProductWithExistCategory()

router.post("/product", createProduct.handle)
router.post("/category", createCategory.handle2)
router.post("/categoryProduct", createProductCategoryController.handle3)
router.post("/productWithCategoty", createProductWithExistCategory.handle4)


export { router }