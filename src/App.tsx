import { useEffect, useState } from "react";
import "./App.css";
import Book, { BookType } from "./Book";
import axios from "axios";

const App = () => {
  const [books, setBooks] = useState<BookType[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBooks() {
      try {
        // uncomment this line below to use localhost
        /* const response = await axios.get("http://localhost:4000/books"); */
        const response = await axios.get("/api/books");

        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setError("Failed to fetch books");
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="app">
      <h2 className="title">Books List</h2>
      <ul>
        {books &&
          books.map((book: BookType) => (
            <li key={book.id}>
              <Book
                id={book.id}
                title={book.title}
                assignedTo={book.assignedTo}
                author={book.author}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
