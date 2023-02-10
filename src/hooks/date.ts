import { useEffect, useState } from "react";

interface IDate {
  yearNum: string;
  monthStr: string;
  monthNum: string;
  dayNum: string;
  hour24: string;
  minute: string;
  dayShort: string;
  weekDayShort: string;
}

type setCurrDate = Date;

export const useDate = (setCurrDate?: setCurrDate) => {
  useEffect(() => {
    if (!!setCurrDate) {
      updateDate(setCurrDate);
    }
  }, [setCurrDate]);

  const updateDate = (date?: setCurrDate): IDate => {
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
      dayShort: currDate.toLocaleString("en-US", { day: "numeric" }),
      weekDayShort: currDate.toLocaleString("en-US", { weekday: "short" }),
    };
  };

  const [date, setDate] = useState<IDate>(updateDate());

  const year = {
    prev: (year?: number) => {
      const newDate = new Date(
        !!year ? +date.yearNum - year : +date.yearNum - 1,
        +date.monthNum - 1,
        +date.dayNum,
        +date.hour24,
        +date.minute
      );
      setDate(updateDate(newDate));
    },
    next: (year?: number) => {
      const newDate = new Date(
        !!year ? +date.yearNum + year : +date.yearNum + 1,
        +date.monthNum - 1,
        +date.dayNum,
        +date.hour24,
        +date.minute
      );
      setDate(updateDate(newDate));
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
      setDate(updateDate(newDate));
    },
    next: (month?: number) => {
      const newDate = new Date(
        +date.yearNum,
        !!month ? +date.monthNum - 1 + month : +date.monthNum,
        +date.dayNum,
        +date.hour24,
        +date.minute
      );
      setDate(updateDate(newDate));
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
      setDate(updateDate(newDate));
    },
    next: (day?: number) => {
      const newDate = new Date(
        +date.yearNum,
        +date.monthNum - 1,
        !!day ? +date.dayNum + day : +date.dayNum + 1,
        +date.hour24,
        +date.minute
      );
      setDate(updateDate(newDate));
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
      setDate(updateDate(newDate));
    },
    next: (hour?: number) => {
      const newDate = new Date(
        +date.yearNum,
        +date.monthNum - 1,
        +date.dayNum,
        !!hour ? +date.hour24 + hour : +date.hour24 + 1,
        +date.minute
      );
      setDate(updateDate(newDate));
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
      setDate(updateDate(newDate));
    },
    next: (minute?: number) => {
      const newDate = new Date(
        +date.yearNum,
        +date.monthNum - 1,
        +date.dayNum,
        +date.hour24,
        !!minute ? +date.minute + minute : +date.minute + 1
      );
      setDate(updateDate(newDate));
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
