import mongoose from "mongoose";

interface IAllTasks {
  nameOfTask: string;
  detailsOfTask: string;
  statusOfTask: any;
  date: Date;
  time: string;
}

interface IAllTasksModel extends mongoose.Document {}

const allTasksSchema = new mongoose.Schema(
  {
    nameOfTask: { type: String, required: true },
    detailsOfTask: { type: String, required: true },
    statusOfTask: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
  },
  { timestamps: true },
);

const taskModel = mongoose.model<IAllTasks>(
  "Task",
  allTasksSchema,
);
export default taskModel;
