import MonthComponent from "../../components/calendar/Month.component";
import HeaderComponent, { IButtonHeader } from "../../components/header/Header";
import { CalendarWrapper, DayNum, DaysItem, DaysList, DayWeeek, Events } from "./Calendar.style";
import { areEqual, FixedSizeList, FixedSizeList as List } from "react-window";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { memo, useEffect, useRef, useState, useLayoutEffect } from "react";
import { useWindowSize } from "../../hooks/windowResize";
import { useDate } from "../../hooks/date";
import { IEvent, IParseEvent } from "../../models/calendar.models";
import { fetchEvents } from "../../store/slices/calendar.slice";
import SheduleComponent from "../../components/calendar/Shedule.component";
import CreateEventComponent from "../../components/calendar/CreateEvent.component";

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

const CalendarPage = () => {
  const dispatch = useAppDispatch();
  const calendarEvents = useAppSelector((state) => state.calendar.events);

  const [isHideCreate, SetHideCreate] = useState(true);
  const [daysMonth, SetDaysMonth] = useState<IDay[]>([]);
  const [events, SetEvents] = useState<IParseEvent[]>([]);
  const [updateRef, SetUpdateRef] = useState(false);

  const { dateParse, next, prev, jump, selectDate, currDate } = useDate();
  const { size } = useWindowSize({ totalHeight: 0, totalWidth: 0 });

  const refListDays = useRef<FixedSizeList | null>(null);

  const buttonsHeader: IButtonHeader[] = [
    {
      callback: () => {},
      icon: "bi bi-search",
    },
    {
      callback: () => SetHideCreate(false),
      icon: "bi bi-plus-lg",
    },
  ];

  const parseEvents = (events: IEvent[]) => {
    events.forEach((event) => {
      const hourSTart = new Date(Date.parse(event.eventStart)).toLocaleTimeString();
      const hourEnd = new Date(Date.parse(event.eventEnd)).toLocaleTimeString();
      const parseEvent: IParseEvent = {
        hourStart: +hourSTart.split(":")[0],
        hourEnd: +hourEnd.split(":")[0],
        title: event.title,
        background: event.background,
        id: event.id,
        description: event.description,
      };
      SetEvents((prev) => [...prev, parseEvent]);
    });
  };

  const updateEvents = () => {
    SetEvents([]);

    if (!updateRef) {
      SetUpdateRef(true);
    }

    try {
      const findEvents = calendarEvents.filter(
        (event) => new Date(Date.parse(event.eventStart)).toLocaleDateString() === selectDate.toLocaleDateString()
      );
      parseEvents(findEvents);
    } catch (e) {
      SetEvents([]);
      console.log(e);
    }
  };

  useLayoutEffect(() => {
    dispatch(fetchEvents());
  }, []);

  useEffect(() => {
    if (dateParse.daysMonth !== -1) {
      const fillMonth = Array.from(Array(dateParse.daysMonth), (_, idx) => {
        return {
          dayStr: new Date(dateParse.year, dateParse.monthNum, idx + 1).toLocaleString("en-US", {
            weekday: "short",
          }),
          dayNum: idx,
          monthNum: dateParse.monthNum,
        };
      });
      SetDaysMonth(fillMonth);
      updateEvents();
    }
  }, [dateParse]);

  useEffect(() => {
    if (calendarEvents.length > 0) {
      updateEvents();
    }
  }, [calendarEvents]);

  useEffect(() => {
    if (updateRef) {
      if (!!refListDays.current && updateRef) {
        refListDays.current.scrollToItem(dateParse.day, "smart");
        SetUpdateRef(false);
      }
    }
  }, [updateRef]);

  const Column = memo(({ index, style, data }: IColumn) => {
    const isSelectDay = (day: number, month: number) =>
      +selectDate.toLocaleDateString().split(".")[0] - 1 === day &&
      +selectDate.toLocaleDateString().split(".")[1] - 1 === month;

    const isToday = (day: number, month: number) =>
      +currDate.toLocaleDateString().split(".")[0] - 1 === day &&
      +currDate.toLocaleDateString().split(".")[1] - 1 === month;

    return (
      <div style={style}>
        <DaysItem
          style={{
            borderColor: isToday(+data[index].dayNum, +data[index].monthNum) ? "#ff4800" : "#fff",
          }}
          onClick={() => jump.day(data[index].dayNum)}
          currDay={isSelectDay(+data[index].dayNum, +data[index].monthNum)}
          type="button"
        >
          <DayWeeek currDay={isSelectDay(+data[index].dayNum, +data[index].monthNum)}>{data[index].dayStr}</DayWeeek>
          <DayNum>{data[index].dayNum + 1}</DayNum>
        </DaysItem>
        <div style={{ width: "10px" }}></div>
      </div>
    );
  }, areEqual);

  return (
    <CalendarWrapper>
      <HeaderComponent buttns={buttonsHeader} title={"calender"} />
      {isHideCreate && (
        <Events>
          <MonthComponent
            monthStr={dateParse.monthStr}
            yearNum={dateParse.year}
            nextMonth={next.month}
            prevMonth={prev.month}
          />
          <DaysList>
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
          </DaysList>
          <SheduleComponent events={events} />
        </Events>
      )}
      {!isHideCreate && (
        <CreateEventComponent callbackClose={() => SetHideCreate(true)} titleWindow="event" titleSubmit="" />
      )}
    </CalendarWrapper>
  );
};

export default CalendarPage;
