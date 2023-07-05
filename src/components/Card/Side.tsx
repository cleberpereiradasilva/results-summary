import { ReactNode } from "react";
import { Card } from ".";

interface SideProperties {
  children?: ReactNode;
  className?: any;
}

export const Side = ({ children, className }: SideProperties) => {
  return (
    <Card.Root
      className={`rounded-4xl flex lg:flex-col sm:flex-col sm:w-full lg:w-2/4 bg-white h-2/3 ${className}`}
    >
      {children}
    </Card.Root>
  );
};
