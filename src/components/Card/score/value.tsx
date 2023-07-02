import { ReactNode } from "react";

interface ValueProperties {
  children?: ReactNode;
}

export const Value = ({ children }: ValueProperties) => (
  <div className="rounded-full text-center flex justify-center flex-col md:w-52 md:h-52 mobile:w-36 mobile:h-36 bg-gradient-to-t to-blue-violet from-blue-persian mx-auto mobile:my-4">
    <span className="mobile:text-5xl md:text-7xl font-bold">{children}</span>
    <span className="text-gray-400">of 100</span>
  </div>
);
