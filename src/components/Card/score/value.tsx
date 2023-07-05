import { ReactNode } from "react";

interface ValueProperties {
  children?: ReactNode;
}

export const Value = ({ children }: ValueProperties) => (
  <div
    className="rounded-full text-center flex justify-center flex-col 
  lg:w-52 lg:h-52 
  md:w-72 md:h-72 
  sm:w-36 sm:h-36 
  bg-gradient-to-t to-blue-violet from-blue-persian mx-auto sm:my-4"
  >
    <span className="sm:text-5xl md:text-9xl lg:text-7xl font-bold">
      {children}
    </span>
    <span className="text-gray-400 md:text-2xl pt-4 sm:pt-2 lg:text-xl">
      of 100
    </span>
  </div>
);
