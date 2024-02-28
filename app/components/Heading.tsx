import React from "react";

interface IProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading = ({ title, subtitle, center }: IProps) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-xl font-bold">{title}</div>
      <div className="font-light text-neutral-500 mt-1">{subtitle}</div>
    </div>
  );
};

export default Heading;
