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
    className="bg-gray-700 bg-gradient-to-t hover:to-blue-light hover:from-blue-royal  text-white font-bold h-12 rounded-full w-full shadow-lg hover:scale-105 hover:shadow-2xl"
  >
    {children}
  </button>
);
