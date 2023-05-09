import styled from "styled-components";
import { useState } from "react";
import { DataType } from "../store/modules/log/log";
import useLog from "../store/modules/log/logHooks";
import useDay from "../store/modules/day/dayHooks";
const Container = styled.div`
  width: 80%;
  margin-top: 30px;
  /* display: flex; */
`;

const CreateBtn = styled.div`
  width: fit-content;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid black;
  }
`;

const Contents = styled.div`
  margin: 20px;
`;

const Item = styled.div`
  margin: 10px 0;
`;
const WeekContents = () => {
  const [selectedData, setSelectedData] = useState<DataType[]>([]);
  const { data } = useLog();
  const { targetDay } = useDay();
  const handleData = () => {
    let tempData = data.filter(
      (d) =>
        d.date.getFullYear() === targetDay.getFullYear() &&
        d.date.getMonth() === targetDay.getMonth() &&
        targetDay.getDate() - d.date.getDate() < 7
    );
    setSelectedData(tempData);
  };
  return (
    <Container>
      <CreateBtn onClick={handleData}>→ 이번 주 업무 기록 모아보기</CreateBtn>
      <Contents>
        {selectedData.map((d, idx) => (
          <Item key={idx}>- {d.content}</Item>
        ))}
      </Contents>
    </Container>
  );
};

export default WeekContents;
