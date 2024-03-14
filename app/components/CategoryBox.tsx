"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import { IconType } from "react-icons";
import queryString from "query-string";

interface ICategoryBox {
  label: string;
  icon: IconType;
  selected?: boolean;
}

const CategoryBox: React.FC<ICategoryBox> = ({
  label,
  icon: Icon,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = queryString.parse(params.toString());
    }

    const updatedQuery: any = {
      // setting the category in params on which we are clicking.
      ...currentQuery,
      category: label,
    };

    // remove the category from label if we are clicking on it second time. like toggle
    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);
  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-2 border-b-2 hover:text-neutral-800 transition cursor-pointer 
      ${selected ? "border-neutral-800" : "border-transparent"}
      ${selected ? "text-neutral-800" : "text-neutral-500"}
      `}
    >
      <Icon size={20} />
      <div className="font-medium text-xs">{label}</div>
    </div>
  );
};

export default CategoryBox;
