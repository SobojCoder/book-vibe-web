import ReadButton from "@/app/components/booksDetails/ReadButton";
import WishlistButton from "@/app/components/booksDetails/wishlistButton";
import { IBook } from "@/app/components/type/book.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = response.json();
  return data;
};

interface IBookDetailsPageProps {
  params: Promise<{
    bookId: string;
  }>;
}

const BookDetailsPages = async ({ params }: IBookDetailsPageProps) => {
  const booksData = await getBooks();
  const { bookId } = await params;

  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(bookId),
  ) as IBook;
  return (
    <div className="min-h-screen bg-[#f7f9f8] py-12">
      <div className="container mx-auto px-4">
        {/* Main Wrapper */}
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="grid lg:grid-cols-12">
            {/* ================= LEFT ================= */}
            <div className="relative flex items-center justify-center bg-[#eaf7ed] p-8 sm:p-12 lg:col-span-5">
              {/* Background Decoration */}
              <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-[#23BE0A]/10 blur-2xl"></div>
              <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-[#59c6d2]/10 blur-3xl"></div>

              <div className="relative">
                {/* Book Shadow */}
                <div className="absolute left-1/2 top-8 h-[340px] w-[230px] -translate-x-1/2 rounded-2xl bg-black/20 blur-2xl"></div>

                <Image
                  src={book.image}
                  alt={book.bookName}
                  width={260}
                  height={370}
                  className="relative h-[370px] w-auto rounded-lg object-cover shadow-2xl transition duration-500 hover:-translate-y-3"
                />

                
              </div>
            </div>

            {/* ================= RIGHT ================= */}
            <div className="lg:col-span-7">
              <div className="p-7 sm:p-10 lg:p-12">
                {/* Top */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full bg-[#23BE0A]/10 px-4 py-2 text-sm font-bold text-[#23BE0A]">
                    {book.category}
                  </span>

                  <span className="text-sm font-medium text-gray-400">
                    Book ID: #{book.bookId}
                  </span>
                </div>

                {/* Title */}
                <h1 className="mt-6 max-w-2xl text-4xl font-black leading-[1.1] tracking-tight text-gray-900 sm:text-5xl">
                  {book.bookName}
                </h1>

                {/* Author */}
                <p className="mt-4 text-lg text-gray-500">
                  Written by{" "}
                  <span className="font-bold text-gray-900">{book.author}</span>
                </p>

                {/* Rating */}
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <div className="flex gap-1 text-xl">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={
                          star <= Math.round(book.rating)
                            ? "text-[#ffad0a]"
                            : "text-gray-200"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <span className="font-bold text-gray-800">{book.rating}</span>

                  <span className="text-sm text-gray-400">out of 5</span>
                </div>

                {/* Divider */}
                <div className="my-7 h-px bg-gray-100"></div>

                {/* About */}
                <div>
                  <h2 className="text-xl font-extrabold text-gray-900">
                    About the Book
                  </h2>

                  <p className="mt-3 leading-7 text-gray-500">{book.review}</p>
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {book.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* ================= INFO BOX ================= */}
                <div className="mt-8 rounded-2xl bg-[#f7faf8] p-5">
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-400">
                    Book Information
                  </h3>

                  <div className="grid grid-cols-2 gap-y-5 sm:grid-cols-4">
                    <div>
                      <p className="text-xs text-gray-400">Pages</p>
                      <p className="mt-1 font-extrabold text-gray-900">
                        {book.totalPages}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">Published</p>
                      <p className="mt-1 font-extrabold text-gray-900">
                        {book.yearOfPublishing}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">Publisher</p>
                      <p className="mt-1 truncate font-extrabold text-gray-900">
                        {book.publisher}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">Rating</p>
                      <p className="mt-1 font-extrabold text-gray-900">
                        {book.rating} / 5
                      </p>
                    </div>
                  </div>
                </div>

                {/* ================= BUTTONS ================= */}
                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">

                  <ReadButton book={book}/>

                  <WishlistButton book={book}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPages;
