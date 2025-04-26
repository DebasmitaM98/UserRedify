"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { usegetPdfList } from "@/components/query/user/getpdflist";
import Image from "next/image";

const Listing = ({ searchQuery }) => {
  const bookData = [
    { id: 1, title: "LOVE STORY", author: "Erich Segal", image: "/CuteGirl.jpg" },
    { id: 2, title: "HERE’S A STORY", author: "L.J Shen", image: "/Color.jpeg" },
    { id: 3, title: "FUN BEDTIME", author: "L.J Shen", image: "/Science.jpg" },
    { id: 4, title: "EVER AFTER", author: "Karen Kingsbury", image: "/Leaf.jpeg" },
    { id: 5, title: "FIRST WORDS", author: "L.J Shen", image: "/Science.jpg" },
    { id: 6, title: "MY IMAGINATION", author: "L.J Shen", image: "/Science.jpg" },
    { id: 7, title: "MEMORY", author: "L.J Shen", image: "/Science.jpg" },
    { id: 8, title: "NEVER ENDING SKY", author: "L.J Shen", image: "/CuteGirl.jpg" },
    { id: 9, title: "DARK WORLD", author: "L.J Shen", image: "/CuteGirl.jpg" },
    { id: 10, title: "THE PAST", author: "L.J Shen", image: "/CuteGirl.jpg" },
    { id: 11, title: "JUST BEYOND", author: "L.J Shen", image: "/CuteGirl.jpg" },
    { id: 12, title: "WHEN WE WERE", author: "L.J Shen", image: "/CuteGirl.jpg" },
  ];

  const filteredBooks = bookData.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const {data}=usegetPdfList(0,10);
  console.log(data,"data here")

  const BookCard = ({ book }) => (
    <Card className="w-[140px] sm:w-[160px] flex flex-col items-center px-2 py-3  border border-gray-200  bg-white">
      <Link href={`DetailsPage/${book.id}`} className="w-full">
        <img
          src={book.image}
          alt={`${book.name} cover`}
          height={50}
          width={3}
          className="w-full h-[230px] object-cover rounded-md shadow-sm transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105"
        />
      </Link>
      <CardContent className="flex flex-col items-start p-0 mt-1 ml-2 w-full">
        <h3 className="text-[11px] sm:text-[12px] font-semibold text-black truncate">
          {book.name}
        </h3>
        <p className="text-[10px] sm:text-[11px] text-gray-500 truncate">
          {book.author}
        </p>
      </CardContent>
    </Card>
  );
  

  return (
    <main className="flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 mt-10 gap-8 sm:gap-10">
     
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7  gap-y-6 pb-8">
        {data?.list.map((book,index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </main>
  );
};

export default Listing;
