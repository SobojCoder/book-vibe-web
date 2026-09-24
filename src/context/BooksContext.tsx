'use client';
import React, { createContext, ReactNode, useState } from 'react';

export const BooksContext = createContext({});

const BooksProvider = ({children}:{children: ReactNode}) => {

    const [readBooks,setReadBooks] = useState([]);
    const [wishlist,setWishlist] = useState([]);

    const shareData ={
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist,
    }


    return (
        <BooksContext.Provider value={shareData}>{children}</BooksContext.Provider>
    );
};

export default BooksProvider;