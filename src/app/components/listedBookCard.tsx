import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IBook } from './type/book.type';

const ListedBookCard = ({book}:{book: IBook}) => {
    return (
        <div className="group flex w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
  {/* Book Image */}
  <div className="relative flex w-48 shrink-0 items-center justify-center bg-gray-50 p-5">
    <Image
      src={book.image}
      alt={book.bookName}
      width={150}
      height={220}
      className="h-52 w-auto rounded-md object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
    />

    {/* Category */}
    <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow">
      {book.category}
    </span>
  </div>

  {/* Content */}
  <div className="flex flex-1 flex-col justify-between p-6">
    <div>
      {/* Book Name */}
      <h2 className="text-2xl font-bold text-gray-900">
        {book.bookName}
      </h2>

      {/* Author */}
      <p className="mt-1 text-sm text-gray-500">
        By{" "}
        <span className="font-medium text-gray-700">
          {book.author}
        </span>
      </p>

      {/* Review */}
      <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-600">
        {book.review}
      </p>

      {/* Rating + Pages */}
      <div className="mt-5 flex items-center gap-6">
        <div className="flex items-center gap-1">
          <span className="text-lg text-yellow-400">★</span>
          <span className="font-semibold text-gray-800">
            {book.rating}
          </span>
        </div>

        <span className="text-sm text-gray-500">
          {book.totalPages} pages
        </span>
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
    </div>

    {/* Bottom Section */}
    <div className="mt-6 flex items-end justify-between border-t border-gray-100 pt-5">
      <div>
        <p className="text-xs text-gray-400">Publisher</p>
        <p className="font-medium text-gray-700">
          {book.publisher}
        </p>
      </div>

      <div>
        <p className="text-xs text-gray-400">Published</p>
        <p className="font-medium text-gray-700">
          {book.yearOfPublishing}
        </p>
      </div>

      <Link href={`/books/${book.bookId}`}>
        <button className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700">
          View Details →
        </button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default ListedBookCard;