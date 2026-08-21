import { Router } from "express";
import { getAllUsers, getAllUsersById, registerUser } from "../controllers/user.controller";

const userRouter = Router()

userRouter.get("/", getAllUsers)
userRouter.get("/:id", getAllUsersById)
userRouter.post("/ registerUser", registerUser)

export  default userRouter