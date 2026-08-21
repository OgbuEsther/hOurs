import express from "express"
import { errorHandler } from "./middlewares/error.middleware.js"

const app = express()
app.use(express.json())
app.get("/v1", (req , res)=>{
    res.send("API is Readyyyyyy!!!🔥🔥")
})


app.use(errorHandler)
export default app

