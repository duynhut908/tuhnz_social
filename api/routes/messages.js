import express from 'express'
import { getMessageOfRoom, sentMessage } from '../controllers/message.js'

const routes = express.Router()

routes.get("/:roomId", getMessageOfRoom)
routes.post("/:roomId", sentMessage)
export default routes