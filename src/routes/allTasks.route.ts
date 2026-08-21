import { Router } from "express"
import { createTasks, getAllTask } from "../controllers/allTasks.controller"

const TaskRouter = Router()

TaskRouter.post("/create",  createTasks)
TaskRouter.get("/", getAllTask)

export default TaskRouter