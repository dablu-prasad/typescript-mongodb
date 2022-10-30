"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usercontroller_1 = require("../controllers/usercontroller");
const exampleValidation_1 = require("../validations/exampleValidation/exampleValidation");
const router = (0, express_1.Router)();
router.get("/demo", usercontroller_1.getExample);
router.post("/data", exampleValidation_1.getExampleDataValidation, usercontroller_1.getExampleData);
exports.default = router;
