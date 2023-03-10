import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "../../config/routes/routes";
import { AuthPage, CalendarPage, SettingsPage, TodosPage, WeatherPage } from "../../pages";
import { useAuthStore } from "../../store";

const RoutesComponent = () => {
  const isAuth = useAuthStore().userData;
  const location = useLocation();

  const GuardRoute = ({ children }: { children: JSX.Element }) => {
    if (!isAuth) {
      return <Navigate to={ROUTES.AUTH.PATH} state={{ from: location }} replace />;
    }
    return children;
  };

  return (
    <Routes>
      <Route
        path={ROUTES.HOME.PATH}
        element={
          <GuardRoute>
            <TodosPage />
          </GuardRoute>
        }
      />
      <Route path={ROUTES.AUTH.PATH} element={<AuthPage />} />
      <Route
        path={ROUTES.TODOS.PATH}
        element={
          <GuardRoute>
            <TodosPage />
          </GuardRoute>
        }
      />
      <Route
        path={ROUTES.CALENDAR.PATH}
        element={
          <GuardRoute>
            <CalendarPage />
          </GuardRoute>
        }
      />
      <Route
        path={ROUTES.WEATHER.PATH}
        element={
          <GuardRoute>
            <WeatherPage />
          </GuardRoute>
        }
      />
      <Route
        path={ROUTES.SETTINGS.PATH}
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
