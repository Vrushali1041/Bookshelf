import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import BookSearchPage from './pages/BookSearchPage';
// import BookshelfPage from './pages/BookshelfPage';
import BooksearchPage from './Pages/BooksearchPage'
import BookshelfPage from './Pages/BookshelfPage'
// App component with routing setup
const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<BooksearchPage />} />
      <Route path="/bookshelf" element={<BookshelfPage />} />
    </Routes>
  </Router>
);

export default App;
