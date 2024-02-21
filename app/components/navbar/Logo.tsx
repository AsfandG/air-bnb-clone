"use client";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image
        src={"/images/logo.png"}
        width={100}
        height={100}
        priority
        alt="logo"
        className="w-auto"
      />
    </div>
  );
};

export default Logo;
