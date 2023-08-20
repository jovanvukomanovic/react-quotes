import React, { useId, useState, useEffect } from "react";
import axios from "axios";
import "./Form.css";

function NewQuote() {
  const quoteId = useId();
  const [qouteObj, setQuoteObj] = useState({});
  const [tags, setTags] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const fetchTags = async () => {
    let res = await axios.get("http://localhost:3000/tags");
    let data = res.data;
    // console.log(data);
    setTags(data);
  };

  useEffect(() => {
    fetchTags();
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getInputs = (e) => {
    let { name, value } = e.target;
    let data = {
      [name]: value,
      tags: [...selectedOptions, value],
      //   tags: [selectedOptions],
    };
    // const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }

    setQuoteObj({
      ...qouteObj,
      ...data,
      //   tags: [...selectedOptions],
    });
  };
  //   let submitObj;
  const handleSubmit = async () => {
    let res = await axios.post("http://localhost:3000/quotes", {
      ...qouteObj,
      ...selectedOptions,
      id: quoteId,
      createdAt: new Date(),
    });
    let data = res;
    // console.log(data);
  };

  //   console.log(qouteObj);
  //   console.log(selectedOptions);
  return (
    <div>
      <h1>Make a new Quote:</h1>
      <form onSubmit={() => handleSubmit()}>
        <input
          type="text"
          placeholder="Author"
          name="author"
          onChange={(e) => getInputs(e)}
        />
        <input
          type="textarea"
          placeholder="Content"
          name="content"
          onChange={(e) => getInputs(e)}
        />

        <div onClick={toggleDropdown} className="btn">
          Select tags:
        </div>
        {isOpen && (
          <ul>
            {tags?.map((t) => (
              <li>
                <label key={t}>
                  <input
                    type="checkbox"
                    name="tags"
                    value={t}
                    checked={selectedOptions.includes(t)}
                    // onChange={handleOptionChange}
                    onChange={(e) => getInputs(e)}
                  />
                  {t}
                </label>
              </li>
            ))}
          </ul>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewQuote;
