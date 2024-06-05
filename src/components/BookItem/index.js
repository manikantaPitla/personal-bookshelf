import React from "react";
import { BookCard, BookContent } from "./style";

const BookItem = ({ bookData, bookAction, content }) => {
  return (
    <BookCard>
      <BookContent>
        <p>
          <strong>Book Title: </strong>
          {bookData.title}
        </p>
        <p>
          <strong>Edition Count:</strong>
          {bookData.edition_count}
        </p>
      </BookContent>
      {!bookData.added_to_shelf && (
        <button onClick={() => bookAction(bookData)}>{content}</button>
      )}
    </BookCard>
  );
};

export default BookItem;
