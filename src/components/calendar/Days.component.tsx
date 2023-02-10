import { useState } from "react";
import { useDate } from "../../hooks/date";
import { DateItems, Days, MonthCurr, MonthNext, MonthPrev, Moth } from "./Days.style";

interface Props {}

const DaysComponent = () => {
  const { date, nextMont, prevMonth } = useDate();

  return (
    <Days>
      <Moth>
        <MonthPrev onClick={() => prevMonth()} type="button">
          <i className="bi bi-chevron-left"></i>
        </MonthPrev>
        <MonthCurr>{`${date.monthStr} ${date.yearNum}`}</MonthCurr>
        <MonthNext onClick={() => nextMont()} type="button">
          <i className="bi bi-chevron-right"></i>
        </MonthNext>
      </Moth>
      <DateItems>date items</DateItems>
    </Days>
  );
};

export default DaysComponent;
