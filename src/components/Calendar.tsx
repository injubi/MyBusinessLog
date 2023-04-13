import { useEffect, useState } from "react";
import styled from "styled-components";
import Day, { DayContainer, DayProps } from "./Day";
import Header from "./Header";
const Conatiner = styled.div`
  width: 50vw;
  background-color: lightgray;
`;

const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
`;

const Calendar = () => {
  const [targetDay, setTargetDay] = useState<Date>(new Date());
  const [today, setToday] = useState<Date>(new Date());
  const [prevBlank, setPrevBlank] = useState<number>();
  const [nextBlank, setNextBlank] = useState<number>();

  const [days, setDays] = useState<DayProps[]>([]);

  const handleMonth = (option: string) => {
    let nowMonth = targetDay.getMonth();
    let newDate = new Date();
    if (option === "prev") {
      newDate = new Date(
        targetDay.getFullYear(),
        nowMonth - 1,
        newDate.getDate()
      );
    } else {
      newDate = new Date(
        targetDay.getFullYear(),
        nowMonth + 1,
        newDate.getDate()
      );
    }
    console.log(newDate);
    setTargetDay(newDate);
  };

  useEffect(() => {
    let firstDay = new Date(targetDay.getFullYear(), targetDay.getMonth(), 1);
    let lastDay = new Date(
      targetDay.getFullYear(),
      targetDay.getMonth() + 1,
      0
    );
    console.log(firstDay.getDay());
    console.log(lastDay.getDate());
    let tempPrev = 0;
    let tempDays = [];
    let tempNext = 0;

    // 시작일자 앞에 빈값 넣기
    for (let i = 0; i < firstDay.getDay(); i++) {
      tempPrev++;
    }

    for (let i = firstDay.getDate(); i <= lastDay.getDate(); i++) {
      tempDays.push({
        day: i,
        isToday:
          i === today.getDate() && targetDay.getMonth() === today.getMonth()
            ? true
            : false,
      });
    }

    for (let i = lastDay.getDay(); i < 6; i++) {
      tempNext++;
    }
    setDays(tempDays);
    setPrevBlank(tempPrev);
    setNextBlank(tempNext);
  }, [targetDay]);

  return (
    <Conatiner>
      <Header handleMonth={handleMonth} month={targetDay.getMonth() + 1} />
      <Days>
        {/* {preBlank.maps} */}
        {Array(prevBlank)
          .fill(null)
          .map((_, i) => (
            <DayContainer key={i} isToday={false} />
          ))}
        {days.map((d) => (
          <Day key={d.day} day={d.day} isToday={d.isToday} />
        ))}
        {Array(nextBlank)
          .fill(null)
          .map((_, i) => (
            <DayContainer key={i} isToday={false} />
          ))}
      </Days>
    </Conatiner>
  );
};

export default Calendar;
