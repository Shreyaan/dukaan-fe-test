"use client";
import { SetStateAction, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { icons } from "@/components/icons";
import {
  Pagination,
  PaginationContent,
  PaginationPrevious,
  PaginationEllipsis,
  PaginationBtn,
  PaginationNext,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { useIsClient } from "usehooks-ts";

import { Skeleton } from "@/components/ui/skeleton";

let dummyData: {
  "Order ID": string;
  "Order date": string;
  "Order amount": string;
  "Transaction fees": string;
}[] = [];

for (let i = 0; i < 150; i++) {
  let randomOrderID = "#" + Math.floor(Math.random() * 1000000);
  let randomOrderDate = new Date(
    +new Date() - Math.floor(Math.random() * 10000000000)
  ).toLocaleDateString();
  let randomOrderAmount = "₹" + (Math.random() * 10000).toFixed(2);
  let randomTransactionFees = "₹" + (Math.random() * 100).toFixed(2);

  dummyData.push({
    "Order ID": randomOrderID,
    "Order date": randomOrderDate,
    "Order amount": randomOrderAmount,
    "Transaction fees": randomTransactionFees,
  });
}

const ITEMS_PER_PAGE = 15;

export function PaymentsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(dummyData.length / ITEMS_PER_PAGE);
  const active = currentPage;

  const isClient = useIsClient();

  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };

  const displayedData = dummyData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (isClient)
    return (
      <div className="">
        <p className="text-gray-800  text-xl font-medium mt-8">
          Transactions | This Month
        </p>
        <div className="max-w-full mt-5 bg-white shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)] pt-3 pb-6 p-3 rounded-lg">
          <div className="flex justify-between">
            <Search></Search>
            <div className="flex gap-3">
              {" "}
              <div className="text-gray-700 flex gap-2 p-3 text-base font-normal leading-6 rounded-md border border-gray-300 bg-white items-center">
                <p>Sort</p>
                <div className="w-3 h-3">
                  <icons.downArrow fill="#4D4D4D" height={12} width={12} />
                </div>
              </div>
              <div className="text-gray-700 flex p-3 rounded-md border border-gray-300 bg-white items-center">
                <icons.download />
              </div>
            </div>
          </div>
          <div className="mt-3 ">
            <Table>
              {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
              <TableHeader className=" bg-[#f2f2f2] items-center  rounded px-3 py-2.5">
                <TableRow>
                  <TableCell className="text-left ">Order ID</TableCell>
                  <TableCell className="flex gap-1 items-center ">
                    Order date <icons.triangle />{" "}
                  </TableCell>
                  <TableCell>Order amount</TableCell>
                  <TableCell className="flex gap-1 items-center justify-end">
                    Transaction fees <icons.info />
                  </TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {displayedData.map((item, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell className="text-left text-[#146EB4]">
                        {item["Order ID"]}
                      </TableCell>
                      <TableCell className="text-left">
                        {item["Order date"]}
                      </TableCell>
                      <TableCell>{item["Order amount"]}</TableCell>
                      <TableCell>{item["Transaction fees"]}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
          <div className="mt-6">
            <Pagination>
              <PaginationContent>
                <PaginationPrevious
                  className="mr-6 text-gray-700 flex p-3 rounded-md border border-gray-300 bg-white items-center"
                  onClick={handlePreviousPage}
                />

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (item, index) => {
                    return (
                      <PaginationBtn
                        className={cn(
                          "bg-white text-black",
                          active === item && "bg-[#146EB4] text-white"
                        )}
                        key={index}
                        onClick={() => handlePageChange(item)}
                      >
                        {item}
                      </PaginationBtn>
                    );
                  }
                )}
                <PaginationNext
                  className="ml-6 text-gray-700 flex p-3 rounded-md border border-gray-300 bg-white items-center"
                  onClick={handleNextPage}
                />
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    );
  else
    return (
      <>
        <p className="text-gray-800  text-xl font-medium my-8">
          Transactions | This Month
        </p>
        <Skeleton className="w-full h-[400px] rounded" />
      </>
    );
}

function Search() {
  return (
    <div className="">
      <div className=" flex items-center flex-shrink-0 self-stretch gap-2 flex-[1_0_0] rounded border px-4 py-2.5 border-solid border-[#D9D9D9]">
        <div className="flex gap-2 items-center">
          <div className="w-3 h-3">
            <icons.search />
          </div>
          <input
            type="text"
            placeholder="Search by order ID..."
            className="bg-transparent outline-none text-sm font-normal text-gray-500"
          />
        </div>
        {/* You can use the searchQuery state for further logic or API calls */}
      </div>
    </div>
  );
}
