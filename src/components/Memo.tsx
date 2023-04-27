import styled from "styled-components";
import NowDate from "./NowDate";
import Input from "./Input";
import Contents from "./Contents";

const Container = styled.div`
  width: 50vw;
`;

const Memo = () => {
  return (
    <Container>
      <NowDate />
      <Contents />
      <Input />
    </Container>
  );
};

export default Memo;
