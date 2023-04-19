// src/recoil/todo.ts
import { atom } from "recoil";

export type ITypes = {
  id: number;
  text: string;
  done: boolean;
};

// TodoInput에서 입력하는 값을 atom으로 관리하는 방식
export const inputId = atom({
  key: "id",
  default: 4,
});

export const workState = atom<ITypes[]>({
  key: "work",

  default: [
    {
      id: 1,
      text: "데드리프트 / 140kg / 5x5",
      done: true,
    },

    {
      id: 2,
      text: "벤치프레스 / 80kg / 7x5",
      done: false,
    },

    {
      id: 3,
      text: "스쿼트 / 120kg / 5x5",
      done: false,
    },
  ],
});
