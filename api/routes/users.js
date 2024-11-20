import express from 'express'
import { getAllUser } from '../controllers/user.js'
const routes = express.Router()

routes.get("/", getAllUser)

export default routes