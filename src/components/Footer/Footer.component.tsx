import { NavLink } from "react-router-dom";
import { IRouterLinkItem, ROUTER_LINKS } from "../../router-links";
import { color } from "../../style/variables.style";
import { FooterIcon, FooterNav, FooterTitle } from "./Footer.style";

const FooterComponent = () => {
  const links = [...(Object.values(ROUTER_LINKS).map((value) => value) as IRouterLinkItem[])].filter(
    (item) => item.title !== "auth"
  );

  const getIcon = (navPath: string) => {
    switch (navPath) {
      case ROUTER_LINKS.calendar.link:
        return "bi bi-calendar3";
      case ROUTER_LINKS.todos.link:
        return "bi bi-check2-circle";
      case ROUTER_LINKS.wather.link:
        return "bi bi-cloud-sun-fill";
      case ROUTER_LINKS.settings.link:
        return "bi bi-gear-wide-connected";
      default:
        return "";
    }
  };

  return (
    <FooterNav bgColor={color.footerBg}>
      {links.map((item) => (
        <NavLink
          key={item.link}
          to={item.link}
          className="flex flex-col justify-center items-center transition-all duration-300"
          style={({ isActive }) => (isActive ? { color: "#ffffff" } : { color: "#707070" })}
        >
          <FooterIcon>
            <i className={getIcon(item.link)}></i>
          </FooterIcon>
          <FooterTitle>{item.title}</FooterTitle>
        </NavLink>
      ))}
    </FooterNav>
  );
};

export default FooterComponent;
