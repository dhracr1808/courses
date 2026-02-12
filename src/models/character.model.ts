export interface Character {
  id: string;
  name: string;
  gender: string;
  image: string;
}

export const emtyCharacter: Character = {
  gender: "",
  id: "",
  image: "",
  name: "",
};
