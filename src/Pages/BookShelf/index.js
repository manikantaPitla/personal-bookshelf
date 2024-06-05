import React, { useState, useEffect } from "react";
import BookItem from "../../components/BookItem";
import { BooksDisplay, NavBanner } from "../../universalStyles";
import { Link } from "react-router-dom";

const BookShelf = () => {
  const [myBookshelf, setMyBookshelf] = useState([]);

  useEffect(() => {
    const shelfData = JSON.parse(localStorage.getItem("myBookShelf"));

    if (shelfData) {
      setMyBookshelf(shelfData);
    } else {
      setMyBookshelf([]);
    }
  }, []);

  const removeFromBookshelf = (bookData) => {
    console.log(bookData);
    const filteredBookshelf = myBookshelf.filter(
      (book) => book.key !== bookData.key
    );

    setMyBookshelf(filteredBookshelf);
    localStorage.setItem("myBookShelf", JSON.stringify(filteredBookshelf));
  };

  const RenderContent = () => (
    <>
      {myBookshelf.length !== 0 ? (
        <>
          {myBookshelf.map((eachBook) => (
            <BookItem
              key={eachBook.key}
              bookData={eachBook}
              bookAction={removeFromBookshelf}
              content="Remove from bookShelf"
            />
          ))}
        </>
      ) : (
        <p>Your Bookshelf is empty.</p>
      )}
    </>
  );

  return (
    <>
      <NavBanner>
        <h1>My Bookshelf</h1>
        <Link to="/">
          <button>Home</button>
        </Link>
      </NavBanner>
      <BooksDisplay>
        <RenderContent />
      </BooksDisplay>
    </>
  );
};

export default BookShelf;
