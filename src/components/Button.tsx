import React, { type FC } from "react";

export const Button: FC<{ label: string; parentMethod: () => void }> =
  React.memo(function Button({ label, parentMethod }) {
    console.log("se llama otra vez");
    return <button onClick={parentMethod}>{label}</button>;
  });
