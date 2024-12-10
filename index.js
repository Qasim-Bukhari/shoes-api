import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/shoesRouter.js";

const app = express()
dotenv.config()

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the page where you will the dummy APIs")
})

app.use("/shoes", router)

const port = process.env.PORT

app.listen(port, (req, res) => {
    console.log(`The server is running on port ${port}`)
})