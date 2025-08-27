import type React from "react";
import "./button.css";
import type { ReactNode } from "react";

interface Props extends React.ComponentPropsWithRef<"button"> {
  children: ReactNode;
  parentMethod?: (e?: any) => void;
}
interface ChildrenProps {
  children: ReactNode;
}
export const ColorRed = ({ children }: ChildrenProps) => {
  return <div className="color-red">{children}</div>;
};

export const Button = ({ children, parentMethod, ...rest }: Props) => {
  return (
    <button {...rest} className="custom-button">
      {children}
    </button>
  );
};
