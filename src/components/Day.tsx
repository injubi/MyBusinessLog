import styled from "styled-components";

const Container = styled.div`
  /* width: 120px; */
  height: 150px;
  /* border: 1px solid black; */
  background-color: white;
  padding: 10px;
`;

type DayProps = {
  day: number;
};

const Day = ({ day }: DayProps) => {
  return <Container>{day !== 0 && day}</Container>;
};

export default Day;
