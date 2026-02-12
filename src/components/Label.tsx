interface Props {
  childen: React.ReactNode;
  htmlFor?: string;
  label?: string;
}
export const Label = ({ childen, htmlFor, label }: Props) => {
  return (
    <label htmlFor={htmlFor}>
      {label}
      {childen}
    </label>
  );
};
