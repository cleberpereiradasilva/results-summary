import { ReactNode } from "react";

interface TitlepProperties {
  children?: ReactNode;
}
export const Title = ({ children }: TitlepProperties) => (
  <div className="text-2xl font-bold text-gray-600 h-6 pt-3 mb-12">
    {children}
  </div>
);
