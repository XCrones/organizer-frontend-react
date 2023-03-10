import { NavLink } from "react-router-dom";
import { ROUTES } from "../../config/routes/routes";
import { GColor } from "../../style/variables.style";
import { FooterIcon, FooterNav, FooterTitle } from "./Footer.style";

const FooterComponent = () => {
  return (
    <FooterNav bgColor={GColor.footerBg}>
      <NavLink
        to={ROUTES.TODOS.PATH}
        className="flex flex-col justify-center items-center transition-all duration-300"
        style={({ isActive }) => (isActive ? { color: "#ffffff" } : { color: "#707070" })}
      >
        <FooterIcon>
          <i className="bi bi-check2-circle"></i>
        </FooterIcon>
        <FooterTitle>{ROUTES.TODOS.TITLE}</FooterTitle>
      </NavLink>

      <NavLink
        to={ROUTES.CALENDAR.PATH}
        className="flex flex-col justify-center items-center transition-all duration-300"
        style={({ isActive }) => (isActive ? { color: "#ffffff" } : { color: "#707070" })}
      >
        <FooterIcon>
          <i className="bi bi-calendar3"></i>
        </FooterIcon>
        <FooterTitle>{ROUTES.CALENDAR.TITLE}</FooterTitle>
      </NavLink>

      <NavLink
        to={ROUTES.WEATHER.PATH}
        className="flex flex-col justify-center items-center transition-all duration-300"
        style={({ isActive }) => (isActive ? { color: "#ffffff" } : { color: "#707070" })}
      >
        <FooterIcon>
          <i className="bi bi-cloud-sun-fill"></i>
        </FooterIcon>
        <FooterTitle>{ROUTES.WEATHER.TITLE}</FooterTitle>
      </NavLink>

      <NavLink
        to={ROUTES.SETTINGS.PATH}
        className="flex flex-col justify-center items-center transition-all duration-300"
        style={({ isActive }) => (isActive ? { color: "#ffffff" } : { color: "#707070" })}
      >
        <FooterIcon>
          <i className="bi bi-gear-wide-connected"></i>
        </FooterIcon>
        <FooterTitle>{ROUTES.SETTINGS.TITLE}</FooterTitle>
      </NavLink>
    </FooterNav>
  );
};

export default FooterComponent;
