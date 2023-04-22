import styled from "styled-components";
import NowDate from "./NowDate";

const Container = styled.div`
    width: 50vw;
`;

const Memo = () => {
    return (
        <Container>
            <NowDate />
        </Container>
    );
};

export default Memo;
