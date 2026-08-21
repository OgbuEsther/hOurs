import { Request, Response, NextFunction } from "express";
import taskModel from "../models/allTasks.model.js";
import AppError from "../utils/AppError.js";
import userModel from "../models/user.model.js";

export const createTasks= async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { nameOfTask, detailsOfTask, statusOfTask, date, time } = req.body;
    const getUserId = await userModel.findById(req.params.userId);
    if(!getUserId){
      throw new AppError("user not found", 400)
    }
    const task = await taskModel.create({
      nameOfTask,
      detailsOfTask,
      statusOfTask : statusOfTask === true ? "done" : "undone",
      date,
      time,
    });

    await getUserId.tasks.push(task._id);
    await getUserId.save();

    return res.status(201).json({
      message: "Task created successfully",
      data: task,
    });
  } catch (error) {
    next(error);
  }
};


export const getAllTask = async(
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const  allTask = await taskModel.find()
    if (!allTask){
      throw new AppError("task not gotten", 400)
    }
    return res.status(201).json({
      message: "all task retrieved",
      data: allTask
    })

  }catch(error){
    next(error)
  }
}