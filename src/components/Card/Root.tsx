import { ReactNode } from "react";

interface RootProperties {
  children: ReactNode;
  className: any;
}

export const Root = ({ children, className }: RootProperties) => {
  return (
    <div
      className={`
        rounded-4xl flex md:flex-row md:w-2/4  ${className}`}
    >
      {children}
    </div>
  );
};
