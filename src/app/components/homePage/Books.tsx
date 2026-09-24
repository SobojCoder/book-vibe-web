import React from "react";
import BookCard from "../bookCard";
import { IBook } from "../type/book.type";
const getBooks = async() =>{
    const response = await fetch('http://localhost:3000/booksData.json');
    const data = response.json();
    return data;
}
const BooksPage = async() => {
    const booksData = await getBooks();
  return (
    <section className="container mx-auto my-8">
      <div className="text-3xl text-center font-bold mb-5">
        <h2>Books</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {
            booksData.map((book: IBook) => <BookCard key={book.bookId} book={book} /> )
        }
      </div>
    </section>
  );
};

export default BooksPage;
