import { MonthButt, MonthCurr, Moth } from "./Month.style";

interface Props {
  nextMonth: Function;
  prevMonth: Function;
  monthStr: string;
  yearNum: number;
}

const MonthComponent = ({ monthStr, nextMonth, prevMonth, yearNum }: Props) => {
  return (
    <Moth>
      <MonthButt onClick={() => prevMonth()}>
        <i className="bi bi-chevron-left"></i>
      </MonthButt>
      <MonthCurr>{`${monthStr} ${yearNum}`}</MonthCurr>
      <MonthButt onClick={() => nextMonth()}>
        <i className="bi bi-chevron-right"></i>
      </MonthButt>
    </Moth>
  );
};

export default MonthComponent;
