import { NavLink } from "react-router-dom";

interface IProps {}

const FooterComponent = () => {
  const COLOR_LINK_ACTIVE = "#ffffff";
  const COLOR_LINK_DEFAULT = "#707070";

  const sizeIcons = 20;
  const sizeTitle = 10.5;
  const linkItem = "flex flex-col justify-center items-center transition-all duration-300";

  return (
    <nav className="flex flex-row justify-between items-center capitalize font-inter pb-[30px] pt-[15px]">
      <NavLink
        to={"calendar"}
        className={`${linkItem}`}
        style={({ isActive }) => (isActive ? { color: COLOR_LINK_ACTIVE } : { color: COLOR_LINK_DEFAULT })}
      >
        <div style={{ fontSize: `${sizeIcons}px` }} className="">
          <i className="bi bi-calendar"></i>
        </div>
        <h3 style={{ fontSize: sizeTitle }} className="">
          calendar
        </h3>
      </NavLink>

      <NavLink
        to={"todos"}
        className={`${linkItem}`}
        style={({ isActive }) => (isActive ? { color: COLOR_LINK_ACTIVE } : { color: COLOR_LINK_DEFAULT })}
      >
        <div style={{ fontSize: `${sizeIcons}px` }} className="">
          <i className="bi bi-check2"></i>
        </div>
        <h3 style={{ fontSize: sizeTitle }} className="">
          toDo list
        </h3>
      </NavLink>

      <NavLink
        to={"weather"}
        className={`${linkItem}`}
        style={({ isActive }) => (isActive ? { color: COLOR_LINK_ACTIVE } : { color: COLOR_LINK_DEFAULT })}
      >
        <div style={{ fontSize: `${sizeIcons}px` }} className="">
          <i className="bi bi-cloud-sun-fill"></i>
        </div>
        <h3 style={{ fontSize: sizeTitle }} className="">
          weather
        </h3>
      </NavLink>

      <NavLink
        to={"settings"}
        className={`${linkItem}`}
        style={({ isActive }) => (isActive ? { color: COLOR_LINK_ACTIVE } : { color: COLOR_LINK_DEFAULT })}
      >
        <div style={{ fontSize: `${sizeIcons}px` }} className="">
          <i className="bi bi-gear-wide-connected"></i>
        </div>
        <h3 style={{ fontSize: sizeTitle }} className="">
          settings
        </h3>
      </NavLink>
    </nav>
  );
};

export default FooterComponent;
