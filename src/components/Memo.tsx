import styled from "styled-components";
import NowDate from "./NowDate";
import Input from "./Input";
import Contents from "./Contents";
import useDay from "../store/modules/day/dayHooks";
import WeekContents from "./WeekContents";

const Container = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Memo = () => {
  const { targetDay } = useDay();
  return (
    <Container>
      <NowDate />
      <Contents />
      <Input />
      {targetDay.getDay() === 4 && <WeekContents />}
    </Container>
  );
};

export default Memo;
