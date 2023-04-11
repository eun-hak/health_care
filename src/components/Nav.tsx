import React from "react";
import styled from "styled-components";

const Nav = (): JSX.Element => {
  return (
    <NavWrapper>
      <Nava href="#">프로필</Nava>
      <Nava href="#">운동 일정</Nava>
      <Nava href="#">운동 볼륨</Nava>
      <Nava href="#">운동 채널</Nava>
      <Nava href="#">인바디 등록</Nava>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 700px;
  background-color: white;
  border: skyblue solid 3px;
  padding: 0 20px;
`;

const Nava = styled.a`
  text-decoration: none;
  color: blue;
  font-size: 28px;
  padding: 40px 0px;
  font-weight: 700;
`;
