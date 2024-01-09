"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function Pages() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="">
      {" "}
      <Pagination>
        <PaginationContent>
          <PaginationPrevious href="#" />
          <PaginationEllipsis />
          {arr.map((item, index) => {
            return (
              <PaginationLink key={index} href="#">
                {item}
              </PaginationLink>
            );
          })}
          <PaginationNext href="#" />
        </PaginationContent>
      </Pagination>
    </div>
  );
}
