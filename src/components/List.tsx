import React from "react";
import styled, { css } from "styled-components";
import Work from "./Work";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
`;

const List = (): JSX.Element => {
  return (
    <>
      <TodoListBlock>
        <Work id={1} text="데드리프트 / 140kg / 5x5" done={true}></Work>
        <Work id={2} text="벤치프레스 / 80kg / 7x5" done={true}></Work>
        <Work id={3} text="스쿼트 / 120kg / 5x5" done={true}></Work>
      </TodoListBlock>
    </>
  );
};

export default List;
