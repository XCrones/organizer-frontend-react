import { EmailComponent, HeaderComponent, ToggleComponent } from "../../components";
import { SettingsExit, Settingsitem, SettingsItems, SettingsWrapper } from "./Settings.style";
import { IHeaderButton } from "../../models";
import { useAuthStore } from "../../store";
import { GButtSubmit } from "../../ui";
import { GColor } from "../../ui/variables.style";

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
        <GButtSubmit onClick={() => logOut()} gradient={GColor.gradients.blue}>
          logout
        </GButtSubmit>
      </SettingsExit>
    </SettingsWrapper>
  );
};

export default SettingsPage;
