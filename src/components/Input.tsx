import { useEffect, useState } from "react";
import useDay from "../store/modules/day/dayHooks";
import useLog from "../store/modules/log/logHooks";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 0;
`;
const TextArea = styled.textarea`
    width: 70%;
    height: 30px;
    border: 1px solid lightgray;
    border-radius: 10px;
`;

const Button = styled.button`
    border: 0;
    background-color: #a4d6db;
    color: black;
    width: 100px;
    margin: 0 10px;
    border-radius: 20px;
    cursor: pointer;
`;
const Input = () => {
    const [content, setContent] = useState<string>();
    const { targetDay } = useDay();
    const { insertLog } = useLog();

    const handleClickBtn = () => {
        if (content) {
            insertLog({ content: content, date: targetDay });
            setContent("");
        }
    };
    return (
        <Container>
            <TextArea
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <Button onClick={handleClickBtn}>등록</Button>
        </Container>
    );
};

export default Input;
