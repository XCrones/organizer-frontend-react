import TodosPage from "../../pages/todos/Todos.page";
import CalendarPage from "../../pages/calendar/Calendar.page";
import SettingsPage from "../../pages/settings/Settings.page";
import WeatherPage from "../../pages/weather/Weather.page";
import AuthPage from "../../pages/auth/Auth.page";
import FooterComponent from "../footer/Footer.component";
import { Routes, Route } from "react-router-dom";
import { Footer, Section, Wrapper } from "./App.style";
import { color } from "../../style/variables.style";
import { useWindowSize } from "../../hooks/windowResize";
import style from "./App.module.scss";
import { useAuthStore } from "../../store/auth.store";
import { ROUTER_LINKS } from "../../router-links";

const App = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const HEIGHT_FOOTER = isAuth ? 50 : 0;
  const PADDING_BOTTOM = isAuth ? 40 : 0;

  const { memoizedHeight } = useWindowSize({ totalHeight: HEIGHT_FOOTER, totalWidth: 0 });

  return (
    <Wrapper className={style.scroll} colorBg={color.mainBg} height={{ footer: HEIGHT_FOOTER }}>
      <Section maxHeight={memoizedHeight} paddingBottom={PADDING_BOTTOM}>
        <Routes>
          <Route path={ROUTER_LINKS.auth.link} element={<AuthPage />} />
          <Route path={ROUTER_LINKS.todos.link} element={<TodosPage />} />
          <Route path={ROUTER_LINKS.calendar.link} element={<CalendarPage />} />
          <Route path={ROUTER_LINKS.wather.link} element={<WeatherPage />} />
          <Route path={ROUTER_LINKS.settings.link} element={<SettingsPage />} />
        </Routes>
      </Section>
      {isAuth && (
        <Footer>
          <FooterComponent />
        </Footer>
      )}
    </Wrapper>
  );
};

export default App;
