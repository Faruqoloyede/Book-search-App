
import { Link } from "react-router-dom"
import { books } from "../book"

const BookList = ({ isHome = false }) => {
  const booklisting = isHome ? books.slice(0, 4) : books;
  return (
    <div className='bg-blue-50 px-4 py-6'>
        <h1 className='text-indigo-500 text-3xl font-bold text-center mb-4'>Searched Books</h1>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 my-4'>
            {booklisting.map((item)=>(
              <div className="bg-white rounded-xl shadow-md p-3 flex flex-col text-center " key={item.id}>
              <img src={item.img} alt="" className="object-contain w-full" />
              <div className="text-center">
                <p className="text-gray-600 font-bold text-xl my-2">{item.title}</p>
                <p className="mb-2"><span className="font-bold">Author:</span> {item.author}</p>
                <p className="mb-2"><span className="font-bold">Total Editions:</span> {item.edition}</p>
              </div>
              <div className='border border-gray-100 mb-5'></div>
              <Link to={`/books/${item.id}`} className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm" >
                  Read more
              </Link>
          </div>
            ))}
        </div>
        {isHome && <div className="flex items-center justify-center">
        <Link to={"/books"} className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm" >
                  View more
        </Link>
        </div>}
    </div>
  )
}

export default BookList