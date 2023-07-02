import { ReactNode } from "react";

interface ValueProperties {
  children?: ReactNode;
}

export const Value = ({ children }: ValueProperties) => (
  <div className="rounded-full text-center flex justify-center flex-col md:w-52 md:h-52 max-mobile:w-36 max-mobile:h-36 bg-gradient-to-t to-blue-violet from-blue-persian mx-auto max-mobile:my-4">
    <span className="max-mobile:text-5xl md:text-7xl font-bold">
      {children}
    </span>
    <span className="text-gray-400">of 100</span>
  </div>
);
