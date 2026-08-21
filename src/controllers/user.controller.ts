import { Request, Response, NextFunction } from "express";
import userModel from "../models/user.model.js";
import AppError from "../utils/AppError.js";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await userModel.find();
   return  res.status(200).json({
      message: "All users fetched successfully",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllUsersById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await userModel.findById(req.params.userId).populate("tasks");
   return  res.status(200).json({
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new AppError("Name, email and password are required", 400);
    }
    const user = await userModel.create({ name, email, password });
    return res.status(201).json({
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
