import express from 'express'
import { authorize, login } from '../controllers/auth.js' 
const routes = express.Router()

routes.post("/login", login)
routes.post("/authorize", authorize) 
export default routes