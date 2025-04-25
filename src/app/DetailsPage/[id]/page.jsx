import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default function DetailsPage() {
  const bookData = [
    { id: 1, title: "LOVE STORY", author: "Erich Segal", image: "/CuteGirl.jpg" },
    { id: 2, title: "HERE’S A STORY", author: "L.J Shen", image: "/Color.jpeg" },
    { id: 3, title: "FUN BEDTIME", author: "L.J Shen", image: "/Science.jpg" },
    { id: 4, title: "EVER AFTER", author: "Karen Kingsbury", image: "/Leaf.jpeg" },
    { id: 5, title: "FIRST WORDS", author: "L.J Shen", image: "/Science.jpg" },
    { id: 6, title: "MY IMAGINATION", author: "L.J Shen", image: "/Science.jpg" },
    { id: 7, title: "MEMORY", author: "L.J Shen", image: "/Science.jpg" },
  ];

  const bookDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <main className="flex flex-col items-start gap-[var(--size-space-600)] pt-[var(--size-space-1600)] px-4 md:px-[var(--size-space-4000)] bg-[#f6f5e7]">
      {/* Book Section */}
      <section className="flex flex-col lg:flex-row w-full max-w-[1100px] mt-15 gap-[17px] px-4 md:px-8 mx-auto relative items-center">
        {/* Book Cover Section */}
        <div className="flex flex-col items-center justify-center gap-[30px] relative w-full max-w-[489px]">
          <div className="flex w-full max-w-[481px] gap-2.5 items-center justify-center relative">
            <div className="absolute w-[480px] h-[480px] left-px rounded-full blur-[20px] bg-gradient-to-b from-[#f9ebac] via-[#f9ebac] to-[#e8f3ed] max-[768px]:w-[300px] max-[768px]:h-[300px]" />
            <img
              className="relative w-[340px] h-[402px] z-10 object-contain max-[480px]:w-[240px] max-[480px]:h-[300px]"
              alt="Book cover"
              src="https://c.animaapp.com/nUqxKKNr/img/image.png"
            />
          </div>
        </div>

        {/* Book Details Section */}
        <Card className="w-[483px] h-[410px] bg-white rounded-[29px] border-none max-[768px]:w-full max-[768px]:h-auto">
          <CardContent className="flex flex-col items-start justify-center gap-[var(--size-space-600)] p-[24px] sm:p-[40px]">
            <div className="flex flex-col items-start gap-6 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <h1 className="font-medium text-black text-[24px] sm:text-[30px] leading-9 font-['Roboto',Helvetica] w-full">
                  WAITED LONG ENOUGH
                </h1>
                <p className="font-normal text-[18px] sm:text-[20px] leading-9 font-['Roboto',Helvetica] w-full">
                  <span className="text-[#00000099]">Author</span>
                  <span className="text-black">: </span>
                  <span className="text-[#049165eb]">Richard Mann</span>
                </p>
              </div>
              <p className="font-normal text-sm leading-[22.4px] font-['Inter',Helvetica] text-[#1e1e1e]">
                {bookDescription}
              </p>
            </div>
            <div className="flex items-center w-full">
              <Button className="rounded-[98px] bg-gradient-to-r mt-2 from-[rgba(16,166,79,1)] to-[rgba(19,173,124,1)] text-white font-normal text-base leading-4 font-['Inter',Helvetica] hover:opacity-90">
                Read Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Other Books Section */}
      <div className="w-full px-4 md:px-6 py-10">
  <div className="flex flex-wrap md:flex-nowrap gap-4 sm:gap-6 overflow-x-auto md:overflow-visible bg-white">
    {bookData.map((book) => (
      <Card
        key={book.id}
        className="w-[45%] xs:w-[40%] sm:w-[130px] md:w-[140px] flex flex-col items-center px-2 py-3 rounded-lg border border-gray-200 shadow-sm bg-white"
      >
        <div className="w-full aspect-[3/4] overflow-hidden rounded flex items-center justify-center">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-full object-cover rounded transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        <CardContent className="flex flex-col items-start p-0 mt-1 ml-2 w-full">
          <h3 className="text-[11px] sm:text-[12px] font-semibold text-black truncate">
            {book.title}
          </h3>
          <p className="text-[10px] sm:text-[11px] text-gray-500 truncate">{book.author}</p>
        </CardContent>
      </Card>
    ))}
  </div>
</div>

    </main>
  );
}
