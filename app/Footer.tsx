import {
  Pagination,
  PaginationContent,
  PaginationPrevious,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { arr, active } from "./page";

export function Footer() {
  return (
    <div className="mt-6">
      <Pagination>
        <PaginationContent>
          <PaginationPrevious
            className="text-gray-700 flex p-3 rounded-md border border-gray-300 bg-white items-center"
            href="#"
          />
          <PaginationEllipsis />
          {arr.map((item, index) => {
            return item === 2 ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                className={cn(active === item && "bg-[#146EB4] text-white")}
                key={index}
                href="#"
              >
                {item}
              </PaginationLink>
            );
          })}
          <PaginationNext
            href="#"
            className="text-gray-700 flex p-3 rounded-md border border-gray-300 bg-white items-center"
          />
        </PaginationContent>
      </Pagination>
    </div>
  );
}
