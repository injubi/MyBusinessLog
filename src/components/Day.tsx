import styled from "styled-components";
import useDay from "../store/modules/day/dayHooks";
import { useEffect, useState } from "react";
import useLog from "../store/modules/log/logHooks";

export const DayContainer = styled.div<{ isToday: boolean }>`
    height: 100px;
    background-color: white;
    padding: 10px;
    font-weight: ${(props) => props.isToday && 600};
    /* border: ${(props) => props.isToday && "1px solid yellow"}; */
    box-shadow: ${(props) => props.isToday && "0 0 0 1px yellow"};
    border-radius: 10px;
    color: gray;
    display: flex;
    justify-content: space-between;
`;

const Check = styled.div`
    /* margin-left: 10px; */
`;

export type DayProps = {
    day: number;
    isToday: boolean;
    dateObject: Date;
};

const Day = ({ day, isToday, dateObject }: DayProps) => {
    const { clickDay, checkSameDate } = useDay();
    const { data } = useLog();
    const [hasContents, setHasContents] = useState<boolean>(false);
    useEffect(() => {
        setHasContents(false);
        data.forEach((d) => {
            if (checkSameDate(d.date, dateObject)) {
                setHasContents(true);
            } else {
            }
        });
    }, [day, dateObject, checkSameDate, data]);
    return (
        <DayContainer isToday={isToday} onClick={() => clickDay(dateObject)}>
            <div>{day}</div>
            {hasContents && <Check>●</Check>}
        </DayContainer>
    );
};

export default Day;
