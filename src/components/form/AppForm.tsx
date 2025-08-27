import React from "react";

interface Props extends React.ComponentPropsWithRef<"form"> {
  children: React.ReactNode;
}

export const AppForm = ({ children, ...rest }: Props) => {
  return <form {...rest}>{children}</form>;
};
