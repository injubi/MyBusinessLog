import styled from "styled-components";
import useLog from "../store/modules/log/logHooks";
import useDay from "../store/modules/day/dayHooks";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const Contents = () => {
  const { data } = useLog();
  const { targetDay } = useDay();

  return (
    <Container>
      {data.map((d) => targetDay === d.date && <Item>{d.content}</Item>)}
    </Container>
  );
};

export default Contents;
