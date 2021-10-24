const express = require('express')
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io') (server, {cors: {origin: "*" }});

const path = require('path');
const root = path.join(__dirname,'../views/scripts');
app.use(express.static(root));

app.set('view engine', 'ejs');
app.get('/home', (req,res) => {
    res.render('home');
});

// server: yarn start
// client: http://localhost:3001/home
server.listen(3001, () => {
    console.log("server running...");
});

io.on("connection", (socket) => {
    console.log("User connected: "+socket.id);

    socket.on("message", (data) => {
        socket.broadcast.emit('message', data);
        console.log("data to clients: " + data);
    });
    socket.on("board", (board) => {
        socket.broadcast.emit('board', board);
        console.log("board to clients: " + board);
    });
});
