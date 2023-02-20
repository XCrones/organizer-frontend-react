import HeaderComponent, { IButtonHeader } from "../../components/header/Header";
import EmailComponent from "../../components/settings/Email.component";
import ToggleComponent from "../../components/settings/Toggle.component";
import { useAuthStore } from "../../store/auth.store";
import { GButton } from "../../style/components/button.style";
import { SettingsExit, Settingsitem, SettingsItems, SettingsWrapper } from "./Settings.style";

const SettingsPage = () => {
  const logOut = useAuthStore((state) => state.logOut);

  const buttonsHeader: IButtonHeader[] = [
    {
      callback: () => {},
      icon: "",
    },
    {
      callback: () => {},
      icon: "",
    },
  ];

  return (
    <SettingsWrapper>
      <HeaderComponent buttns={buttonsHeader} title={"settings"} />
      <SettingsItems>
        <Settingsitem>
          <EmailComponent />
        </Settingsitem>
        <Settingsitem>
          <ToggleComponent />
        </Settingsitem>
      </SettingsItems>
      <SettingsExit>
        <GButton onClick={() => logOut()} type="submit" color1="#d72626" color2="#eb4d4d">
          logout
        </GButton>
      </SettingsExit>
    </SettingsWrapper>
  );
};

export default SettingsPage;
