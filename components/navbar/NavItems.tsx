"use client";
import { navIcons } from "../icons";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function NavItems() {
  const [active, setActive] = useState("Payments");
  return (
    <div className="mt-6">
      {Object.keys(navIcons).map((key, index) => {
        return (
          <div
            onClick={() => {
              setActive(key);
            }}
            className={cn(
              "px-4 py-2 flex items-center gap-3 opacity-80 rounded-sm cursor-pointer transition-all",
              active === key ? "bg-[#ffffff1a] opacity-100 text-white " : ""
            )}
            key={index}
          >
            <div className="w-5 h-5">{navIcons[key]()}</div>
            <p className="text-sm font-medium">{key}</p>
          </div>
        );
      })}
    </div>
  );
}
