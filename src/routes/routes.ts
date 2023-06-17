import { Router } from "express";
import { CreateProductController } from "../controller/CreateProductController";
import { CreateCategoryController } from "../controller/CreateeCategoryController"
import { CreateProductCategoryController } from "../controller/CreateProductCategoryController";
import { CreateProductWithExistCategory } from "../controller/CreateProductWithExistCategory"
import { FindProductController } from "../controller/FindProductController"
import { FindCategoryConctroller } from "../controller/FindCategoryController"


const router = Router()

const createProduct = new CreateProductController()
const createCategory = new CreateCategoryController()
const createProductCategoryController = new CreateProductCategoryController()
const createProductWithExistCategory = new CreateProductWithExistCategory()
const findProductController = new FindProductController()
const findCategoryConctroller = new FindCategoryConctroller()


router.post("/product", createProduct.handle)
router.post("/category", createCategory.handle2)
router.post("/categoryProduct", createProductCategoryController.handle3)
router.post("/productWithCategoty", createProductWithExistCategory.handle4)
router.get("/product/:id", findProductController.handle)
router.get("/category/:id", findCategoryConctroller.handle)


export { router }