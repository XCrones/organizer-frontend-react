import { MonthCurr, MonthNext, MonthPrev, Moth } from "./Month.style";

interface Props {
  nextMonth: Function;
  prevMonth: Function;
  monthStr: string;
  yearNum: number;
}

const MonthComponent = ({ monthStr, nextMonth, prevMonth, yearNum }: Props) => {
  return (
    <Moth>
      <MonthPrev onClick={() => prevMonth()}>
        <i className="bi bi-chevron-left"></i>
      </MonthPrev>
      <MonthCurr>{`${monthStr} ${yearNum}`}</MonthCurr>
      <MonthNext onClick={() => nextMonth()}>
        <i className="bi bi-chevron-right"></i>
      </MonthNext>
    </Moth>
  );
};

export default MonthComponent;
