import express from 'express'
import { getAllRoom, getInfoRoom, getMemberOfRoom, getRoomOfUser } from '../controllers/room.js'

const routes = express.Router()

routes.get("/all", getAllRoom)
routes.get("/info", getInfoRoom)
routes.get("/user", getRoomOfUser) 
routes.get("/members",getMemberOfRoom)
export default routes