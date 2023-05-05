import React from "react";
import styled from "styled-components";
type Props = {
  month: string;
  year: number;
  prevMonth: () => void;
  nextMonth: () => void;
};

const CalendarHeader: React.FC<Props> = ({
  month,
  year,
  prevMonth,
  nextMonth,
}) => {
  return (
    <Header>
      <Button onClick={prevMonth}>이전 달</Button>
      <Dates>
        {year}년 {month}
      </Dates>
      <Button onClick={nextMonth}>다음 달</Button>
    </Header>
  );
};

export default CalendarHeader;

const Dates = styled.div`
  margin: 42px 0px;
  width: 100px;
  /* padding: 0 20px; */
  font-weight: 700;
  font-size: 15px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
`;
const Button = styled.button`
  margin: 30px 35px;
  width: 80px;
  height: 40px;
  padding: 0.5rem 1rem;
  background-color: #2c5ae9;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #2c5ae9;
  }
`;
