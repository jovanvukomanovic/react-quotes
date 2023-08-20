import React, { useState } from "react";
import useSingleFetch from "../hooks/useSingleFetch";
import { useNavigate } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { fetchToken } = useSingleFetch();

  const handleSubmit = () => {
    // console.log(`username ${username}`);
    // console.log(`password ${password}`);

    fetchToken(username, password);
    setUsername("");
    setPassword("");
    navigate("/quotes");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
}

export default Login;
