import { useEffect, useState } from "react";
import useDay from "../store/modules/dayHooks";
import useLog from "../store/modules/logHooks";

const Input = () => {
    const [content, setContent] = useState<string>();
    const { targetDay } = useDay();
    const { insertLog } = useLog();

    const handleClickBtn = () => {
        console.log(content);
        if (content) {
            insertLog({ content: content, date: targetDay });
        }
    };
    return (
        <>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={handleClickBtn}>hi</button>
        </>
    );
};

export default Input;
