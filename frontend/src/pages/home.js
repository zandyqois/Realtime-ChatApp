import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Home() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate(`/chat?username=${formData.username}`);
  };

  return (
    <div className="join-container">
      <header className="join-header">
        <h1>ChatApp</h1>
      </header>
      <main className="join-main">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username..."
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn">Join Chat</button>
        </form>
      </main>
    </div>
  );
}

export default Home;
