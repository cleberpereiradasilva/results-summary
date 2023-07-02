import { ReactNode } from "react";

interface TopProperties {
  children?: ReactNode;
}
export const Top = ({ children }: TopProperties) => (
  <div className="text-2xl text-gray-300">{children}</div>
);
