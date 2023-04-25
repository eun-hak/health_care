import styled from "styled-components";

type Props = {
  day: Date;
  onClick: (date: Date) => void;
  isSelected: boolean;
  isSameMonth: boolean;
};

const CalendarCell = ({ day, onClick, isSelected, isSameMonth }: Props) => {
  const handleClick = () => {
    onClick(day);
  };

  return (
    <CellContainer
      onClick={handleClick}
      isSelected={isSelected}
      isSameMonth={isSameMonth}
    >
      {day.getDate()}
    </CellContainer>
  );
};

const CellContainer = styled.div<{ isSelected: boolean; isSameMonth: boolean }>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? "lightblue" : props.isSameMonth ? "white" : "lightgray"};
  color: ${(props) => (props.isSameMonth ? "black" : "gray")};
`;

export default CalendarCell;
