import express from "express";

import {
  createUser,
  deleteUser,
  getById,
  getUser,
  updateUser
} from "../controller/users.js";

const router = express.Router();

// all routes in here starting with /users
router.get("/", getUser);

//post req
router.post("/", createUser);

// get the item with id
router.get("/:id", getById);

// delete the user
router.delete("/:id", deleteUser);

// to update we use patch--toupdate user details
// put removes total value based on the id
// patch method removes name in the person list and like so
router.patch("/:id", updateUser);

export default router;
