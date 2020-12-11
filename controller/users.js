import { v4 as uuidv4 } from "uuid";
// import fs from "fs";
import { USERS } from "../db.js";

let users = USERS;

//get method
export const getUser = (req, res) => {
  // console.log(users);
  res.send(users);
};

//post method
export const createUser = (req, res) => {
  const postUser = req.body;
  // adding uuid
  const userId = uuidv4();
  // adding id to the users array
  const useWithId = { ...postUser, id: userId };
  // pushing the userarray
  users.push(useWithId);

  //
  res.send(`Post added to the Database  `);
};

//get user by id
export const getById = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id == id);
  // console.log(foundUser);
  res.send(foundUser);
};

// delete user
export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`user with the id ${id} deleted for the database`);
};

// update user patch
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id == id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`user with id ${id} has been updated`);
};
