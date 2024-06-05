import React, { useState } from "react";
import { InputEl } from "./style";
import { NavBanner } from "../../universalStyles";
import { Link } from "react-router-dom";
import axios from "axios";

const BookSearch = ({ setBooksList, apiAction }) => {
  const [query, setQuery] = useState("");

  const { apiStatus, setStatus } = apiAction;

  const getBooks = async (e) => {
    setStatus(apiStatus.pending);
    setQuery(e.target.value);

    if (e.target.value) {
      try {
        const response = await axios.get(
          `https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`
        );

        const requiredData = response.data.docs.map((eachBook) => {
          return {
            key: eachBook.key,
            title: eachBook.title,
            author: eachBook.author_name[0],
            edition_count: eachBook.edition_count,
          };
        });

        const checkExistInBookshelf = () => {
          const myBookshelf = JSON.parse(localStorage.getItem("myBookShelf"));

          for (const book of myBookshelf) {
            for (const bookItem of requiredData) {
              if (book.key === bookItem.key) {
                bookItem.added_to_shelf = true;
                break; 
              }
            }
          }
        };

        checkExistInBookshelf();

        setBooksList(requiredData);
        setStatus(apiStatus.success);
      } catch (err) {
        setStatus(apiStatus.failure);
        console.log("ERROR", err.message);
      }
    } else {
      setBooksList([]);
    }
  };

  return (
    <NavBanner>
      <InputEl
        type="search"
        placeholder="Search Book By Name"
        value={query}
        onChange={getBooks}
      />
      <Link to="my-bookshelf">
        <button>My Bookshelf</button>
      </Link>
    </NavBanner>
  );
};

export default BookSearch;
