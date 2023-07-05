import { ButtonHTMLAttributes, HtmlHTMLAttributes, ReactNode } from "react";

interface DefaultButtonProperties
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}
export const DefaultButton = ({
  children,
  ...attr
}: DefaultButtonProperties) => (
  <button
    {...attr}
    className="bg-gray-700 text-white font-bold h-12 rounded-2xl w-full"
  >
    {children}
  </button>
);
