import { useState } from "react";
import styled from "styled-components";

const Conatiner = styled.div`
  width: 50vw;
`;

const Calendar = () => {
  const [today, setToday] = useState<Date>(new Date());

  return <Conatiner></Conatiner>;
};

export default Calendar;
