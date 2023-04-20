import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const DateTime = () => {
  const [dateTime, setDateTime] = useState<Date>(new Date(Date.now()));

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date(Date.now()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <DateText>오늘 날짜:</DateText>
      <DateTimeText>
        {dateTime
          .toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          .replace(/-/g, " ")
          .replace(/\.$/, "")}
      </DateTimeText>
    </Container>
  );
};
export default DateTime;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const DateText = styled.p`
  margin-right: 10px;
  font-size: 52px;
  font-weight: 700;
`;

const DateTimeText = styled.p`
  font-size: 52px;
  font-weight: 700;
`;
