import HeaderComponent, { IButtonHeader } from "../../components/header/Header";
import { CalendarWrapper } from "./Calendar.style";

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
    </CalendarWrapper>
  );
};

export default CalendarPage;
