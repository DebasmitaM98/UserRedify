"use client";


import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Listing = () => {
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


  const BookCard = ({ book }) => (
    <Card  className="w-[130px] sm:w-[140px] flex flex-col items-center px-2 py-3 rounded-lg border border-gray-200 shadow-sm bg-white">
      <Link href={`DetailsPage/${book.id}`} className="w-full">
        <img
          src={book.image}
          alt={`${book.title} cover`}
          className="w-full h-[140px] object-cover rounded-md shadow-sm transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105"
        />
      </Link>
      <CardContent className="flex flex-col items-start p-0 mt-1 ml-2 w-full">
        <p className="text-[10px] sm:text-[11px] font-medium text-green-700 truncate">
          {book.category || "General"}
        </p>
        <h3 className="text-[11px] sm:text-[12px] font-semibold text-black truncate">
          {book.title}
        </h3>
        <p className="text-[10px] sm:text-[11px] text-gray-500 truncate">{book.author}</p>
      </CardContent>
    </Card>
  );

  const SectionHeader = ({ title }) => (
    <div className="flex items-center justify-between w-full flex-wrap gap-3">
      <h2 className="text-base sm:text-xl font-medium text-black">{title}</h2>
      <div className="flex items-center gap-3 flex-wrap">
       
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="w-8 h-8 sm:w-10 sm:h-10 bg-[#effdf9] rounded-lg">
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="w-8 h-8 sm:w-10 sm:h-10 bg-[#eefff9] rounded-lg border">
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <main className="flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 mt-10 gap-8 sm:gap-10">
      
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 pb-8">
        {bookData.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      
    </main>
  );
};

export default Listing;
