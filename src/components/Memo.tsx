import styled from "styled-components";
import NowDate from "./NowDate";
import Input from "./Input";

const Container = styled.div`
    width: 50vw;
`;

const Memo = () => {
    return (
        <Container>
            <NowDate />
            <Input />
        </Container>
    );
};

export default Memo;
