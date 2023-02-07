import { NavLink } from "react-router-dom";
import { IRouterLinkItem, ROUTER_LINKS } from "../../router-links";

interface IProps {}

const FooterComponent = () => {
  const links = Object.values(ROUTER_LINKS).map((value) => value) as IRouterLinkItem[];

  const getIcon = (navPath: string) => {
    switch (navPath) {
      case ROUTER_LINKS.calendar.link:
        return "bi bi-calendar";
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
    <nav className="flex flex-row justify-between items-center capitalize font-inter pb-[30px] pt-[15px]">
      {links.map((item) => (
        <NavLink
          key={item.link}
          to={item.link}
          className="flex flex-col justify-center items-center transition-all duration-300"
          style={({ isActive }) => (isActive ? { color: "#ffffff" } : { color: "#707070" })}
        >
          <div style={{ fontSize: "20px" }} className="">
            <i className={getIcon(item.link)}></i>
          </div>
          <h3 style={{ fontSize: "10.5px" }} className="">
            {item.title}
          </h3>
        </NavLink>
      ))}
    </nav>
  );
};

export default FooterComponent;
