import { memo, useEffect, useRef, useState } from "react";
import { useDate } from "../../hooks/date";
import { DayNum, Days, DaysItem, DaysItems, DayWeeek, MonthCurr, MonthNext, MonthPrev, Moth } from "./Days.style";
import { areEqual, FixedSizeList, FixedSizeList as List } from "react-window";
import { useWindowSize } from "../../hooks/windowResize";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { IEvent } from "../../models/calendar.models";
import { fetchEvents } from "../../store/slices/calendar.slice";
import SheduleComponent from "./Shedule.component";

interface IDay {
  dayStr: string;
  dayNum: number;
  monthNum: number;
}

interface IColumn {
  index: number;
  style: object;
  data: IDay[];
}

export interface IParseEvent {
  id: number;
  startTime: number;
  edntTime: number;
  background: string;
  title: string;
  description: string;
}

const DaysComponent = () => {
  const dispatch = useAppDispatch();

  const [todayDate] = useState({
    day: +new Date().toLocaleString("en-US", { day: "numeric" }),
    month: +new Date().toLocaleString("en-US", { month: "numeric" }),
  });

  const calendarEvents = useAppSelector((state) => state.calendar.events);

  const [daysMonth, SetDaysMonth] = useState<IDay[]>([]);
  const [selectDay, SetSelectDay] = useState(0);
  const [events, SetEvents] = useState<IParseEvent[]>([]);

  const { size } = useWindowSize({ totalHeight: 0, totalWidth: 0 });
  const { date, month } = useDate();

  const refListDays = useRef<FixedSizeList | null>(null);

  const parseEvents = (events: IEvent[]) => {
    SetEvents([]);
    events.forEach((event) => {
      const startTime = String(event.eventStart).split("T")[1].split(".")[0];
      const endTime = String(event.eventEnd).split("T")[1].split(".")[0];
      const parseEvent: IParseEvent = {
        startTime: +startTime.split(":")[0],
        edntTime: +endTime.split(":")[0],
        title: event.title,
        background: event.background,
        id: event.id,
        description: event.description,
      };
      SetEvents((prev) => [...prev, parseEvent]);
    });
  };

  const updateEvents = (day: number) => {
    SetSelectDay(day);

    if (!!refListDays.current) {
      refListDays.current.scrollToItem(day, "smart");
    }

    try {
      const dateISO = new Date(+date.yearNum, +date.monthNum - 1, day + 1)
        .toLocaleString()
        .split(",")[0]
        .split(".")
        .reverse()
        .join("-");
      const findEvents = calendarEvents.filter((item) => String(item.eventStart).split("T")[0] === dateISO);
      parseEvents(findEvents);
    } catch (e) {
      SetEvents([]);
      console.log(e);
    }
  };

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  useEffect(() => {
    updateEvents(+date.dayNum - 1);
  }, [calendarEvents]);

  useEffect(() => {
    const countDays = 33 - new Date(+date.yearNum, +date.monthNum - 1, 33).getDate();
    const filledArray = Array.from(Array(countDays), (_, idx) => {
      return {
        dayStr: new Date(+date.yearNum, +date.monthNum - 1, idx + 1).toLocaleString("en-US", {
          weekday: "short",
        }),
        dayNum: idx,
        monthNum: +date.monthNum - 1,
      };
    });
    SetDaysMonth(filledArray);
    updateEvents(selectDay);
  }, [date.monthNum]);

  const isCurrDate = (day: number, month: number) => todayDate.day - 1 === day && +todayDate.month - 1 === month;

  const Column = memo(({ index, style, data }: IColumn) => {
    return (
      <div style={style}>
        <DaysItem
          style={{
            borderColor: isCurrDate(+data[index].dayNum, +data[index].monthNum) ? "#ff6600" : "#fff",
          }}
          onClick={() => updateEvents(data[index].dayNum)}
          currDay={selectDay === data[index].dayNum}
          type="button"
        >
          <DayWeeek currDay={selectDay === data[index].dayNum}>{data[index].dayStr}</DayWeeek>
          <DayNum>{data[index].dayNum + 1}</DayNum>
        </DaysItem>
        <div style={{ width: "10px" }}></div>
      </div>
    );
  }, areEqual);

  return (
    <Days>
      <Moth>
        <MonthPrev onClick={() => month.prev()} type="button">
          <i className="bi bi-chevron-left"></i>
        </MonthPrev>
        <MonthCurr>{`${date.monthStr} ${date.yearNum}`}</MonthCurr>
        <MonthNext onClick={() => month.next()} type="button">
          <i className="bi bi-chevron-right"></i>
        </MonthNext>
      </Moth>
      <DaysItems>
        <List
          ref={refListDays}
          overscanCount={2}
          height={60}
          itemSize={60}
          itemCount={daysMonth.length}
          itemData={daysMonth}
          layout="horizontal"
          width={size.windowWidth - 40} // padding-left: 20px + padding-right: 20px
        >
          {Column}
        </List>
      </DaysItems>
      <SheduleComponent events={events} />
    </Days>
  );
};

export default DaysComponent;
