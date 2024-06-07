import React from 'react';
import BookCard from './Bookcard';

// SearchResults component to display the list of search results
const SearchResults = ({ results, onAddToBookshelf }) => (
  <div className="container mt-4">
  <div className="row">
    {results.map(book => (
      <div key={book.key} className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
        <BookCard book={book} onAddToBookshelf={onAddToBookshelf} />
      </div>
    ))}
  </div>

  
  </div>
);

export default SearchResults;
