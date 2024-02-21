"use client";

import { useEffect, useState } from "react";

interface IProps {
  children: React.ReactNode;
}

const ClientOnly = ({ children }: IProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return <>{children}</>;
};

export default ClientOnly;
