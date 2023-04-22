import styled from "styled-components";
import Calendar from "../components/Calendar";
import Memo from "../components/Memo";

const Container = styled.div`
    display: flex;
`;
const Home = () => {
    return (
        <Container>
            <Calendar />
            <Memo />
        </Container>
    );
};

export default Home;
