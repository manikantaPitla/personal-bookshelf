import React, { useState } from "react";
import { BooksDisplay } from "../../universalStyles";
import BookItem from "../../components/BookItem";
import BookSearch from "../../components/BookSearch";

const apiStatus = {
  default: "DEFAULT",
  pending: "PENDING",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Home = () => {
  const [status, setStatus] = useState(apiStatus.default);
  const [booksList, setBooksList] = useState([]);
  const [shelfList, setShelfList] = useState(
    JSON.parse(localStorage.getItem("myBookShelf")) || []
  );

  const addToBookShelf = (book) => {
    const isBookExist = shelfList.includes(book);

    if (!isBookExist) {
      const updatedBookshelf = [...shelfList, book];
      setShelfList(updatedBookshelf);
      localStorage.setItem("myBookShelf", JSON.stringify(updatedBookshelf));
    }
  };

  const RenderDefault = () => <p>Search to show results.</p>;
  const RenderLoading = () => <p>Loading... Please wait!</p>;
  const RenderFailure = () => <p>Error Fetching Data...</p>;
  const RenderResults = () => (
    <>
      {booksList.map((eachBook) => (
        <BookItem
          key={eachBook.key}
          bookData={eachBook}
          bookAction={addToBookShelf}
          content="Add to bookShelf"
        />
      ))}
    </>
  );

  const RenderContent = () => {
    switch (status) {
      case apiStatus.pending:
        return <RenderLoading />;
      case apiStatus.success:
        return <RenderResults />;
      case apiStatus.failure:
        return <RenderFailure />;
      default:
        return <RenderDefault />;
    }
  };

  return (
    <>
      <BookSearch
        setBooksList={setBooksList}
        apiAction={{ setStatus, apiStatus }}
      />
      <BooksDisplay>
        <RenderContent />
      </BooksDisplay>
    </>
  );
};

export default Home;
