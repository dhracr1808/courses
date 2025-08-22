import type { FC } from "react";
import { type Pokemon } from "./../../adapter/pokemon";

export const ListImage: FC<Pokemon> = ({ name, img }) => {
  return (
    <li key={name}>
      <p>{name}</p>
      <div>
        <img src={img} alt={name} />
      </div>
    </li>
  );
};
