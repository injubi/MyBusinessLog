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
`;
const DayContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  background-color: white;
  border-bottom: 1px solid lightgray;
  /* padding: 10px 0; */
`;

const Header = () => {
  const month = new Date().getMonth() + 1;
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <Container>
      <MonthContainer>{month}월</MonthContainer>
      <DayContainer>
        {days.map((d) => (
          <div>{d}</div>
        ))}
      </DayContainer>
    </Container>
  );
};

export default Header;
