import HeaderComponent, { IButtonHeader } from "../../components/header/Header";
import { SettingsWrapper } from "./Settings.style";

interface Props {}

const SettingsPage = () => {
  const callbackPlus = () => {};
  const callbackSearch = () => {};
  const buttonsHeader: IButtonHeader[] = [
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
    <SettingsWrapper>
      <HeaderComponent buttns={buttonsHeader} title={"settings"} />
    </SettingsWrapper>
  );
};

export default SettingsPage;
