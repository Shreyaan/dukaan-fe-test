"use client";
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
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

let dummyData: {
  "Order ID": string;
  "Order date": string;
  "Order amount": string;
  "Transaction fees": string;
}[] = [];

for (let i = 0; i < 19; i++) {
  dummyData.push({
    "Order ID": "#281209",
    "Order date": "7 July, 2023",
    "Order amount": "₹1,278.23",
    "Transaction fees": "₹22",
  });
}

let arr = [1, 2, 10, 11, 12, 13, 14, 15, 16, 17, 18];

export function PaymentsTable() {
  let active = 11;
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
              {dummyData.map((item, index) => {
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
                href="#"
              />

              {arr.map((item, index) => {
                return item === 2 ? (
                  <PaginationEllipsis key={index} />
                ) : (
                  <PaginationLink
                    className={cn(active === item && "bg-[#146EB4] text-white")}
                    key={index}
                    href=""
                  >
                    {item}
                  </PaginationLink>
                );
              })}
              <PaginationNext
                href="#"
                className="ml-6 text-gray-700 flex p-3 rounded-md border border-gray-300 bg-white items-center"
              />
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
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
