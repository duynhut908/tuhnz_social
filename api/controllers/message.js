import { db } from "../connect.js"

export const getMessageOfRoom = (req, res) => {
    const q = "select m.*, u.name as name from messages as m join users as u on (u.username=m.username) where roomId=? order by m.id asc"

    db.query(q, [req.params.roomId], (err, data) => {
        if (err) return res.status(500).json(err)
        return res.json(data)
    })
}

export const sentMessage = (req, res) => {
    const q = "insert into messages(`username`,`content`, `roomId`) VALUES (?)"
    console.log(req.body)
    const values = [
        req.body.username,
        req.body.content,
        req.params.roomId,
    ]
    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err)
        return res.status(200).json("Sent message success")
    })

}