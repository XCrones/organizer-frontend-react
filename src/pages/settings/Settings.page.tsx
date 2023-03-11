import { EmailComponent, HeaderComponent, ToggleComponent } from "../../components";
import { SettingsExit, Settingsitem, SettingsItems, SettingsSubmit, SettingsWrapper } from "./Settings.style";
import { IHeaderButton } from "../../models";
import { useAuthStore } from "../../store";
import { GButtSubmit } from "../../ui";
import { G_VARIABLES } from "../../ui/variables";

const SettingsPage = () => {
  const logOut = useAuthStore((state) => state.logOut);

  const buttonsHeader: IHeaderButton = {
    callback: () => {},
    icon: "",
  };

  return (
    <SettingsWrapper>
      <HeaderComponent butt={buttonsHeader} title={"settings"} />
      <SettingsItems>
        <Settingsitem>
          <EmailComponent />
        </Settingsitem>
        <Settingsitem>
          <ToggleComponent />
        </Settingsitem>
      </SettingsItems>
      <SettingsExit>
        <SettingsSubmit onClick={() => logOut()}>logout</SettingsSubmit>
      </SettingsExit>
    </SettingsWrapper>
  );
};

export default SettingsPage;
