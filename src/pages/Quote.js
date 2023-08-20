import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useSingleFetch from "../hooks/useSingleFetch";

function Quote() {
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

  useEffect(() => {
    fetchQuote();
    // fetchToken();
  }, []);

  // percentage count
  let count = 100 / (singleQuote?.upvotesCount + singleQuote?.downvotesCount);
  let upvotePercent = count * singleQuote?.upvotesCount;
  let downVotePercent = count * singleQuote?.downvotesCount;

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
      {upvotePercent > downVotePercent ? (
        <p>{upvotePercent.toFixed(2)} %</p>
      ) : <p>{downVotePercent.toFixed(2)} %</p> ? (
        (upvotePercent = downVotePercent)
      ) : (
        <p>50%</p>
      )}
      {error && <p>error message : {error} </p>}
    </div>
  );
}

export default Quote;
