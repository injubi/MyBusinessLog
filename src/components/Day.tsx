import styled from "styled-components";

const Container = styled.div`
  width: 150px;
`;

type DayProps = {
  day: number;
};

const Day = ({ day }: DayProps) => {
  return <Container>{day}</Container>;
};
