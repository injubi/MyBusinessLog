import styled from "styled-components";
import useDay from "../store/modules/day/dayHooks";
import { useEffect } from "react";

export const DayContainer = styled.div<{ isToday: boolean }>`
  height: 100px;
  background-color: white;
  padding: 10px;
  font-weight: ${(props) => props.isToday && 600};
  /* border: ${(props) => props.isToday && "1px solid yellow"}; */
  box-shadow: ${(props) => props.isToday && "0 0 0 1px yellow"};
  border-radius: 10px;
  color: gray;
`;

export type DayProps = {
  day: number;
  isToday: boolean;
  dateObject: Date;
};

const Day = ({ day, isToday }: DayProps) => {
  const { targetDay, handleTargetDay } = useDay();

  useEffect(() => {}, []);
  return <DayContainer isToday={isToday}>{day}</DayContainer>;
};

export default Day;
