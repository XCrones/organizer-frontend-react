import { memo, useEffect, useMemo, useRef, useState } from "react";
import { useDate } from "../../hooks/date";
import {
  DayNum,
  Days,
  DaysItem,
  DaysItems,
  DayWeeek,
  EventItem,
  Events,
  EventDescription,
  EventTitle,
  EventWrapper,
  MonthCurr,
  MonthNext,
  MonthPrev,
  Moth,
  SheduleItem,
  SheduleItems,
  SheduleLine,
  SheduleTime,
  SheduleWrapper,
} from "./Days.style";
import { areEqual, FixedSizeList, FixedSizeList as List } from "react-window";
import { useWindowSize } from "../../hooks/windowResize";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { IEvent } from "../../models/calendar.models";
import { fetchEvents } from "../../store/slices/calendar.slice";

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

  const [today] = useState(+new Date().toLocaleString("en-US", { day: "numeric" }));

  const calendar = useAppSelector((state) => state.calendar.events);

  const [daysMonth, SetDaysMonth] = useState<IDay[]>([]);
  const [currDay, setCurrDay] = useState(0);
  const [times, SetTimes] = useState<number[]>([]);
  const [events, SetEvents] = useState<IParseEvent[]>([]);

  const { size } = useWindowSize({ totalHeight: 0, totalWidth: 0 });
  const { date, month } = useDate();

  const refDays = useRef<FixedSizeList | null>(null);

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

  const setDay = (day: number) => {
    setCurrDay(day);
    // console.log(day);

    if (!!refDays.current) {
      refDays.current.scrollToItem(day, "smart");
    }

    try {
      const dateISO = new Date(+date.yearNum, +date.monthNum - 1, day + 1)
        .toLocaleString()
        .split(",")[0]
        .split(".")
        .reverse()
        .join("-");
      const findEvents = calendar.filter((item) => String(item.eventStart).split("T")[0] === dateISO);
      parseEvents(findEvents);
    } catch (e) {
      SetEvents([]);
      console.log(e);
    }
  };

  useEffect(() => {
    dispatch(fetchEvents());
    SetTimes(Array.from(Array(24), (_, idx) => idx));
  }, []);

  useEffect(() => {
    setDay(+date.dayNum - 1);
  }, [calendar]);

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
    // setDay(currDay);
  }, [date.monthNum]);

  const Column = memo(({ index, style, data }: IColumn) => {
    return (
      <div style={style}>
        <DaysItem
          style={{ borderColor: today - 1 === data[index].dayNum ? "#ff6600" : "#fff" }}
          onClick={() => setDay(data[index].dayNum)}
          currDay={currDay === data[index].dayNum}
          type="button"
        >
          <DayWeeek currDay={currDay === data[index].dayNum}>{data[index].dayStr}</DayWeeek>
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
          ref={refDays}
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
      <SheduleWrapper>
        <SheduleItems>
          {times.map((_, idx) => (
            <SheduleItem key={idx}>
              <SheduleTime>{`${idx < 10 ? "0" : ""}${idx} : 00`}</SheduleTime>
              <SheduleLine />
            </SheduleItem>
          ))}
          <EventWrapper>
            <Events>
              {events.map((event, idx) => (
                <EventItem
                  key={event.id}
                  background={event.background}
                  edntTime={event.edntTime}
                  startTime={event.startTime}
                >
                  <EventTitle>{event.title}</EventTitle>
                  <EventDescription>{event.description}</EventDescription>
                </EventItem>
              ))}
            </Events>
          </EventWrapper>
        </SheduleItems>
      </SheduleWrapper>
    </Days>
  );
};

export default DaysComponent;
