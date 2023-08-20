import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useSingleFetch from "../hooks/useSingleFetch";

function Quote() {
  const { id } = useParams();
  // const [singleQuote, setSingleQuote] = useState();
  // const [userId, setUserId] = useState("");
  // const [token, setToken] = useState("");
  // const [error, setError] = useState();
  // const [givenVote, setGivenVote] = useState("");
  const URL = `http://localhost:3000/quotes/${id}`;

  const {
    fetchQuote,
    fetchToken,
    fetchUpVote,
    fetchDeleteupVote,
    fetchdownVote,
    fetchDeletedownVote,
    singleQuote,
    error,
    givenVote,
  } = useSingleFetch();

  // const fetchQuote = async () => {
  //   let res = await axios.get(URL);
  //   let data = res.data;
  //   // console.log(data);
  //   setSingleQuote(data);
  //   setUserId(data.userId);
  //   setGivenVote(data.givenVote);
  // };

  // const fetchToken = async () => {
  //   let res = await axios.post(`http://localhost:3000/token`, {
  //     id: "d964099a-1a2a-46f5-9782-e2601b5aac9e",
  //     username: "fazi",
  //     password: "1234",
  //   });
  //   let data = res.data;
  //   setToken(data);
  //   // console.log(res.data);
  // };

  useEffect(() => {
    fetchQuote();
    fetchToken();
  }, []);
  // console.log(userId);
  console.log(givenVote);

  // fetching and deleting upvote

  // const fetchUpVote = async () => {
  //   try {
  //     const res = await axios.post(
  //       `http://localhost:3000/quotes/${id}/upvote`,
  //       {
  //         userId: token,
  //       }
  //     );
  //     const data = res.data;
  //     setSingleQuote(data);
  //     setError(null);
  //     console.log(res.data);
  //     setToggleUpvote(true);
  //   } catch (error) {
  //     // console.error(error.response.data.error);
  //     setError(error.response.data.error);
  //   }
  // };
  // const fetchDeleteupVote = async () => {
  //   try {
  //     const res = await axios.delete(
  //       `http://localhost:3000/quotes/${id}/upvote`,
  //       {
  //         userId: token,
  //       }
  //     );
  //     const data = res.data;
  //     setSingleQuote(data);
  //     setError(null);
  //     console.log(res.data);
  //     setToggleUpvote(false);
  //   } catch (error) {
  //     // console.error(error.response.data);
  //     setError(error.response.data.error);
  //   }
  // };

  // // fetching and deleting downvote

  // const fetchdownVote = async () => {
  //   try {
  //     const res = await axios.post(
  //       `http://localhost:3000/quotes/${id}/downvote`,
  //       {
  //         userId: token,
  //       }
  //     );
  //     const data = res.data;
  //     setSingleQuote(data);
  //     setError(null);
  //     console.log(res.data);
  //     setToggleDownvote(true);
  //   } catch (error) {
  //     // console.error(error.response.data.error);
  //     setError(error.response.data.error);
  //   }
  // };
  // const fetchDeletedownVote = async () => {
  //   try {
  //     const res = await axios.delete(
  //       `http://localhost:3000/quotes/${id}/downvote`,
  //       {
  //         userId: token,
  //       }
  //     );
  //     const data = res.data;
  //     setSingleQuote(data);
  //     setError(null);
  //     console.log(res.data);
  //     setToggleDownvote(true);
  //   } catch (error) {
  //     // console.error(error.response.data);
  //     setError(error.response.data.error);
  //   }
  // };

  // let count = 100 / (singleQuote?.upvotesCount + singleQuote?.downvotesCount);

  // let upvotePercent = count * singleQuote?.upvotesCount;
  // let downVotePercent = count * singleQuote?.downvotesCount;
  // console.log(upvotePercent);
  // console.log(downVotePercent);

  // console.log(singleQuote);

  let count = 100 / (singleQuote?.upvotesCount + singleQuote?.downvotesCount);

  let upvotePercent = count * singleQuote?.upvotesCount;
  let downVotePercent = count * singleQuote?.downvotesCount;
  console.log(upvotePercent);
  console.log(downVotePercent);
  return (
    <div>
      {singleQuote?.givenVote === "upvote" ? (
        <button onClick={() => fetchDeleteupVote()}>delete upvote</button>
      ) : (
        <button onClick={() => fetchUpVote()}>upvote</button>
      )}

      {singleQuote?.givenVote === "downvote" ? (
        <button onClick={() => fetchDeletedownVote()}>delete downvote</button>
      ) : (
        <button onClick={() => fetchdownVote()}>downvote</button>
      )}

      <p>Vote: {singleQuote?.givenVote}</p>
      <p>Author: {singleQuote?.author}</p>
      <p>Content: {singleQuote?.content}</p>
      <p>Up votes :{singleQuote?.upvotesCount}</p>
      <p>Down votes :{singleQuote?.downvotesCount}</p>

      {/* percetnage  */}
      {/* {upvotePercent > downVotePercent ? (
        <p>{upvotePercent.toFixed(2)} %</p>
      ) : <p>{downVotePercent.toFixed(2)} %</p> ? (
        (upvotePercent = downVotePercent)
      ) : (
        <p>50%</p>
      )} */}
      {error && <p>error message : {error} </p>}
    </div>
  );
}

export default Quote;
