import { useState, useEffect } from "react";
import SingleBook from "./SingleBook";

const BookList = ({ isHome = false }) => {
  const [books, setBooks] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBooks = async () => {
      const url = "https://openlibrary.org/search.json?title=hello";
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data && data.docs && Array.isArray(data.docs)) { // Check if data.docs is an array
          console.log(data);
          setBooks(data.docs); // Set the array of books
        } else {
          setBooks([]); // Set as empty array if no data or incorrect format
        }
      } catch (error) {
        console.log("Error fetching data", error);
        setBooks([]); // Set as empty array in case of error
      } finally {
        setLoading(false);
      }
    };
    getBooks();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Handle loading state
  }
  return (
    <div className="bg-blue-50 px-4 py-6">
      <h1 className="text-indigo-500 text-3xl font-bold text-center mb-4">
        Searched Books
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-4">
        {books && books.map((book, index) => (
          <SingleBook key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
