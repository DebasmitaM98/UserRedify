"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { usegetPdfList } from "@/components/query/user/getpdflist";
import { Pagination } from "@/components/Pagination";

const Listing = ({ searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState("10");

  const { data, isFetching } = usegetPdfList(currentPage, pageSize, searchQuery);
  console.log(data, "data here");

  const handleNextPage = () => {
    if (!isFetching && currentPage + 1 < data?.totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviosPage = () => {
    if (!isFetching && currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const BookCard = ({ book }) => (
    <Card className="w-[140px] sm:w-[160px] flex flex-col items-center px-2 py-3 border border-gray-200 bg-white">
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
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-y-6 pb-8">
        {data?.list?.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>

      <div className="pb-2">
        {data?.list?.length > 0 && (
          <Pagination
            pageSize={pageSize}
            currentPage={currentPage}
            setpageSize={(size) => setPageSize(size)}
            setPage={setCurrentPage}
            handleNextPage={handleNextPage}
            handlePreviosPage={handlePreviosPage}
            totalPage={data?.totalPages} // ✅ fixed: use totalPages directly
          />
        )}
      </div>
    </main>
  );
};

export default Listing;
