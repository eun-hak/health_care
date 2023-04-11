import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Signiture from "../components/Signiture";

const Profile = () => {
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

export default Profile;

const Wrapper = styled.div`
  margin-top: 50px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 80px;
`;

//전체 레이아웃
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

//그래프 레이아웃
const Container2 = styled.div`
  width: 1800px;
  height: 800px;
  border: 1px solid black;
  margin: 80px;
`;
