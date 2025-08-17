import type { FC } from "react";
import "./button.css";

interface Props {
  label: string;
  parentMethod: () => void;
}

export const Button: FC<Props> = ({ label, parentMethod }) => {
  console.log("componente button");
  return (
    <button className="custom-button" onClick={parentMethod}>
      {label}
    </button>
  );
};
