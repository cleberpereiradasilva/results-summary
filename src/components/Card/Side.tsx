import { ReactNode } from "react";
import { Card } from ".";

interface SideProperties {
  children?: ReactNode;
  className?: any;
}

export const Side = ({ children, className }: SideProperties) => {
  return (
    <Card.Root
      className={`rounded-4xl flex md:flex-col mobile:flex-col mobile:w-full md:w-2/4 bg-white h-2/3 ${className}`}
    >
      {children}
    </Card.Root>
  );
};
