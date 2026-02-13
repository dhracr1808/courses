import axios from "axios";
import { type Character } from "@/models";
import { loadAbort } from "@/utils";
import { type UseApiCall } from "@/models";
const BASE_URL = "https://rickandmortyapi.com/api";

export const getCharacter = (id: number): UseApiCall<Character> => {
  const controller = loadAbort();
  return {
    call: axios.get<Character>(`${BASE_URL}/character/${id}`, {
      signal: controller.signal,
    }),
    controller,
  };
};

export const newCharacter = (character: Character) => {
  const controller = loadAbort();
  return {
    call: axios.post<null>(`${BASE_URL}/character`, character, {
      signal: controller.signal,
    }),
    controller,
  };
};

export const getMorty = () => {
  const controller = loadAbort();
  return {
    call: axios.get<Character>(`${BASE_URL}/character/2`, {
      signal: controller.signal,
    }),
    controller,
  };
};

export const getRick = () => {
  return axios.get<Character>(`${BASE_URL}/character/1`);
};
