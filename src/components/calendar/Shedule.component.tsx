import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { IEvent } from "../../models/calendar.models";
import { SheduleItem, SheduleItems, SheduleLine, SheduleTime, SheduleWrapper } from "./Shedule.style";

interface IDate {
  currDay: number;
  currMonth: number;
  currYear: number;
}

interface Props {
  date: IDate;
}

const SheduleComponent = ({ date }: Props) => {
  const [times, SetTimes] = useState<number[]>([]);
  const [events, SetEvents] = useState<IEvent[]>([]);

  // const calendar = useAppSelector((state) => state.calendar.events);

  // const updateEvents = () => {
  //   const events = calendar.filter((item) => {
  //     const sourceDate = String(item.eventStart).split("T")[0];
  //     const targetDate = new Date(date.currYear, date.currMonth - 1, date.currDay + 2).toISOString();
  //     console.log(targetDate);
  //     if (sourceDate === targetDate) {
  //       return item;
  //     }
  //   });
  //   SetEvents(events);
  // };

  // useEffect(() => {
  //   updateEvents();
  // }, [date, calendar]);

  const testMake = () => {
    const dateTEst = new Date(date.currYear, date.currMonth - 1, date.currDay + 1).toLocaleString().split(",")[0];
    const param = `${date.currYear}, ${date.currMonth - 1}, ${date.currDay}`;
    console.log(dateTEst, param, date.currDay);
  };

  useEffect(() => {
    testMake();
  }, [date]);

  useEffect(() => {
    SetTimes(Array.from(Array(24), (_, idx) => idx));
  }, []);

  return (
    <SheduleWrapper>
      <SheduleItems>
        {times.map((_, idx) => (
          <SheduleItem key={idx}>
            <SheduleTime>{`${idx < 10 ? "0" : ""}${idx} : 00`}</SheduleTime>
            <SheduleLine />
          </SheduleItem>
        ))}
      </SheduleItems>
    </SheduleWrapper>
  );
};

export default SheduleComponent;
