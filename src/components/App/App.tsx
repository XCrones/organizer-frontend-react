import CalendarComponent from "../../pages/calendar/Calendar.page";
import MainPage from "../../pages/main/Main.page";
import SettingsComponent from "../../pages/settings/Settings.page";
import TodosComponent from "../../pages/todos/Todos.page";
import WeatherComponent from "../../pages/weather/Weather.page";
import { ROUTER_LINKS } from "../../router-links";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import { Routes, Route } from "react-router-dom";

interface IProps {}

const App = () => {
  const paddingX = 20;

  return (
    <div className="min-h-screen w-full bg-main text-white  flex flex-col">
      <header style={{ paddingLeft: `${paddingX}px`, paddingRight: `${paddingX}px` }} className="">
        <HeaderComponent title="toDo" />
      </header>
      <section className="flex-auto h-full w-full">
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path={ROUTER_LINKS.todos.link} element={<TodosComponent />} />
          <Route path={ROUTER_LINKS.calendar.link} element={<CalendarComponent />} />
          <Route path={ROUTER_LINKS.wather.link} element={<WeatherComponent />} />
          <Route path={ROUTER_LINKS.settings.link} element={<SettingsComponent />} />
        </Routes>
      </section>
      <footer style={{ paddingLeft: `${paddingX}px`, paddingRight: `${paddingX}px` }} className="bg-footer">
        <FooterComponent />
      </footer>
    </div>
  );
};

export default App;
