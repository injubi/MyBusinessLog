import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from ".";
import { targetDayAction } from "./day";

const useDay = () => {
  const { today, targetDay } = useSelector((state: RootState) => state.day);
  const dispatch = useDispatch();

  const handleTargetDay = useCallback((option: string) => {
    let nowMonth = targetDay.getMonth();
    let newDate = new Date();
    if (option === "prev") {
      newDate = new Date(
        targetDay.getFullYear(),
        nowMonth - 1,
        newDate.getDate()
      );
    } else {
      newDate = new Date(
        targetDay.getFullYear(),
        nowMonth + 1,
        newDate.getDate()
      );
    }
    console.log(newDate);
    dispatch(targetDayAction({ targetDay: newDate }));
  }, []);
  return { today, targetDay, handleTargetDay };
};
export default useDay;
