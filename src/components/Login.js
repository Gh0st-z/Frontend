import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
        <h1>Welcome Back!</h1>
        <div className="wrap-input100">
          <span className="label-input100">Username:</span>
          <input
            className="input100"
            type="text"
            name="username"
            placeholder="Type your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="wrap-input100">
          <span className="label-input100">Password:</span>
          <input
            className="input100"
            type="password"
            name="password"
            placeholder="Type your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* ... other form fields and buttons ... */}
        <div className="social-icons">
        </div>
      </form>
    </div>
  );
}

export default LoginForm;