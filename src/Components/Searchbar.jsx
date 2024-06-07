import React from 'react';
import searchImg from '../Assets/search.svg'
import './home.css'

// SearchBar component for the input field to search for books
const SearchBar = ({ value, onChange }) => (
  <div className='pt-4'> 
    <p className='h5  d-flex justify-content-center align-items-center'>Search by book name</p>
    <div class="container">
      <div class="row  d-flex justify-content-center align-items-center">
        <div class="col-md-6">
          <div class="form">
            <img src={searchImg} alt="" className='icons' />
            <input type="text" class="form-control form-input rounded-pill" placeholder="Search for books..."
              onChange={onChange} value={value} />
          </div>

        </div>

      </div>

    </div>
  </div>
);

export default SearchBar;
