import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
} from "@tabler/icons-react";
import { Button } from "./ui/button";
// import { Button } from "./ui/button";
 
export const Pagination = ({
  pageSize,
  currentPage,
  setpageSize,
  setPage,
  handleNextPage,
  handlePreviosPage,
  totalPage,
}) => {
  return (
    <>
      <div className="flex items-center justify-end">
        <div className="flex w-full items-center gap-4 lg:w-fit">
          <div className="hidden items-center gap-2 lg:flex">
            <div className="text-xs font-medium">
              Rows per page
            </div>
            <Select
              value={pageSize}
              onValueChange={(value) => {
                setpageSize(value);
                setPage(0);
              }}
            >
              <SelectTrigger size="sm" className="bg-background w-20 shadow-sm" id="rows-per-page">
                <SelectValue placeholder={10} />
              </SelectTrigger>
              <SelectContent side="top">
                {[10, 20, 30, 40, 50, 60].map(
                  (size) =>
                    size <= totalPage * pageSize && (
                      <SelectItem key={size} value={`${size}`}>
                        {size}
                      </SelectItem>
                    )
                )}
              </SelectContent>
            </Select>
          </div>
          <div className="flex w-fit items-center justify-center text-xs font-medium">
            Page {currentPage + 1} of {totalPage}
          </div>
          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => setPage(0)}
              disabled={currentPage == 0}
            >
              <span className="sr-only">Go to first page</span>
              <IconChevronsLeft />
            </Button>
            <Button
              variant="outline"
              className="size-8"
              size="icon"
              onClick={handlePreviosPage}
              disabled={currentPage == 0}
            >
              <span className="sr-only">Go to previous page</span>
              <IconChevronLeft />
            </Button>
            <Button
              variant="outline"
              className="size-8"
              size="icon"
              onClick={handleNextPage}
              disabled={currentPage == totalPage - 1}
            >
              <span className="sr-only">Go to next page</span>
              <IconChevronRight />
            </Button>
            <Button
              variant="outline"
              className="hidden size-8 lg:flex"
              size="icon"
              onClick={() => setPage(totalPage - 1)}
              disabled={currentPage == totalPage - 1}
            >
              <span className="sr-only">Go to last page</span>
              <IconChevronsRight />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
 
 