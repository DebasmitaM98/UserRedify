"use client";
import { Header } from "@/components/header";
import { useGetDetailsPdfList } from "@/components/query/user/getpdfdetailslist";
import { usegetPdfList } from "@/components/query/user/getpdflist";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";

export default function DetailsPage() {
  const { id } = useParams();
  console.log(id, "id here");
  const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setpageSize] = useState("10")

  const { data } = useGetDetailsPdfList(id);
   const { data:listData, isFetching } = usegetPdfList(currentPage, pageSize, "");

 
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



  const bookDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <Header show={true} />
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
                  <Link
                    href={`/pdfRead/${id}`}
                  >
                    Read Now
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Book List Section */}
        <section className="w-full bg-white py-8 px-4 sm:px-8">
         
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7  gap-y-6 pb-8">
        {listData?.list?.slice(0,7).map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
        </section>
      </main>
    </div>

  );
}
