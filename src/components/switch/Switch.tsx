import type { ComponentPropsWithRef } from "react";
import "./switch.css";
interface Props extends ComponentPropsWithRef<"input"> {}
export const Switch = ({ ...props }: Props) => {
  return (
    <>
      <input type="checkbox" {...props} />
    </>
  );
};
