import { RequestHandler } from "express";
import createHttpError from "http-errors";
import Example from "../models/Example";

export const getExample: RequestHandler = async (req, res) => {
    return res.json({ message: "Hello" })
}

export const getExampleData: RequestHandler = async (req, res, next) => {
    try {
        const { name, id }: userid = req.body;
        const example = await Example.findOne({ name });
        if (example) return next(createHttpError(406, "example already exists !!"))
        const newExample = new Example({ name, id });
        await newExample.save();
        console.log(name, id)
        res.json({ message: name, id });
    }
    catch (error) {
        return next(createHttpError.InternalServerError)
    }
}