import React, { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarCell from "./CalendarCells";
import CalendarDays from "./CalendarDays";
import styled from "styled-components";

export const getMonthDays = (currentDate: Date): Date[][] => {
  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const lastDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const daysInMonth = lastDay.getDate();

  // 모든 주의 날짜 계산
  const weeks: Date[][] = [];
  let currentWeek: Date[] = [];

  let currentDay = firstDay;
  while (currentDay <= lastDay) {
    currentWeek.push(currentDay);
    currentDay = new Date(currentDay);
    currentDay.setDate(currentDay.getDate() + 1);
    if (currentDay.getDay() === 0 || currentDay > lastDay) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  return weeks;
};

const Calendar2 = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const prevMonth = () => {
    const prevMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    setCurrentDate(prevMonthDate);
  };

  const nextMonth = () => {
    const nextMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(nextMonthDate);
  };

  const weeks = getMonthDays(currentDate);

  return (
    <CalendarContainer>
      <CalendarHeader
        month={`${currentDate.getMonth() + 1}월`}
        year={currentDate.getFullYear()}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <CalendarDays />

      <CalendarCellsContainer>
        {weeks.map((week, i) => (
          <CalendarRow key={`week-${i}`}>
            {week.map((day) => (
              <CalendarCell
                key={day.toString()}
                day={day}
                onClick={setCurrentDate}
                isSelected={false}
                isSameMonth={day.getMonth() === currentDate.getMonth()}
              />
            ))}
            {/* 나머지 칸은 빈 칸으로 채웁니다. */}
            {week.length < 8 &&
              Array.from({ length: 7 - week.length }).map((_, i) => (
                <EmptyCell key={`empty-${i}`} />
              ))}
          </CalendarRow>
        ))}
      </CalendarCellsContainer>
    </CalendarContainer>
  );
};

export default Calendar2;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 500px;
  margin: 0 auto;
`;

const CalendarCellsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

const CalendarRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const EmptyCell = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  opacity: 0;
`;
