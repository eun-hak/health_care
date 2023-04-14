import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Signiture from "../components/Signiture";

const Layout = () => {
  return (
    <>
      <Container>
        <Container2></Container2>
        <Wrapper>
          <Signiture />
          <Nav />
        </Wrapper>
      </Container>
    </>
  );
};

export default Layout;

export const Wrapper = styled.div`
  margin-top: 50px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 80px;
`;

//전체 레이아웃
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  background: #a7d4ee;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

//그래프 레이아웃
export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1800px;
  height: 100%;
  border: 1px solid black;
  margin: 80px;
  background: white;
  border-radius: 16px;
`;
