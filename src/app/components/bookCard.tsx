import Image from "next/image";
import React from "react";
import { IBook } from "./type/book.type";
import Link from "next/link";

interface IBookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Book Image */}
      <div className="relative flex h-72 items-center justify-center bg-gray-50 p-6">
        <Image
          src={book.image}
          alt={book.bookName}
          width={180}
          height={250}
          className="h-full w-auto rounded-md object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow">
          {book.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Book name */}
        <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-gray-500">
          by <span className="font-medium text-gray-700">{book.author}</span>
        </p>

        {/* Rating + Pages */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="font-semibold text-gray-800">{book.rating}</span>
          </div>

          <span className="text-sm text-gray-500">{book.totalPages} pages</span>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-gray-100" />

        {/* Publisher + Year */}
        <div className="flex items-center justify-between text-sm">
          <div>
            <p className="text-xs text-gray-400">Publisher</p>
            <p className="font-medium text-gray-700">{book.publisher}</p>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-400">Published</p>
            <p className="font-medium text-gray-700">{book.yearOfPublishing}</p>
          </div>
        </div>

        {/* Button */}
        <Link href={`/books/${book.bookId}`}>
        <button className="mt-5 w-full rounded-xl bg-gray-900 py-3 text-sm font-semibold text-white transition hover:bg-gray-700">
          View Details
        </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
