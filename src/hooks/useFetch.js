import { useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagesCount, setPagesCount] = useState();
  const [tags, setTags] = useState([]);
  const [limitPerPage, setLimitPerPage] = useState(5);
  // const [upvoteCountSort, setUpvoteCountSort] = useState("");
  //   const [quotesCount, setQuotesCount] = useState();

  const fetchData = async (selectedIndex) => {
    setLoading(true);
    let res = await axios.get(
      `${url}?page=${selectedIndex}&pageSize=${limitPerPage}`
    );
    let quoteData = res.data.quotes;
    setPagesCount(Math.ceil(res.data.quotesCount / 5));
    setData(quoteData);
    setLoading(false);
  };
  const fetchSortedData = async (selectedIndex) => {
    setLoading(true);
    let res = await axios.get(
      `${url}?page=${selectedIndex}&pageSize=${limitPerPage}&sortBy="upvotesCount"`
    );
    let quoteData = res.data.quotes;
    setPagesCount(Math.ceil(res.data.quotesCount / 5));
    setData(quoteData);
    setLoading(false);
  };
  // const fetchBySortDirection = async (selectedIndex) => {
  //   setLoading(true);
  //   let res = await axios.get(
  //     `${url}?page=${selectedIndex}&pageSize=${limitPerPage}&sortDirection="desc"`
  //   );
  //   let quoteData = res.data.quotes;
  //   setPagesCount(Math.ceil(res.data.quotesCount / 5));
  //   setData(quoteData);
  //   setLoading(false);
  // };

  const fetchTags = async () => {
    let res = await axios.get(url);
    let data = res.data;
    setTags(data);
  };

  return {
    loading,
    data,
    pagesCount,
    fetchData,
    fetchTags,
    tags,
    fetchSortedData,
    // fetchBySortDirection,
  };
}

export default useFetch;
