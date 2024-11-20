const io = require("socket.io")(8900, {
    cors: {
        origin: "http://localhost:3000",
    },
    timeout: 60000
});


let users = [];
const rooms = {};
const usersInRoom = {}

const addUser = (username, socketId) => {
    username !== null && !users.some((user) => user.username === username) && users.push({ username, socketId })
}

const getUserByUsername = (username) => {
    if (users.find((user) => user.username === username) === undefined) {
        return null
    }
    return users.find((user) => user.username === username);
};

const getUserBySocketId = (socketId) => {
    if (users.find((user) => user.socketId === socketId) === undefined) {
        return null
    }
    
    return users.find((user) => user.socketId === socketId);
};

io.on("connection", (socket) => {
    console.log("A user connected: " + socket.id);


    socket.on("login", (username) => {

        const existingUser = users.find(user => user.username === username);
        if (existingUser) {
            // Nếu đã có user này đăng nhập, thông báo cho socketId cũ log out
            io.to(existingUser.socketId).emit('forceLogout', { message: 'You have been logged out due to a new login.' });
            console.log("Đăng nhập cùng acc")
            // Cập nhật socketId mới cho user
            existingUser.socketId = socket.id;
        } else {
            addUser(username, socket.id)
        }

        console.log(users)

        io.emit("getUsers", users);
    })


    // Nhận tin nhắn từ client và phát lại cho tất cả người dùng
    socket.on("sendMessage", (data) => {
        if (Array.isArray(data.member)) {
            data.member.forEach((user) => {
                if (getUserByUsername(user.username)) {
                    io.to(getUserByUsername(user.username).socketId).emit("receiveMessage", data.message); // Phát lại tin nhắn cho tất cả người dùng
                }
            })
        }
    })

    // Khi người dùng ngắt kết nối
    socket.on("disconnect", () => {
        const index = users.findIndex(user => user.socketId === socket.id);
        if (index !== -1) {
            const disconnectedUser = users.splice(index, 1)[0];
            console.log(`User ${disconnectedUser.username} disconnected`);

            console.log(users)

        }
    });
});