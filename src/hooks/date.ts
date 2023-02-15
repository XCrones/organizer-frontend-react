import { useEffect, useState } from "react";

interface IDate {
  year: number;
  month: string;
  monthNum: number;
  daysMonth: number;
  day: number;
  weekDay: string;
  hour: number;
  min: number;
}

export const useDate = () => {
  const [dateLocal] = useState<Date>(new Date());
  const [selectDate, SetSelectDate] = useState(new Date());
  const [dateParse, SetDateParse] = useState<IDate>({
    year: -1,
    monthNum: -1,
    month: "",
    daysMonth: -1,
    weekDay: "",
    day: -1,
    hour: -1,
    min: -1,
  });

  function makeDate(date?: string) {
    let currDate = new Date();
    if (!!date) {
      currDate = new Date(Date.parse(date));
    }
    const tempDate: IDate = {
      year: +currDate.toLocaleString("en-US", { year: "numeric" }),
      monthNum: +currDate.toLocaleString("en-US", { month: "numeric" }) - 1,
      month: currDate.toLocaleString("en-US", { month: "long" }),
      daysMonth:
        33 -
        new Date(
          +currDate.toLocaleString("en-US", { year: "numeric" }),
          +currDate.toLocaleString("en-US", { month: "numeric" }) - 1,
          33
        ).getDate(),
      weekDay: currDate.toLocaleString("en-US", { weekday: "short" }),
      day: +currDate.toLocaleString("en-US", { day: "numeric" }),
      hour: +currDate.toLocaleString("en-US", { hour: "numeric", hour12: false }),
      min: +currDate.toLocaleString("en-US", { minute: "numeric" }),
    };
    SetDateParse(tempDate);
    SetSelectDate(currDate);
  }

  useEffect(() => {
    makeDate();
  }, []);

  const next = {
    year: () => {
      const newDate = new Date(selectDate);
      newDate.setFullYear(dateParse.year + 1);
      makeDate(newDate.toISOString());
    },
    month: () => {
      const newDate = new Date(selectDate);
      newDate.setMonth(dateParse.monthNum + 1);
      makeDate(newDate.toISOString());
    },
    day: () => {
      const newDate = new Date(selectDate);
      newDate.setDate(dateParse.day + 1);
      makeDate(newDate.toISOString());
    },
    hour: () => {},
    minute: () => {},
  };

  const prev = {
    year: () => {
      const newDate = new Date(selectDate);
      newDate.setFullYear(dateParse.year - 1);
      makeDate(newDate.toISOString());
    },
    month: () => {
      const newDate = new Date(selectDate);
      newDate.setMonth(dateParse.monthNum - 1);
      makeDate(newDate.toISOString());
    },
    day: () => {
      const newDate = new Date(selectDate);
      newDate.setDate(dateParse.day - 1);
      makeDate(newDate.toISOString());
    },
    hour: () => {},
    minute: () => {},
  };

  const jump = {
    year: (year: number) => {
      const newDate = new Date(selectDate);
      newDate.setFullYear(dateParse.year + 1);
      makeDate(newDate.toISOString());
    },
    month: (month: number) => {
      const newDate = new Date(selectDate);
      newDate.setMonth(month);
      makeDate(newDate.toISOString());
    },
    day: (day: number) => {
      const newDate = new Date(selectDate);
      newDate.setDate(day + 1);
      makeDate(newDate.toISOString());
    },
    hour: () => {},
    minute: () => {},
  };

  return {
    makeDate,
    dateLocal,
    dateParse,
    next,
    prev,
    jump,
    selectDate,
  };
};
