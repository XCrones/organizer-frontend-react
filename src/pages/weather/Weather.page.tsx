import { HeaderComponent } from "../../components";
import { IHeaderButton } from "../../models";
import { WeatherWrapper } from "./Weather.style";

interface Props {}

const WeatherPage = () => {
  const callbackPlus = () => {};
  const callbackSearch = () => {};
  const buttonsHeader: IHeaderButton[] = [
    {
      callback: callbackPlus,
      icon: "bi bi-search",
    },
    {
      callback: callbackSearch,
      icon: "bi bi-plus-lg",
    },
  ];

  return (
    <WeatherWrapper>
      <HeaderComponent buttns={buttonsHeader} title={"weather"} />
    </WeatherWrapper>
  );
};

export default WeatherPage;
