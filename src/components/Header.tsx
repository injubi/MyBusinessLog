import styled from "styled-components";

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
  /* padding: 10px 0; */
`;
type HeaderProps = {
  handleMonth: Function;
  month: number;
};
const Header = ({ handleMonth, month }: HeaderProps) => {
  // const month = new Date().getMonth() + 1;
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const preMonth = () => {};
  const nextMonth = () => {};
  return (
    <Container>
      <MonthContainer>
        <MonthButton
          onClick={() => {
            handleMonth("prev");
          }}
        >
          {"<"}
        </MonthButton>
        <div>{month}월</div>
        <MonthButton
          onClick={() => {
            handleMonth("next");
          }}
        >
          {">"}
        </MonthButton>
      </MonthContainer>
      <DayContainer>
        {days.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </DayContainer>
    </Container>
  );
};

export default Header;
