import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AuthPage from "../../pages/auth/Auth.page";
import CalendarPage from "../../pages/calendar/Calendar.page";
import SettingsPage from "../../pages/settings/Settings.page";
import TodosPage from "../../pages/todos/Todos.page";
import WeatherPage from "../../pages/weather/Weather.page";
import { ROUTER_LINKS } from "../../router-links";
import { useAuthStore } from "../../store/auth.store";

const RoutesComponent = () => {
  const isAuth = useAuthStore().userData;
  const location = useLocation();

  const GuardRoute = ({ children }: { children: JSX.Element }) => {
    if (!isAuth) {
      return <Navigate to={ROUTER_LINKS.auth.path} state={{ from: location }} replace />;
    }
    return children;
  };

  return (
    <Routes>
      <Route path={ROUTER_LINKS.auth.path} element={<AuthPage />} />
      <Route
        path={ROUTER_LINKS.todos.path}
        element={
          <GuardRoute>
            <TodosPage />
          </GuardRoute>
        }
      />
      <Route
        path={ROUTER_LINKS.calendar.path}
        element={
          <GuardRoute>
            <CalendarPage />
          </GuardRoute>
        }
      />
      <Route
        path={ROUTER_LINKS.wather.path}
        element={
          <GuardRoute>
            <WeatherPage />
          </GuardRoute>
        }
      />
      <Route
        path={ROUTER_LINKS.settings.path}
        element={
          <GuardRoute>
            <SettingsPage />
          </GuardRoute>
        }
      />
    </Routes>
  );
};

export default RoutesComponent;
