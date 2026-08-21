import mongoose from "mongoose";

interface IAllTasks {
  nameOfTask: string;
  detailsOfTask: string;
  statusOfTask: boolean;
  date: Date;
  time: string;
}

interface IAllTasksModel extends mongoose.Document<IAllTasks> {}

const allTasksSchema = new mongoose.Schema<IAllTasks, IAllTasksModel>(
  {
    nameOfTask: { type: String, required: true },
    detailsOfTask: { type: String, required: true },
    statusOfTask: { type: Boolean, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
  },
  { timestamps: true },
);

const taskModel = mongoose.model<IAllTasks, IAllTasksModel>(
  "Task",
  allTasksSchema,
);
export default taskModel;
