import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Quotes App</h1>
      Please Login or Sign Up
      <p>
        <Link to={"/login"}>Login</Link>
      </p>
      <p>
        <Link to={"/signup"}>Sign Up</Link>
      </p>
    </div>
  );
}

export default Home;
