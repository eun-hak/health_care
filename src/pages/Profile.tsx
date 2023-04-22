import React, { useEffect } from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Signiture from "../components/Signiture";
import LineChart from "../components/LineChart";
import { ChartData } from "../const/ChartData";
import { ChartDataType } from "../const/ChartData";
import BarChart from "../components/BarChart";
import { BarData } from "../const/BarData";
// import { InbodyData } from "../components/InbodyData";
// import { Container, Wrapper, Container2 } from "../components/Layout";

const Profile = () => {
  //만약 로컬스토리지에 값이 아무것도 없다면 빈 값을 집어넣음
  useEffect(() => {
    if (localStorage.length === 0) {
      localStorage.setItem("ChartData", JSON.stringify(ChartData));
    }
  }, [Profile]);

  const date = new Date().toISOString().slice(0, 10); // 오늘 날짜를 문자열로 변환
  const ChartAllData: ChartDataType[] = JSON.parse(
    localStorage.getItem("ChartData") || "[]"
  );
  // const storageData: ChartDataType[] = InbodyData();
  console.log(ChartAllData);
  return (
    <>
      <Container>
        <Container2>
          <LineChart data={ChartAllData}></LineChart>
          <Container3>
            <BarChart data={BarData}></BarChart>
          </Container3>
        </Container2>
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
// const Container = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   width: 100%;
//   height: 100%;
//   border: 1px solid black;
// `;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 30px;
  width: 100%;
  height: 1000px;
  border: 1px solid black;
  background: #a7d4ee;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;
//그래프 레이아웃
const Container2 = styled.div`
  /* display: flex;
  flex-direction: column; */
  background: white;
  width: 1800px;
  height: 500px;
  border: 1px solid black;
  margin: 80px;
`;

const Container3 = styled.div`
  display: flex;
  background: white;
  width: 1500px;
  height: 250px;
  border: 1px solid black;
  margin: 80px;
`;
