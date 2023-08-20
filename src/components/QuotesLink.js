import React from "react";
import { Link } from "react-router-dom";

function QuotesLink({ quote }) {
  return (
    <div>
      <Link to={`/${quote.id}`}>
        <li key={quote.id}>
          <h1>{quote?.author}</h1>
          <h2>{quote?.content}</h2>
        </li>
      </Link>
    </div>
  );
}

export default QuotesLink;
