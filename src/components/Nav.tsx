import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CALENDER, CHANNEL, INBODY, PROFILE, VOLUME } from "../const/URL";

const Nav = () => {
  const [navbarStyle, setNavbarStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setNavbarStyle({ position: "fixed", top: 220 });
      } else {
        setNavbarStyle({});
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavWrapper style={{ ...navbarStyle }}>
        <Nava href={PROFILE}>프로필</Nava>
        <Nava href={CALENDER}>운동 일정</Nava>
        <Nava href={VOLUME}>운동 볼륨</Nava>
        <Nava href={CHANNEL}>운동 채널</Nava>
        <Nava href={INBODY}>인바디 등록</Nava>
      </NavWrapper>
    </>
  );
};

export default Nav;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 200px;
  max-height: 700px;
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
