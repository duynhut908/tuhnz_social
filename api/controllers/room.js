import { db } from "../connect.js"

export const getAllRoom = (req, res) => {
    const q = "SELECT * FROM rooms"

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err)
        return res.json(data)
    })
}

export const getRoomOfUser = (req, res) => {
    const q = "select * from members_room where username=?"

    db.query(q, [req.query.username], (err, data) => {
        if (err) return res.status(500).json(err)
        return res.json(data)
    })
}

export const getMemberOfRoom = (req, res) => {
    const q = "select m.*, u.name AS name from members_room as m join users as u on (u.username=m.username) where m.roomId=?"
    db.query(q, [req.query.roomId], (err, data) => {
        if (err) return res.status(500).json(err)
        return res.json(data)
    })
}

export const getInfoRoom=(req,res)=>{
    const q = "select * from rooms where id=?"

    db.query(q, [req.query.id], (err, data) => {
        if (err) return res.status(500).json(err)
        return res.json(data[0])
    })
}