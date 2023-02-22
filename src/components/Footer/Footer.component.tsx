import { NavLink } from "react-router-dom";
import { IRouterLinkItem, ROUTES } from "../../config/routes/routes";
import { GColor } from "../../style/variables.style";
import { FooterIcon, FooterNav, FooterTitle } from "./Footer.style";

const FooterComponent = () => {
  const links = [...(Object.values(ROUTES).map((value) => value) as IRouterLinkItem[])].filter(
    (item) => item.TITLE !== "auth"
  );

  const getIcon = (navPath: string) => {
    switch (navPath) {
      case ROUTES.CALENDAR.PATH:
        return "bi bi-calendar3";
      case ROUTES.TODOS.PATH:
        return "bi bi-check2-circle";
      case ROUTES.WEATHER.PATH:
        return "bi bi-cloud-sun-fill";
      case ROUTES.SETTINGS.PATH:
        return "bi bi-gear-wide-connected";
      default:
        return "";
    }
  };

  return (
    <FooterNav bgColor={GColor.footerBg}>
      {links.map((item) => (
        <NavLink
          key={item.PATH}
          to={item.PATH}
          className="flex flex-col justify-center items-center transition-all duration-300"
          style={({ isActive }) => (isActive ? { color: "#ffffff" } : { color: "#707070" })}
        >
          <FooterIcon>
            <i className={getIcon(item.PATH)}></i>
          </FooterIcon>
          <FooterTitle>{item.TITLE}</FooterTitle>
        </NavLink>
      ))}
    </FooterNav>
  );
};

export default FooterComponent;
