import mongoose from "mongoose";

interface IUser {
  name: string;
  email: string;
  password: string;
  tasks: {}[];
}

interface IUserModel extends mongoose.Document {}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
  },
  { timestamps: true },
);

const userModel = mongoose.model<IUser>("User", userSchema);
export default userModel;
