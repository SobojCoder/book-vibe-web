"use client";
import { BooksContext } from "@/context/BooksContext";
import React, { useContext } from "react";
import { IBook } from "../components/type/book.type";
import BookCard from "../components/bookCard";
import ListedBookCard from "../components/listedBookCard";

const ListedBooksPage = () => {
  const { readBooks, wishlist } = useContext(BooksContext);
  console.log(readBooks, wishlist, "read");
  return (
    <div className="container mx-auto py-3">
        <h2 className="text-center text-2xl bg-gray-100 rounded-2xl my-4  py-7">Books</h2>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          
            {
                  readBooks.length >0 ?  readBooks.map((book: IBook) => {
                    return <ListedBookCard key={book.bookId} book={book} />
                }):(<p className="text-center text-lg font-semibold">No Read Books Found</p>)
            }
        </div>
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {
                wishlist.length > 0 ? wishlist.map((book: IBook) => {
                    return <ListedBookCard key={book.bookId} book={book} />
                }):( <p className="text-center text-lg font-semibold">No Wishlist Books Found</p>)
            }
        </div>

      </div>
    </div>
  );
};

export default ListedBooksPage;
