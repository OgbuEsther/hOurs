import "dotenv/config";

import app from "./app.js";
import { connectDB } from "./configuration/database.js";

connectDB()

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
