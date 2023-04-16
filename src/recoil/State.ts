// src/recoil/todo.ts
import { atom } from "recoil";

export type ITypes = {
  id: number;
  text: string;
  done: boolean;
};

// TodoInput에서 입력하는 값을 atom으로 관리하는 방식
export const inputState = atom<string>({
  key: "inputState",
  // key의 값은 항상 고유값이어야 합니다.

  default: "",
});

// 업데이트 시킬 Todos atom 배열
export const todosState = atom<ITypes[]>({
  key: "work",

  // default에는 임의의 데이터를 넣어줍시다.
  default: [
    {
      id: 1,
      text: "데드리프트 / 140kg / 5x5",
      done: false,
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
