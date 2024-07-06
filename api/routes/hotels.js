import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import { countByCity } from "../controllers/hotel.js";
import { countByType } from "../controllers/hotel.js";
import { getHotelRooms } from "../controllers/hotel.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE

router.delete("/:id", verifyAdmin, deleteHotel);
//GET

router.get("/find/:id", getHotel);
//GET ALL
router.get("/", getHotels);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);



export default router;
