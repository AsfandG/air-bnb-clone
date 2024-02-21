"use client";
import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <Image
      src="/images/placeholder.jpg"
      width={25}
      height={25}
      alt="avatar"
      priority
      className="rounded-full"
    />
  );
};

export default Avatar;
