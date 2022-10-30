import { Router } from "express";
import { getExample, getExampleData } from "../controllers/usercontroller";
import { getExampleDataValidation } from "../validations/exampleValidation/exampleValidation";

const router=Router();

router.get("/demo",getExample);
router.post("/data",getExampleDataValidation,getExampleData)

export default router;