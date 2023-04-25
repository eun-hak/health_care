import React from "react";

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
    <div className="calendar-header">
      <button onClick={prevMonth}>이전 달</button>
      <div className="calendar-header-text">
        {year}년 {month}
      </div>
      <button onClick={nextMonth}>다음 달</button>
    </div>
  );
};

export default CalendarHeader;
