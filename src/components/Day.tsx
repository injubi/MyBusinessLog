import styled from "styled-components";
import useDay from "../store/modules/day/dayHooks";
import { useEffect, useState } from "react";

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

const Day = ({ day, isToday, dateObject }: DayProps) => {
  const { targetDay, clickDay } = useDay();
  //   const {data}
  const [hasContents, setHasContents] = useState<boolean>(false);
  useEffect(() => {}, []);
  return (
    <DayContainer isToday={isToday} onClick={() => clickDay(dateObject)}>
      {day}
    </DayContainer>
  );
};

export default Day;
