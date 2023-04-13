import styled from "styled-components";

export const DayContainer = styled.div<{ isToday: boolean }>`
  height: 150px;
  background-color: white;
  padding: 10px;
  font-weight: ${(props) => props.isToday && 600};
`;

export type DayProps = {
  day: number;
  isToday: boolean;
};

const Day = ({ day, isToday }: DayProps) => {
  return <DayContainer isToday={isToday}>{day}</DayContainer>;
};

export default Day;
