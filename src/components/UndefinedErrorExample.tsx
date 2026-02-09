import { useState } from "react";
interface Props {
  name?: string;
}

export const UndefinedErrorExample = ({ name }: Props) => {
  const [obj] = useState<{ props?: string }>({});

  const handleClick = () => {
    throw new Error("eror al clicked");
  };

  return (
    <>
      <h4>Undefined Error</h4>
      <button onClick={handleClick}>click Error</button>
      <div>
        {obj.props?.length} - {name}
      </div>
    </>
  );
};
