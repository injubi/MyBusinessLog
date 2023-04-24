import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from ".";
import { DataType, insertLogAction } from "./log";

const useLog = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state: RootState) => state.log);

    const insertLog = useCallback(({ content, date }: DataType) => {
        dispatch(insertLogAction({ content, date }));
    }, []);

    return { data, insertLog };
};

export default useLog;
