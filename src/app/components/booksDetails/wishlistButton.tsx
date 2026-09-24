"use client";
import { BooksContext } from "@/context/BooksContext";
import Link from "next/link";
import React, { useContext } from "react";
import { IBook } from "../type/book.type";
import { toast } from "react-toastify";

const WishlistButton = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(BooksContext);

  const heandleReadBook = () => {
    setWishlist([...wishlist, book]);
    toast.success(`You have read ${book.bookName}`);
  };

  return (
    <div>
      <Link
        onClick={() => heandleReadBook()}
        href="#"
        className="flex h-13 items-center justify-center rounded-xl bg-[#23BE0A] px-6 font-bold text-white shadow-lg shadow-[#23BE0A]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#1da509]"
      >
        Add to Wishlist
      </Link>
    </div>
  );
};

export default WishlistButton;
