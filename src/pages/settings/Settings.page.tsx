import { EmailComponent, HeaderComponent, ToggleComponent } from "../../components";
import { SettingsExit, Settingsitem, SettingsItems, SettingsWrapper } from "./Settings.style";
import { IHeaderButton } from "../../models";
import { useAuthStore } from "../../store";
import { GButton } from "../../ui";

const SettingsPage = () => {
  const logOut = useAuthStore((state) => state.logOut);

  const buttonsHeader: IHeaderButton[] = [
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
