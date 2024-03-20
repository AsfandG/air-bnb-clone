"use client";
import React from "react";
import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is so modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in country side!",
  },
  {
    label: "Pool",
    icon: TbPool,
    description: "This property is in country side!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on island",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is close to Lake",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activities",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is in a castle",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property has camping activities",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is on island",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This property is in cave",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in desert",
  },
  {
    label: "Barn",
    icon: GiBarn,
    description: "This property is in barn",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is luxurious",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const pathname = usePathname();
  const category = params.get("category");

  const isMain = pathname === "/";

  if (!isMain) {
    return null;
  }
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
