import { ElementType, ReactNode } from "react";

interface SubjectProperties {
  title?: string;
  value?: number;
  icon: ReactNode;
  className?: string;
}
export const Subject = ({
  title,
  value,
  icon: Icon,
  className,
}: SubjectProperties) => (
  <div
    className={`flex flex-row items-center justify-between sm:mb-3 h-16 rounded-xl px-3 shadow-lg ${className}`}
  >
    <span className="flex flex-row items-center w-24 font-bold">
      {Icon}
      <span className="ml-2">{title}</span>
    </span>
    <span className="flex flex-row text-gray-600">
      {" "}
      <b>{value}</b>&nbsp;/ 100
    </span>
  </div>
);
