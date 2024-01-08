import Image from "next/image";
import { compnayData } from "./Navbar";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { icons } from "../icons";

export function CompanyInfo() {
  return (
    <div className="flex justify-normal items-center w-full gap-3 pl-1.5">
      <Image
        src={compnayData.logo}
        alt=""
        width={40}
        height={40}
        className="rounded w-10 h-10"
      />
      <div className="w-[108px] ">
        <p className="text-sm font-medium ">{compnayData.name}</p>
        <Link
          href={compnayData.link}
          className={"text-xs underline font-normal opacity-80"}
        >
          Visit Store
        </Link>
      </div>{" "}
     <div className="cursor-pointer"> <icons.downArrow  /></div>
    </div>
  );
}
