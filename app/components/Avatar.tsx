"use client";
import Image from "next/image";
import React from "react";

interface AvatarProps {
  src?: string | null;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      src={src || "/images/placeholder.jpg"}
      width={25}
      height={25}
      alt="avatar"
      priority
      className="rounded-full"
    />
  );
};

export default Avatar;
