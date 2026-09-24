import React from 'react';
import Bannar from './components/homePage/Bannar';
import BooksPage from './components/homePage/Books';

const page = () => {
  return (
    <div>
      <Bannar />
      <BooksPage />
    </div>
  );
};

export default page;