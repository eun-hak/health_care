import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { ITypes, workState } from "../recoil/State";
import { useRecoilState } from "recoil";
export type WorkItem = {
  id: number;
  done: boolean;
  text: string;
};

//약간 헷갈리네요
export type WorkProps = WorkItem & {
  // Remove 'children' prop
  // children?: never[];
};

const Work = ({ id, done, text }: WorkProps) => {
  const [work, setWork] = useRecoilState<ITypes[]>(workState);

  // const onDelete = (id: number) => {
  //   setWork(work.filter((work: ITypes) => work.id !== id));
  // };
  // ####헷갈림###
  const onDelete = () => {
    setWork(work.filter((work: ITypes) => work.id !== id));
  };

  const onToggle = () => {
    setWork(
      work.map((work: ITypes) =>
        work.id === id ? { ...work, done: !work.done } : work
      )
    );
  };

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onDelete} data-id={id}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
};

export default Work;

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div<{ done: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div<{ done: boolean }>`
  flex: 1;
  font-weight: 700;
  font-size: 29px;
  color: purple;
  ${(props) =>
    props.done &&
    css`
      color: purple;
    `}
`;
