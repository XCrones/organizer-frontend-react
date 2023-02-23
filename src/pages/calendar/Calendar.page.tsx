import { memo, useEffect, useRef, useState, useLayoutEffect } from "react";
import { areEqual, FixedSizeList, FixedSizeList as List } from "react-window";
import { CalendarWrapper, DayNum, DaysItem, DaysList, DayWeeek, Events } from "./Calendar.style";
import { IEvent, IParseEvent } from "../../models/calendar.models";
import { shallow } from "zustand/shallow";
import { IHeaderButton } from "../../models/header.model";
import {
  EventEditorComponent,
  HeaderComponent,
  MonthComponent,
  NotificationComponent,
  SheduleComponent,
} from "../../components";
import { useDate, useNotif, useWindowSize } from "../../hooks";
import { useCalendarStore } from "../../store";

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
  const calendarStore = useCalendarStore(
    (state) => ({
      data: state.data,
      getAllData: state.getAllData,
      deleteData: state.deleteData,
      patchData: state.patchData,
      joinData: state.joinData,
    }),
    shallow
  );

  const [isHideEdit, SetHideEdit] = useState(true);
  const [isHideCreate, SetHideCreate] = useState(true);
  const [daysMonth, SetDaysMonth] = useState<IDay[]>([]);
  const [events, SetEvents] = useState<IParseEvent[]>([]);
  const [updateRef, SetUpdateRef] = useState(false);
  const [editEvent, SetEditEvent] = useState<IEvent | undefined>();

  const { dateParse, next, prev, jump, selectDate, currDate } = useDate();
  const { size } = useWindowSize({ totalHeight: 0, totalWidth: 0 });
  const { isHideNotif, metaNotif, showNotif } = useNotif();

  const refListDays = useRef<FixedSizeList | null>(null);

  const buttonsHeader: IHeaderButton[] = [
    {
      callback: () => {},
      icon: "",
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
        minuteStart: +hourSTart.split(":")[1],
        hourEnd: +hourEnd.split(":")[0],
        minuteEnd: +hourEnd.split(":")[1],
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
      const findEvents = calendarStore.data.filter(
        (event) => new Date(Date.parse(event.eventStart)).toLocaleDateString() === selectDate.toLocaleDateString()
      );
      parseEvents(findEvents);
    } catch (e) {
      SetEvents([]);
      console.log(e);
    }
  };

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
    if (calendarStore.data.length > 0) {
      updateEvents();
    }
  }, [calendarStore.data]);

  useEffect(() => {
    if (updateRef) {
      if (!!refListDays.current && updateRef) {
        refListDays.current.scrollToItem(dateParse.day, "smart");
        SetUpdateRef(false);
      }
    }
  }, [updateRef]);

  useLayoutEffect(() => {
    calendarStore.getAllData();
  }, []);

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

  const callbackEdit = (id: number) => {
    const findEvent = calendarStore.data.find((event) => event.id === id);
    if (!!findEvent) {
      SetEditEvent(JSON.parse(JSON.stringify(findEvent)));
      SetHideEdit(false);
    }
  };

  return (
    <CalendarWrapper>
      <NotificationComponent isHide={isHideNotif} meta={metaNotif} />
      <HeaderComponent buttns={buttonsHeader} title={"calender"} />
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
            width={size.innerWidth - 40} // padding-left: 20px + padding-right: 20px
          >
            {Column}
          </List>
        </DaysList>
        <SheduleComponent callbackEdit={callbackEdit} events={events} />
      </Events>
      {!isHideCreate && (
        <EventEditorComponent
          callbackSubmit={calendarStore.joinData}
          callbackClose={() => SetHideCreate(true)}
          titleWindow="event"
          titleSubmit="join"
          isShowDelete={false}
          callbackNotif={showNotif}
        />
      )}
      {!isHideEdit && (
        <EventEditorComponent
          callbackSubmit={calendarStore.patchData}
          callbackClose={() => SetHideEdit(true)}
          titleWindow="event"
          titleSubmit="save"
          item={editEvent}
          isShowDelete={true}
          callbackDelete={calendarStore.deleteData}
          callbackNotif={showNotif}
        />
      )}
    </CalendarWrapper>
  );
};

export default CalendarPage;
