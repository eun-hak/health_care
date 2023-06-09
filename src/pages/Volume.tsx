import React, { useState } from "react";
import styled, { css } from "styled-components";
import Nav from "../components/Nav";
import Signiture from "../components/Signiture";
import { Container, Wrapper, Container2 } from "../components/Layout";
import { MdAdd } from "react-icons/md";
import Create from "../components/Create";
import List from "../components/List";

const Volume = () => {
  return (
    <>
      <Container>
        <Container2>
          <TodoTemplateBlock>
            <List></List>
            <Create></Create>
          </TodoTemplateBlock>
        </Container2>

        <Wrapper>
          <Signiture />
          <Nav />
        </Wrapper>
      </Container>
    </>
  );
};

export default Volume;

const TodoTemplateBlock = styled.div`
  width: 744px;
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: #a7d4ee;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;
