import React, { useState } from "react";

const Chat = ({ messages, sendMessage }) => {
  const [inputMessage, setInputMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputMessage);
    setInputMessage("");
  };

  return (
    <div className="chat-container">
      <header className="chat-header">
        <h1>ChatApp</h1>
      </header>
      <main className="chat-main">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className="message">{message}</div>
          ))}
        </div>
      </main>
      <div className="chat-form-container">
        <form id="chat-form" onSubmit={handleSubmit}>
          <input
            id="msg"
            type="text"
            placeholder="Enter Message"
            required
            autoComplete="off"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="form-control"
          />
          <button className="btn" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
