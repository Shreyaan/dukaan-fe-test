import Image from "next/image";
import { Overview } from "../components/Overview";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

export default async function Home() {
  return (
    <div className="w-full px-8 pt-9 ">
      <Overview />
      <p className="text-gray-800  text-xl font-medium mt-8">
        Transactions | This Month
      </p>
      <div className="max-w-full ">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Order date</TableCell>
              <TableCell>Order amount</TableCell>
              <TableCell>Transaction fees</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyData.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{item["Order ID"]}</TableCell>
                  <TableCell>{item["Order date"]}</TableCell>
                  <TableCell>{item["Order amount"]}</TableCell>
                  <TableCell>{item["Transaction fees"]}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
