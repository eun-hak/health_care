import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Nav from "../components/Nav";
import Signiture from "../components/Signiture";
import { Container, Wrapper, Container2 } from "../components/Layout";
import DateTime from "../components/DateTime";
import { ChartData } from "../const/ChartData";
import { ChartDataType } from "../const/ChartData";
const Inbody = () => {
  useEffect(() => {
    if (localStorage.length === 0) {
      localStorage.setItem("ChartData", JSON.stringify(ChartData));
    }
  }, [Inbody]);
  const [weight, setWeight] = useState("");
  const [bodyFat, setBodyFat] = useState("");
  const [skeletalMuscle, setSkeletalMuscle] = useState("");

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    // event.preventDefault();
    const date = new Date().toISOString().slice(0, 10); // 오늘 날짜를 문자열로 변환

    const ChartAllData: ChartDataType[] = JSON.parse(
      localStorage.getItem("ChartData") || "[]"
    );

    // localStorage.setItem(`${date}_weight`, weight);
    // localStorage.setItem(`${date}_bodyFat`, bodyFat);
    // localStorage.setItem(`${date}_skeletalMuscle`, skeletalMuscle);

    // "2023-04-23"
    // 새로운 데이터를 생성

    const newData = {
      x: "2023-04-19",
      y: Number(weight),
    };
    const newBodyFatData = {
      x: "2023-04-19",
      y: Number(bodyFat),
    };
    const newSkeletalMuscleData = {
      x: "2023-04-19",
      y: Number(skeletalMuscle),
    };

    // ChartData 배열의 각 객체에 새로운 데이터를 추가
    ChartAllData[0].data.push(newData);
    ChartAllData[1].data.push(newBodyFatData);
    ChartAllData[2].data.push(newSkeletalMuscleData);

    // 변경된 ChartData를 로컬스토리지에 저장

    // `${date}_ChartData`
    localStorage.setItem("ChartData", JSON.stringify(ChartAllData));
    alert("인바디 값이 등록되었습니다!");
  };
  return (
    <>
      <Container>
        <Container2>
          <Time>
            <DateTime />
          </Time>
          <Table onSubmit={handleSubmit}>
            <Label>
              {" "}
              <Input
                type="text"
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
                placeholder="체중(숫자만 입력)"
              ></Input>
            </Label>

            <Label>
              {" "}
              <Input
                type="text"
                value={bodyFat}
                onChange={(event) => setBodyFat(event.target.value)}
                placeholder="체지방량(숫자만 입력)"
              ></Input>
            </Label>

            <Label>
              {" "}
              <Input
                type="text"
                value={skeletalMuscle}
                onChange={(event) => setSkeletalMuscle(event.target.value)}
                placeholder="골격근량(숫자만 입력)"
              ></Input>
            </Label>

            <Button type="submit">등록</Button>
          </Table>
        </Container2>
        <Wrapper>
          <Signiture />
          <Nav />
        </Wrapper>
      </Container>
    </>
  );
};

export default Inbody;

const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 700px;
  height: 150px;
  border: 1px solid black;
  margin-top: 80px;
  background: white;
  border-radius: 16px;
`;

const Table = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 800px;
  height: 500px;
  border: 1px solid black;
  margin: 80px;
  background: white;
  border-radius: 16px;
`;

const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 100px;
  border: 1px solid black;
  margin: 10px;
  background: white;
  border-radius: 16px;

  font-size: 24px;
  ::placeholder {
    color: gray;
    font-size: 24px;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  padding: 0.5rem 1rem;
  background-color: #2c5ae9;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s;
  margin: 30px;
  &:hover {
    background-color: #2c5ae9;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
