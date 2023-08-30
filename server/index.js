import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server);

io.on('connection', socket =>{
    socket.on('message', (body) => { // mensaje que el front envia al back
        socket.broadcast.emit('message',{ 
        body,
        from: socket.id.slice(6)
        })
})})

server.listen(3000, () => {
    console.log('Server on port 3000')
});