import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useSingleFetch from "../hooks/useSingleFetch";

function LoggedInNav() {
  const { token } = useSingleFetch();
  // const loggedIn = JSON.parse(localStorage.getItem("token"));
  console.log(token);

  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>

        {/* <li>{token && <Link to={"/quotes"}> Quotes </Link>}</li> */}
        <li>
          <Link to={"/quotes"}> Quotes </Link>
        </li>
        {/* <li>{token && <Link to={"/newquote"}> NewQuote </Link>}</li> */}

        <li>
          <Link to={"/newquote"}>New Quote</Link>
        </li>
        <li>
          <Link to={"/login"}> Login</Link>
        </li>
        <li>
          <Link to={"/signup"}> signup</Link>
        </li>
      </ul>
    </div>
  );
}

export default LoggedInNav;
