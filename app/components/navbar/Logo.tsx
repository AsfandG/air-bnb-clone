"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();
  return (
    <div>
      <Image
        onClick={() => router.push("/")}
        src={"/images/logo.png"}
        width={100}
        height={100}
        priority
        alt="logo"
        className="w-auto cursor-pointer"
      />
    </div>
  );
};

export default Logo;
