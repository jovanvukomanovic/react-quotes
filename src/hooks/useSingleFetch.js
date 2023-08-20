import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function useSingleFetch() {
  const { id } = useParams();
  const [singleQuote, setSingleQuote] = useState();
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState();
  const [givenVote, setGivenVote] = useState("");
  const URL = `http://localhost:3000/quotes/${id}`;

  const fetchQuote = async () => {
    let res = await axios.get(URL);
    let data = res?.data;
    // console.log(data);
    setSingleQuote(data);
    setUserId(data.userId);
    setGivenVote(data.givenVote);
  };

  const fetchToken = async (username, password) => {
    console.log(username, password);
    let res = await axios.post(`http://localhost:3000/token`, {
      username: username,
      password: password,
      //   username: "fazi",
      //   password: "1234",
    });
    let data = res?.data;
    setToken(data);
    // localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("loggedIn", "loggedIn");
    // console.log(res.data);
  };
  console.log(token);
  // fetching and deleting upvote

  const fetchUpVote = async () => {
    try {
      const res = await axios.post(
        `http://localhost:3000/quotes/${id}/upvote`,
        {
          //   userId: token,
          //   userId: JSON.parse(localStorage.getItem("token", token)),
        }
      );
      const data = res?.data;
      setSingleQuote(data);
      setError(null);
      console.log(res.data);
    } catch (error) {
      // console.error(error.response.data.error);
      setError(error.response.data.error);
    }
  };
  const fetchDeleteupVote = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/quotes/${id}/upvote`,
        {
          //   userId: token,
          //   userId: JSON.parse(localStorage.getItem("token", token)),
        }
      );
      const data = res?.data;
      if (data) {
        setSingleQuote(data);
      }
      //   setSingleQuote(data);
      setError(null);
      console.log(res.data);
    } catch (error) {
      // console.error(error.response.data);
      setError(error.response.data.error);
    }
  };

  // fetching and deleting downvote

  const fetchdownVote = async () => {
    try {
      const res = await axios.post(
        `http://localhost:3000/quotes/${id}/downvote`,
        {
          //   userId: token,
          //   userId: JSON.parse(localStorage.getItem("token", token)),
        }
      );
      const data = res?.data;
      setSingleQuote(data);
      setError(null);
      console.log(res.data);
    } catch (error) {
      // console.error(error.response.data.error);
      setError(error.response.data.error);
    }
  };
  const fetchDeletedownVote = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/quotes/${id}/downvote`,
        {
          //   userId: token,
          //   userId: JSON.parse(localStorage.getItem("token", token)),
        }
      );
      const data = res?.data;
      setSingleQuote(data);
      setError(null);
      console.log(res.data);
    } catch (error) {
      // console.error(error.response.data);
      setError(error.response.data.error);
    }
  };

  // console.log(singleQuote);
  return {
    fetchQuote,
    fetchToken,
    fetchUpVote,
    fetchDeleteupVote,
    fetchdownVote,
    fetchDeletedownVote,
    singleQuote,
    error,
    givenVote,
    token,
  };
}

export default useSingleFetch;
