import "./button.css";
import type { ReactNode } from "react";

interface Props extends reactWithChildren<"button"> {
  children: ReactNode;
  parentMethod: () => void;
}
interface ChildrenProps {
  children: ReactNode;
}
export const ColorRed = ({ children }: ChildrenProps) => {
  return <div className="color-red">{children}</div>;
};

export const Button = ({ children, parentMethod }: Props) => {
  return (
    <button className="custom-button" onClick={parentMethod}>
      {children}
    </button>
  );
};
