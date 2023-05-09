import styled from "styled-components";
import useDay from "../store/modules/day/dayHooks";

const Container = styled.div`
  width: 100%;
  div {
    padding: 10px 0;
  }
`;

const MonthContainer = styled.div`
  display: flex;
  justify-content: center;
  div {
    margin: 0 20px;
  }
`;

const MonthButton = styled.div`
  cursor: pointer;
  font-weight: 600;
`;

const DayContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  background-color: white;
  border-bottom: 1px solid lightgray;
`;

const Day = styled.div<{ day: String }>`
  color: ${(props) =>
    props.day === "일" ? "red" : props.day === "토" ? "blue" : "gray"};
`;

const Header = () => {
  const { targetDay, handleTargetDay } = useDay();
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <Container>
      <MonthContainer>
        <MonthButton
          onClick={() => {
            handleTargetDay("prev");
          }}
        >
          {"<"}
        </MonthButton>
        <div>{targetDay.getMonth() + 1}월</div>
        <MonthButton
          onClick={() => {
            handleTargetDay("next");
          }}
        >
          {">"}
        </MonthButton>
      </MonthContainer>
      <DayContainer>
        {days.map((d) => (
          <Day day={d} key={d}>
            {d}
          </Day>
        ))}
      </DayContainer>
    </Container>
  );
};

export default Header;
