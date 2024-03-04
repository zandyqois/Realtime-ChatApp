import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Chat from "./pages/chat";
import io from "socket.io-client";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState([]);

  useEffect(() => {
    const socketInstance = io.connect("http://localhost:3001");
    setSocket(socketInstance);

    socketInstance.on('message', message => {
      console.log(message);
      setMessages(prevMessages => [...prevMessages, message]);
    });
  }, []);

  const sendMessage = (message) => {
      socket.emit('chatMessage', message);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat' element={<Chat messages={messages} sendMessage={sendMessage} />} />
      </Routes>
    </BrowserRouter>
  );
}
