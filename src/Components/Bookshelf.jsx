import React from 'react';
import './home.css'

// Bookshelf component to display the user's saved books
const Bookshelf = ({ books }) => (
  <div className='container mt-3'>
    <p className='h3 d-flex justify-content-center align-items-center'>My Bookshelf</p>
    <div className="row m-auto ">
      {books.map(book => (
        <div key={book.key} className=" col-12 col-sm-6 col-md-4 col-lg-3 ">
          <div className='custum-card p-4 m-2'>
            <p className='titles'>Book Title : <span className='result'>{book.title}</span></p>
            <p className='titles  '>Edition Count : <span className='result'>{book.edition_count}</span></p>
            {/* <p>{book.author_name && book.author_name.join(', ')}</p> */}
          </div>
        </div>
      ))}
    </div>
  </div>

);

export default Bookshelf;
