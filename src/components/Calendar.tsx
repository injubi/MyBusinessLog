import { useEffect, useState } from "react";
import styled from "styled-components";
import Day from "./Day";
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
  const [today, setToday] = useState<Date>(new Date());

  const [days, setDays] = useState<number[]>([]);

  useEffect(() => {
    let firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    let lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    console.log(firstDay.getDay());
    console.log(lastDay.getDate());
    let tempDays = [];

    // 시작일자 앞에 빈값 넣기
    for (let i = 0; i < firstDay.getDay(); i++) {
      tempDays.push(0);
    }

    for (let i = firstDay.getDate(); i <= lastDay.getDate(); i++) {
      tempDays.push(i);
    }

    for (let i = lastDay.getDay(); i < 6; i++) {
      tempDays.push(0);
    }
    setDays(tempDays);
  }, []);

  return (
    <Conatiner>
      <Header />
      <Days>
        {days.map((d) => (
          <Day day={d} />
        ))}
      </Days>
    </Conatiner>
  );
};

export default Calendar;
