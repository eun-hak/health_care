import React from "react";
import styled, { css } from "styled-components";
import Work from "./Work";
import { ITypes, todosState } from "../recoil/State";
import { useRecoilState } from "recoil";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
`;

const List = () => {
  const [work, setWork] = useRecoilState<ITypes[]>(todosState);
  return (
    <>
      <TodoListBlock>
        {work.map((work) => (
          <Work id={work.id} text={work.text} done={work.done}></Work>
        ))}
      </TodoListBlock>
    </>
  );
};

export default List;
