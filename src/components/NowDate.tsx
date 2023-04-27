import styled from "styled-components";
import { RootState } from "../store/modules";
import useDay from "../store/modules/day/dayHooks";

const Container = styled.div`
  width: 100%;
  height: 100px;
  font-size: 32px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const NowDate = () => {
  const { targetDay } = useDay();

  return (
    <Container>
      {targetDay.getFullYear()}년 {targetDay.getMonth() + 1}월{" "}
      {targetDay.getDate()}일
    </Container>
  );
};

export default NowDate;
