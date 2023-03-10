import { NavLink } from "react-router-dom";
import { ROUTES } from "../../config/routes/routes";
import { GColor } from "../../style/variables.style";
import { NavIcon, FooterNav, NavTitle } from "./Footer.style";

const FooterComponent = () => {
  return (
    <FooterNav bgColor={GColor.footerBg}>
      <NavLink
        to={ROUTES.TODOS.PATH}
        className="flex flex-col justify-center items-center transition-all duration-300"
        style={({ isActive }) => (isActive ? { color: "#ffffff" } : { color: "#707070" })}
      >
        <NavIcon>
          <i className="bi bi-check2-circle"></i>
        </NavIcon>
        <NavTitle>{ROUTES.TODOS.TITLE}</NavTitle>
      </NavLink>

      <NavLink
        to={ROUTES.CALENDAR.PATH}
        className="flex flex-col justify-center items-center transition-all duration-300"
        style={({ isActive }) => (isActive ? { color: "#ffffff" } : { color: "#707070" })}
      >
        <NavIcon>
          <i className="bi bi-calendar3"></i>
        </NavIcon>
        <NavTitle>{ROUTES.CALENDAR.TITLE}</NavTitle>
      </NavLink>

      <NavLink
        to={ROUTES.WEATHER.PATH}
        className="flex flex-col justify-center items-center transition-all duration-300"
        style={({ isActive }) => (isActive ? { color: "#ffffff" } : { color: "#707070" })}
      >
        <NavIcon>
          <i className="bi bi-cloud-sun-fill"></i>
        </NavIcon>
        <NavTitle>{ROUTES.WEATHER.TITLE}</NavTitle>
      </NavLink>

      <NavLink
        to={ROUTES.SETTINGS.PATH}
        className="flex flex-col justify-center items-center transition-all duration-300"
        style={({ isActive }) => (isActive ? { color: "#ffffff" } : { color: "#707070" })}
      >
        <NavIcon>
          <i className="bi bi-gear-wide-connected"></i>
        </NavIcon>
        <NavTitle>{ROUTES.SETTINGS.TITLE}</NavTitle>
      </NavLink>
    </FooterNav>
  );
};

export default FooterComponent;
