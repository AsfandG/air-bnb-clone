"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-1 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row justify-between items-center">
        <div className="text-[12px] font-semibold px-6">Anywhere</div>
        <div className="hidden sm:block text-[12px] font-semibold px-6 border-x-[1px] flex-1 text-center">
          Any week
        </div>
        <div className="text-[12px] pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block">Add Guests</div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
