import { Request, Response, NextFunction } from "express";
import taskModel from "../models/allTasks.model.js";
import AppError from "../utils/AppError.js";

export const createTaks = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { nameOfTask, detailsOfTask, statusOfTask, date, time } = req.body;
    const task = await taskModel.create({
      nameOfTask,
      detailsOfTask,
      statusOfTask : statusOfTask === true ? "done" : "undone",
      date,
      time,
    });

    return res.status(201).json({
      message: "Task created successfully",
      data: task,
    });
  } catch (error) {
    next(error);
  }
};
