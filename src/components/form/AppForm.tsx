interface Props {
  children: React.ReactNode;
}

export const AppForm = ({ children }: Props) => {
  return <form>{children}</form>;
};
