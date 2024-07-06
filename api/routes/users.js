import express from "express";

import User from "../model/User.js";
import {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";
import { verifyUser } from "../utils/verifyToken.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyUser, createUser);

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;
