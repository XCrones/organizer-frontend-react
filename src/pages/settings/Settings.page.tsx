import { EmailComponent, HeaderComponent, ToggleComponent } from "../../components";
import { SettingsExit, Settingsitem, SettingsItems, SettingsWrapper } from "./Settings.style";
import { IHeaderButton } from "../../models";
import { useAuthStore } from "../../store";
import { GButtSubmit } from "../../ui";

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
        <GButtSubmit onClick={() => logOut()} type="submit" color1="#d72626" color2="#eb4d4d">
          logout
        </GButtSubmit>
      </SettingsExit>
    </SettingsWrapper>
  );
};

export default SettingsPage;
