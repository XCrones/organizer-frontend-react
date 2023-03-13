import { NavLink } from "react-router-dom";
import { ROUTES } from "../../config/routes/routes";
import { FooterNav, NavTitle, NavItem } from "./Footer.style";

const FooterComponent = () => {
  return (
    <FooterNav>
      <NavLink to={ROUTES.TODOS.PATH}>
        {({ isActive }) => (
          <NavItem isActive={isActive}>
            <i className="bi bi-check2-circle"></i>
            <NavTitle>{ROUTES.TODOS.TITLE}</NavTitle>
          </NavItem>
        )}
      </NavLink>

      <NavLink to={ROUTES.CALENDAR.PATH}>
        {({ isActive }) => (
          <NavItem isActive={isActive}>
            <i className="bi bi-calendar3"></i>
            <NavTitle>{ROUTES.CALENDAR.TITLE}</NavTitle>
          </NavItem>
        )}
      </NavLink>

      <NavLink to={ROUTES.WEATHER.PATH}>
        {({ isActive }) => (
          <NavItem isActive={isActive}>
            <i className="bi bi-cloud-sun-fill"></i>
            <NavTitle>{ROUTES.WEATHER.TITLE}</NavTitle>
          </NavItem>
        )}
      </NavLink>

      <NavLink to={ROUTES.SETTINGS.PATH}>
        {({ isActive }) => (
          <NavItem isActive={isActive}>
            <i className="bi bi-gear-wide-connected"></i>
            <NavTitle>{ROUTES.SETTINGS.TITLE}</NavTitle>
          </NavItem>
        )}
      </NavLink>
    </FooterNav>
  );
};

export default FooterComponent;
