import type { FC } from "react";
import "./button.css";
import type React from "react";

interface Props extends React.ComponentPropsWithRef<"button"> {
  label: string;
  parentMethod: () => void;
}

export const Button: FC<Props> = ({ label, parentMethod, ...rest }) => {
  console.log("custom component");
  return (
    <button {...rest} className="custom-button" onClick={parentMethod}>
      {label}
    </button>
  );
};
