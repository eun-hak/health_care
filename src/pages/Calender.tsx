import React, { useState } from "react";
import styled, { css } from "styled-components";
import Nav from "../components/Nav";
import Signiture from "../components/Signiture";
import { Container, Wrapper, Container2 } from "../components/Layout";

const Calender = () => {
  return (
    <>
      <Container>
        <Container2>{/* <Calendar2></Calendar2> */}</Container2>
        <Wrapper>
          <Signiture />
          <Nav />
        </Wrapper>
      </Container>
    </>
  );
};

export default Calender;

const Container3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 100%;
  border: 1px solid black;
  margin: 80px;
  background: white;
  border-radius: 16px;
`;
