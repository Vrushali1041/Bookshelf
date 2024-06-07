import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import SearchBar from '../components/Searchbar';
import { Link } from 'react-router-dom';
import Searchbar from '../Components/Searchbar'
import SearchResults from '../Components/Searchresults';
import './style.css'

// BookSearchPage component for searching books
const BookSearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Fetch data from Open Library API when the query changes
    if (query) {
      axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => setResults(response.data.docs))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [query]);

  // Function to handle adding books to the local storage bookshelf
  const handleAddToBookshelf = book => {
    const existingBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    localStorage.setItem('bookshelf', JSON.stringify([...existingBooks, book]));
  };

  return (
    <div>
        <div className=" nav sticky-top">
        <Link to="/bookshelf" className='text-decoration-none '> <p className="text-white p-3 h3">My Bookshelf </p></Link>
        </div>

      <div className="book-search-page">
        <Searchbar value={query} onChange={e => setQuery(e.target.value)} />
        <SearchResults results={results} onAddToBookshelf={handleAddToBookshelf} />
      </div>
    </div>
  );
};

export default BookSearchPage;
