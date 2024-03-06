const { Server } = require('socket.io');

function initializeSocket(server) {
    const io = new Server(server, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"]
        },
    });

    io.on('connection', (socket) => {
        const botName = "ChatApp Bot";
        
        socket.emit('message', 'Welcome to chatApp');
        
        socket.broadcast.emit('message', 'A user has joined the chat');
        
        socket.on('chatMessage', msg => {
            io.emit('message', msg);
        });
        
        socket.on('disconnect', () => {
            io.emit('message', 'A user has left the chat');
        });
    });
}

module.exports = initializeSocket;
