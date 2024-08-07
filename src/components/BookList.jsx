import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SingleBook from "./SingleBook";
import Spinner from "./Spinner";
import Search from "./Search";

const BookList = ({ isHome = false, search }) => {
  const [books, setBooks] = useState([]); //initialized to empty array
  const [loading, setLoading] = useState(true);//initialized the loading to true 
  
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
    return <Spinner />; // Handle loading state
  }
  return (
    <div className="bg-blue-50 px-4 py-6 flex flex-col items-center">
      <h1 className="text-indigo-500 text-3xl font-bold text-center mb-4">
        {isHome ? "Recent Books" : "Searched Books"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-4">
        {isHome ? books && books.slice(0, 8).map((book, index) => (
          <SingleBook key={index} book={book} />
        )) : books && books.map((book, index)=>(
            <SingleBook key={index} book={book} />
        ))}
      </div>
      {isHome ? <Link to={'/books'} className=" h-[36px] bg-black hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-center text-sm">
              View All books
        </Link> : ""}
    </div>
  );
};

export default BookList;
