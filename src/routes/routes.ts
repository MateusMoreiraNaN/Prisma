import { Router } from "express";
import { CreateProductController } from "../controller/CreateProductController";

const router = Router()

const createProduct = new CreateProductController()




export { router }