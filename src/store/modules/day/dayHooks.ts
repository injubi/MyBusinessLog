import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../.";
import { targetDayAction } from "./day";

const useDay = () => {
  const { today, targetDay } = useSelector((state: RootState) => state.day);
  const dispatch = useDispatch();

  const handleTargetDay = useCallback(
    (option: string) => {
      let newDate = new Date();

      if (option === "prev") {
        if (targetDay.getMonth() === 1) {
          newDate = new Date(
            targetDay.getFullYear() - 1,
            11,
            newDate.getDate()
          );
        } else {
          newDate = new Date(
            targetDay.getFullYear(),
            targetDay.getMonth() - 1,
            newDate.getDate()
          );
        }
      } else {
        if (targetDay.getMonth() === 11) {
          newDate = new Date(targetDay.getFullYear() + 1, 0, 1);
        } else {
          newDate = new Date(
            targetDay.getFullYear(),
            targetDay.getMonth() + 1,
            newDate.getDate()
          );
        }
      }
      dispatch(targetDayAction({ targetDay: newDate }));
    },
    [targetDay]
  );

  const clickDay = useCallback(
    (date: Date) => {
      dispatch(targetDayAction({ targetDay: date }));
    },
    [targetDay]
  );

  const checkSameDate = useCallback((date1: Date, date2: Date) => {
    if (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    )
      return true;
    else return false;
  }, []);
  return { today, targetDay, handleTargetDay, clickDay, checkSameDate };
};
export default useDay;
