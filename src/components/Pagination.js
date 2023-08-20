import React, { useState } from "react";

export default function Pagination({
  data,
  selectedIndex,
  setSelectedIndex,
  pagesCount,
}) {
  let arrOfNum = [];
  for (let i = selectedIndex - 2; i <= selectedIndex + 2; i++) {
    if (i > 0 && i <= pagesCount) {
      arrOfNum.push(i);
    }
  }
  return (
    <div>
      {selectedIndex !== 1 && (
        <button onClick={() => setSelectedIndex(selectedIndex - 1)}>
          Previous
        </button>
      )}

      {arrOfNum?.map((page, index) => (
        <button key={page} onClick={() => setSelectedIndex(index + 1)}>
          {page}
        </button>
      ))}
      {selectedIndex < pagesCount && (
        <button onClick={() => setSelectedIndex(selectedIndex + 1)}>
          Next
        </button>
      )}
    </div>
  );
}
