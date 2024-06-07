import React, { useEffect, useState } from 'react';
// import Bookshelf from '../components/Bookshelf';
import Bookshelf from '../Components/Bookshelf';
import { Link } from 'react-router-dom';

// BookshelfPage component to display the user's bookshelf
const BookshelfPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Load books from local storage when the component mounts
    const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBooks(storedBooks);
  }, []);

  return (
    <div className="bookshelf-page">
      <div className=" nav sticky-top">
        <Link to="/" className='text-decoration-none '> <p className="text-white p-3 h3">Back to Search</p></Link>
      </div>
      <Bookshelf books={books} />
    </div>
  );
};

export default BookshelfPage;
