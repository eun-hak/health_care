import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Signiture from "../components/Signiture";
import { Container, Wrapper, Container2 } from "../assets/Layout";
import Data from "../assets/Data";

interface DATA {
  id: number;
  name: string;
  content: string;
  link: string;
  src: string;
}
const Channel = () => {
  return (
    <>
      <Container>
        <Container2>
          {Data.map((value: DATA, idx: number) => {
            return (
              <>
                <BoxFlex>
                  <Box src={value.src}></Box>
                  <Content href={value.link}>
                    {value.name}
                    <br />
                    <br />
                    <br />
                    {value.content}
                  </Content>
                </BoxFlex>
              </>
            );
          })}
        </Container2>
        <Wrapper>
          <Signiture />
          <Nav />
        </Wrapper>
      </Container>
    </>
  );
};

export default Channel;

const BoxFlex = styled.div`
  display: flex;
  flex-direction: row;
`;
const Content = styled.a`
  width: 1000px;
  height: 200px;
  border: 2px solid gray;
  margin: 50px 50px 50px 0px;
  text-decoration-line: none;
  color: black;
`;

const Box = styled.img`
  width: 200px;
  height: 200px;
  border: 2px solid gray;
  margin: 50px 1px 50px 150px;
  overflow: hidden;
`;
