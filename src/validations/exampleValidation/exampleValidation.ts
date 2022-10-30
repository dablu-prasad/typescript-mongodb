import { RequestHandler } from "express";
import validator from "../utils/Validator";
import { exampleSchema } from "./exampleSchema";

export const getExampleDataValidation:RequestHandler=(req,res,next)=>
validator(exampleSchema.getExampleData,req.body,next)