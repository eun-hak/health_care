import React from "react";
import styled from "styled-components";

const WeekdaysContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: #f8f9fa;
  font-weight: bold;
  color: #495057;
  padding: 0 10px;
`;

const Weekday = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% / 7);
`;

const CalendarDays: React.FC = () => {
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <WeekdaysContainer>
      {weekdays.map((weekday) => (
        <Weekday key={weekday}>{weekday}</Weekday>
      ))}
    </WeekdaysContainer>
  );
};

export default CalendarDays;
