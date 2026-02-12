interface Props {
  childen: React.ReactNode;
  parentMethod: () => void;
}

export const Button = ({ childen, parentMethod }: Props) => {
  return <button onClick={parentMethod}>{childen}</button>;
};
