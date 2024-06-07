import React from 'react';
import './home.css'
// BookCard component to display each book's information
const BookCard = ({ book, onAddToBookshelf }) => (
  <div className='container'>
    <div className=" d-flex flex-row m-auto  mt-4  ">
      <div className="custum-card p-4 " style={{ width: "460px" }}  >
        <p className='titles'>Book Title : <span className='result'>{book.title}</span></p>
        <p className='titles  '>Edition Count : <span className='result'>{book.edition_count}</span></p>
        <button className="custom-btn btn-3 w-100 mb-2" onClick={() => onAddToBookshelf(book)}> <span>Add to Bookshelf</span></button>
      </div>
    </div>
    {/* <p>Edition Count: {book.author_name && book.author_name.join(', ')}</p> */}
  </div>
);

export default BookCard;
