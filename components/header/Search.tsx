"use client";
import { icons } from "../icons";

import React, { useState } from "react";

export function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchQuery(e.target.value);
    // Additional logic can be added here 
  };

  return (
    <div className="w-1/3 rounded-md bg-gray-200 flex p-2 items-center gap-8 flex-shrink-0 self-stretch">
      <div className="flex gap-2 items-center">
        <icons.search />
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="bg-transparent outline-none text-sm font-normal text-gray-500"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>
      {/* You can use the searchQuery state for further logic or API calls */}
    </div>
  );
}
