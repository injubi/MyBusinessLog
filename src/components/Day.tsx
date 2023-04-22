import styled from "styled-components";

export const DayContainer = styled.div<{ isToday: boolean }>`
    height: 100px;
    background-color: white;
    padding: 10px;
    font-weight: ${(props) => props.isToday && 600};
    /* border: ${(props) => props.isToday && "1px solid yellow"}; */
    box-shadow: ${(props) => props.isToday && "0 0 0 1px yellow"};
`;

export type DayProps = {
    day: number;
    isToday: boolean;
};

const Day = ({ day, isToday }: DayProps) => {
    return <DayContainer isToday={isToday}>{day}</DayContainer>;
};

export default Day;
