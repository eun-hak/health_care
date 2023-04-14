import React, { useState } from "react";
import styled, { css } from "styled-components";
import Nav from "../components/Nav";
import Signiture from "../components/Signiture";
import { Container, Wrapper, Container2 } from "../assets/Layout";
import { MdAdd } from "react-icons/md";
import Create from "../components/Create";

const Volume = (): JSX.Element => {
  return (
    <>
      <Container>
        <Container2>
          <Create></Create>
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
