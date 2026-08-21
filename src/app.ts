import express from "express"
import { errorHandler } from "./middlewares/error.middleware.js"
import userRouter from "./routes/user.routes.js"

const app = express()
app.use(express.json())
app.get("/v1", (req , res)=>{
    res.send("API is Readyyyyyy!!!🔥🔥")
})

app.use("userRouter", userRouter)

app.use(errorHandler)
export default app

