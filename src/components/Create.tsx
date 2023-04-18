import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Container, Wrapper, Container2 } from "../assets/Layout";
import { MdAdd } from "react-icons/md";
import { useRecoilState } from "recoil";
import { ITypes, workState } from "../recoil/State";

const Create = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [work, setWork] = useRecoilState<ITypes[]>(workState);

  const onToggle = () => setOpen(!open);

  const onCreate = () => {};

  return (
    <>
      {/* <TodoTemplateBlock> */}
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input
              autoFocus
              placeholder="운동명 / 무게 / 세트수 형태로 입력해주세요"
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
      {/* </TodoTemplateBlock> */}
    </>
  );
};

export default Create;

// const TodoTemplateBlock = styled.div`
//   width: 1444px;
//   height: 768px;

//   position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
//   background: #a7d4ee;
//   border-radius: 16px;
//   box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

//   margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

//   margin-top: 96px;
//   margin-bottom: 32px;
//   display: flex;
//   flex-direction: column;
// `;

const CircleButton = styled.button<{ open: boolean }>`
  background: #2460d1;
  &:hover {
    background: #3d6cd3;
  }
  &:active {
    background: #2d5de4;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: relative;
`;

const InsertForm = styled.form`
  background: #b6cfe9;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;
