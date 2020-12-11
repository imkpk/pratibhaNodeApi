import express from "express";
import bodyParser from "body-parser";

import userRoutes from "./routes/users.js";

const app = express();

const PORT = 5000;
// middleware
app.use(bodyParser.json());
// routes all users starting from /users
app.use("/users", userRoutes);

// GET
app.get("/", (req, res) => {
  // console.log("test");
  res.send("hello from server");
});

app.listen(PORT, () => {
  console.log(`server running on port : http://localhost:${PORT}`);
});
