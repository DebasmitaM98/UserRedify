"use client";
import { Header } from "@/components/header";
import { useGetDetailsPdfList } from "@/components/query/user/getpdfdetailslist";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useParams } from "next/navigation";
import React from "react";

export default function DetailsPage() {
  const { id } = useParams();
  console.log(id, "id here");

  const { data } = useGetDetailsPdfList(id);

  const bookData = [
    { id: "1", title: "LOVE STORY", author: "Erich Segal", image: "/CuteGirl.jpg" },
    { id: "2", title: "HERE’S A STORY", author: "L.J Shen", image: "/Color.jpeg" },
    { id: "3", title: "FUN BEDTIME", author: "L.J Shen", image: "/Science.jpg" },
    { id: "4", title: "EVER AFTER", author: "Karen Kingsbury", image: "/Leaf.jpeg" },
    { id: "5", title: "FIRST WORDS", author: "L.J Shen", image: "/Science.jpg" },
  ];

  const selectedBook = bookData.find((book) => book.id === id);

  const bookDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <Header show= {true}/>
       <main className="flex flex-col items-start gap-8 pt-12 px-4 md:px-12 bg-[#f6f5e7]">
      {/* Book Section */}
      <section className="flex flex-col lg:flex-row w-full max-w-7xl mt-10 gap-6 px-4 md:px-8 mx-auto relative items-center">
        {/* Book Cover */}
        <div className="flex flex-col items-center justify-center gap-8 relative w-full max-w-[489px]">
          <div className="flex w-full max-w-[481px] gap-2.5 items-center justify-center relative">
            <div className="absolute w-[480px] h-[480px] rounded-full blur-[20px] bg-gradient-to-b from-[#f9ebac] via-[#f9ebac] to-[#e8f3ed]" />
            <img
              src={data?.data?.image || "/CuteGirl.jpg"}
              alt="Book cover"
              className="relative w-[340px] h-[402px] z-10 object-contain max-w-xs:w-[240px] max-w-xs:h-[300px]"
            />
          </div>
        </div>

        {/* Book Details */}
        <Card className="w-[483px] h-[410px] bg-white rounded-[29px] border-none max-w-full">
          <CardContent className="flex flex-col items-start justify-center gap-6 p-6 sm:p-10">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <h1 className="font-medium text-black text-[24px] sm:text-[30px] leading-9 font-['Roboto',Helvetica] w-full">
                  {data?.data?.name || "No Title"}
                </h1>
                <p className="font-normal text-[18px] sm:text-[20px] leading-9 font-['Roboto',Helvetica] w-full">
                  <span className="text-[#00000099]">Author</span>
                  <span className="text-black">: </span>
                  <span className="text-[#049165eb]">{data?.data?.author || "Unknown Author"}</span>
                </p>
              </div>
              <p className="font-normal text-sm leading-[22.4px] font-['Inter',Helvetica] text-[#1e1e1e]">
                {data?.data?.description}
              </p>
            </div>
            <div className="flex items-center w-full">
              <Button
                asChild
                className="rounded-[98px] bg-gradient-to-r mt-2 from-[rgba(16,166,79,1)] to-[rgba(19,173,124,1)] text-white font-normal text-base leading-4 font-['Inter',Helvetica] hover:opacity-90"
              >
                <a href={data?.data?.pdf} target="_blank" rel="noopener noreferrer">
                  Read Now
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Book List Section */}
      <section className="w-full bg-white py-8 px-4 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 justify-center">
          {bookData.map((book) => (
            <Card
              key={book.id}
              className="bg-white border border-gray-200 p-2 rounded-lg shadow-sm hover:shadow-md transition-transform duration-200"
            >
              <img
                src={book.image}
                alt={`${book.title} cover`}
                className="w-full h-[180px] sm:h-[200px] object-cover rounded-md"
              />
              <CardContent className="mt-2 p-0">
                <h3 className="text-sm font-medium text-black truncate">
                  {book.title}
                </h3>
                <p className="text-xs text-gray-500 truncate">{book.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
    </div>
   
  );
}
