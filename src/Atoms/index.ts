import { atom } from "jotai";

export const contentInputAtom = atom("");
export const titleInputAtom = atom("");

export const fetchUrlAtom = atom(async () => {
  const response = await fetch("http://192.168.0.76:8080/todo");
  return await response.json();
});
