import express from 'express'
const app = express()
import cors from "cors"
import multer from "multer"
import cookieParser from "cookie-parser"

import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import roomRoutes from './routes/rooms.js'
import messageRoutes from './routes/messages.js'

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true)
    next()
})
app.use(express.json())

/*app.use(cors({
    origin: (origin, callback) => {
        const allowedOrigins = ['http://localhost:3000', 'http://192.168.1.8:3000','*']; // Thêm các nguồn được phép
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}
))*/

/*app.use(cors({
    origin: `https://bpt-sp.vercel.app`,
}
))*/

app.use(cors({
    origin: 'http://localhost:3000',
}
))

app.use(cookieParser())


app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/rooms", roomRoutes)
app.use("/api/messages", messageRoutes)

app.listen(8800, () => {
    console.log("API working")
})