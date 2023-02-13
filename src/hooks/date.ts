import { useEffect, useState } from "react";

interface IDate {
  yearNum: string;
  monthStr: string;
  monthNum: string;
  dayNum: string;
  hour24: string;
  minute: string;
  weekDayShort: string;
}

type setCurrDate = Date;

export const useDate = (setCurrDate?: setCurrDate) => {
  const [date, SetDate] = useState<IDate>(updateDate());

  useEffect(() => {
    if (!!setCurrDate) {
      updateDate(setCurrDate);
    }
  }, [setCurrDate]);

  function updateDate(date?: setCurrDate): IDate {
    let currDate = new Date();

    if (!!date) {
      currDate = date;
    }

    return {
      monthStr: currDate.toLocaleString("en-US", { month: "long" }),
      monthNum: currDate.toLocaleString("en-US", { month: "numeric" }),
      yearNum: currDate.toLocaleString("en-US", { year: "numeric" }),
      dayNum: currDate.toLocaleString("en-US", { day: "numeric" }),
      hour24: currDate.toLocaleString("en-US", { hour: "numeric", hour12: false }),
      minute: currDate.toLocaleString("en-US", { minute: "numeric" }),
      weekDayShort: currDate.toLocaleString("en-US", { weekday: "short" }),
    };
  }

  const year = {
    prev: (year?: number) => {
      const newDate = new Date(
        !!year ? +date.yearNum - year : +date.yearNum - 1,
        +date.monthNum - 1,
        +date.dayNum,
        +date.hour24,
        +date.minute
      );
      SetDate(updateDate(newDate));
    },
    next: (year?: number) => {
      const newDate = new Date(
        !!year ? +date.yearNum + year : +date.yearNum + 1,
        +date.monthNum - 1,
        +date.dayNum,
        +date.hour24,
        +date.minute
      );
      SetDate(updateDate(newDate));
    },
    jump: (year: number) => {
      const newDate = new Date(Math.max(1970, year), +date.monthNum - 1, +date.dayNum, +date.hour24, +date.minute);
      SetDate(updateDate(newDate));
    },
  };

  const month = {
    prev: (month?: number) => {
      const newDate = new Date(
        +date.yearNum,
        !!month ? +date.monthNum - 1 - month : +date.monthNum - 2,
        +date.dayNum,
        +date.hour24,
        +date.minute
      );
      SetDate(updateDate(newDate));
    },
    next: (month?: number) => {
      const newDate = new Date(
        +date.yearNum,
        !!month ? +date.monthNum - 1 + month : +date.monthNum,
        +date.dayNum,
        +date.hour24,
        +date.minute
      );
      SetDate(updateDate(newDate));
    },
    jump: (month: number) => {
      const newDate = new Date(
        +date.yearNum,
        Math.max(0, Math.min(11, month)),
        +date.dayNum,
        +date.hour24,
        +date.minute
      );
      SetDate(updateDate(newDate));
    },
  };

  const day = {
    prev: (day?: number) => {
      const newDate = new Date(
        +date.yearNum,
        +date.monthNum - 1,
        !!day ? +date.dayNum - day : +date.dayNum - 1,
        +date.hour24,
        +date.minute
      );
      SetDate(updateDate(newDate));
    },
    next: (day?: number) => {
      const newDate = new Date(
        +date.yearNum,
        +date.monthNum - 1,
        !!day ? +date.dayNum + day : +date.dayNum + 1,
        +date.hour24,
        +date.minute
      );
      SetDate(updateDate(newDate));
    },
    jump: (day: number) => {
      const newDate = new Date(
        +date.yearNum,
        +date.monthNum - 1,
        Math.min(0, Math.max(31, day)),
        +date.hour24,
        +date.minute
      );
      SetDate(updateDate(newDate));
    },
  };

  const hour = {
    prev: (hour?: number) => {
      const newDate = new Date(
        +date.yearNum,
        +date.monthNum - 1,
        +date.dayNum,
        !!hour ? +date.hour24 - hour : +date.hour24 - 1,
        +date.minute
      );
      SetDate(updateDate(newDate));
    },
    next: (hour?: number) => {
      const newDate = new Date(
        +date.yearNum,
        +date.monthNum - 1,
        +date.dayNum,
        !!hour ? +date.hour24 + hour : +date.hour24 + 1,
        +date.minute
      );
      SetDate(updateDate(newDate));
    },
    jump: (hour: number) => {
      const newDate = new Date(
        +date.yearNum,
        +date.monthNum - 1,
        +date.dayNum,
        Math.min(0, Math.max(23, hour)),
        +date.minute
      );
      SetDate(updateDate(newDate));
    },
  };

  const minute = {
    prev: (minute?: number) => {
      const newDate = new Date(
        +date.yearNum,
        +date.monthNum - 1,
        +date.dayNum,
        +date.hour24,
        !!minute ? +date.minute - minute : +date.minute - 1
      );
      SetDate(updateDate(newDate));
    },
    next: (minute?: number) => {
      const newDate = new Date(
        +date.yearNum,
        +date.monthNum - 1,
        +date.dayNum,
        +date.hour24,
        !!minute ? +date.minute + minute : +date.minute + 1
      );
      SetDate(updateDate(newDate));
    },
    jump: (minute: number) => {
      const newDate = new Date(
        +date.yearNum,
        +date.monthNum - 1,
        +date.dayNum,
        +date.hour24,
        Math.min(0, Math.max(59, minute))
      );
      SetDate(updateDate(newDate));
    },
  };

  return {
    date,
    year,
    month,
    day,
    hour,
    minute,
  };
};
