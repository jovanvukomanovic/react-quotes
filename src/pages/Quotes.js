import React, { useState, useEffect } from "react";

import QuotesLink from "../components/QuotesLink";
import Pagination from "../components/Pagination";
import useFetch from "../hooks/useFetch";
function Quotes() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const {
    loading,
    data,
    fetchData,
    fetchTags,
    tags,
    pagesCount,
    fetchSortedData,
    // fetchBySortDirection,
  } = useFetch("http://localhost:3000/quotes");

  useEffect(() => {
    fetchData(selectedIndex);
  }, [selectedIndex]);

  useEffect(() => {
    fetchTags("http://localhost:3000/tags");
  }, []);

  //   option list
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  const filterByTags = (quotesArray, tagsArray) => {
    if (tagsArray.length === 0) {
      return quotesArray;
    }
    return quotesArray.filter((q) => q.tags.includes(...tagsArray));
  };
  // console.log(data);
  //   console.log(pagesCount);
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <button onClick={() => fetchSortedData(selectedIndex)}>
        Sort By Upvotes Count
      </button>
      <div onClick={toggleDropdown}>Select options for filter:</div>
      {isOpen && (
        <div>
          {tags?.map((t) => (
            <label key={t.id}>
              <input
                type="checkbox"
                name="tags"
                value={t}
                checked={selectedOptions.includes(t.value)}
                onChange={handleOptionChange}
              />
              {t}
            </label>
          ))}
        </div>
      )}
      {/* list of data  */}

      {filterByTags(data, selectedOptions)?.map((f) => (
        <QuotesLink key={f.id} quote={f} />
      ))}

      <Pagination
        data={data}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        pagesCount={pagesCount}
      />
    </div>
  );
}

export default Quotes;
