import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import BookShelf from "./Pages/BookShelf";
import { Main } from "./universalStyles";

function App() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-bookshelf" element={<BookShelf />} />
      </Routes>
    </Main>
  );
}

export default App;
