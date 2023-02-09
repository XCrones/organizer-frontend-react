import CalendarComponent from "../../pages/calendar/Calendar.page";
import MainPage from "../../pages/main/Main.page";
import SettingsComponent from "../../pages/settings/Settings.page";
import TodosComponent from "../../pages/todos/Todos.page";
import WeatherComponent from "../../pages/weather/Weather.page";
import { ROUTER_LINKS } from "../../router-links";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import { Footer, Header, Section, Wrapper } from "./App.style";
import { color } from "../../style/variables.style";

const App = () => {
  const paddingX = 20;

  return (
    <Wrapper colorBg={color.mainBg}>
      <Header style={{ paddingLeft: `${paddingX}px`, paddingRight: `${paddingX}px` }}>
        <HeaderComponent title="toDo" />
      </Header>
      <Section>
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path={ROUTER_LINKS.todos.link} element={<TodosComponent />} />
          <Route path={ROUTER_LINKS.calendar.link} element={<CalendarComponent />} />
          <Route path={ROUTER_LINKS.wather.link} element={<WeatherComponent />} />
          <Route path={ROUTER_LINKS.settings.link} element={<SettingsComponent />} />
        </Routes>
      </Section>
      <Footer style={{ paddingLeft: `${paddingX}px`, paddingRight: `${paddingX}px` }} colorBg={color.footerBg}>
        <FooterComponent />
      </Footer>
    </Wrapper>
  );
};

export default App;
