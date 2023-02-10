import DaysComponent from "../../components/calendar/Days.component";
import TimesComponent from "../../components/calendar/Times.component";
import HeaderComponent, { IButtonHeader } from "../../components/header/Header";
import { CalendarItems, CalendarWrapper } from "./Calendar.style";

interface Props {}

const CalendarPage = () => {
  const callbackPlus = () => {};
  const callbackSearch = () => {};
  const buttonsHeader: IButtonHeader[] = [
    {
      callback: callbackPlus,
      icon: "bi bi-search",
    },
    {
      callback: callbackSearch,
      icon: "bi bi-plus-lg",
    },
  ];

  return (
    <CalendarWrapper>
      <HeaderComponent buttns={buttonsHeader} title={"calender"} />
      <CalendarItems>
        <DaysComponent />
        <TimesComponent />
      </CalendarItems>
    </CalendarWrapper>
  );
};

export default CalendarPage;
