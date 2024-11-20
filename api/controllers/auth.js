import { db } from "../connect.js"
import jwt from "jsonwebtoken"

export const login = (req, res) => {
    const q = "select * from users where username=?"
    console.log(req.body)
    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err)
        if (data.lenght === 0) return res.status(404).json("Not account in system")
        if (data[0].password !== req.body.password) {
            return res.status(400).json("Wrong password")
        }
        const token = jwt.sign({ id: data[0].id, username: data[0].username }, "secretkey")

        const { passsword, ...others } = data[0]
        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json(others)
    })
}


export const authorize = (req, res) => {
    const q = "select * from users where username=?"
    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err)
        if (data.length === 0) return res.status(404).json("Not account in system")

        const token = jwt.sign({ id: data[0].id, role: data[0].role }, "secretkey")

        const { password, ...others } = data[0]

        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json(others)
    })
}