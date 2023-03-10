import { EmailComponent, HeaderComponent, ToggleComponent } from "../../components";
import { SettingsExit, Settingsitem, SettingsItems, SettingsWrapper } from "./Settings.style";
import { IHeaderButton } from "../../models";
import { useAuthStore } from "../../store";
import { GButtSubmit } from "../../ui";
import { G_COLOR, G_INDENTS } from "../../ui/variables.style";

const SettingsPage = () => {
  const logOut = useAuthStore((state) => state.logOut);

  const buttonsHeader: IHeaderButton = {
    callback: () => {},
    icon: "",
  };

  return (
    <SettingsWrapper>
      <HeaderComponent butt={buttonsHeader} title={"settings"} />
      <SettingsItems pl={G_INDENTS.left} pr={G_INDENTS.right}>
        <Settingsitem>
          <EmailComponent />
        </Settingsitem>
        <Settingsitem>
          <ToggleComponent />
        </Settingsitem>
      </SettingsItems>
      <SettingsExit pl={G_INDENTS.left} pr={G_INDENTS.right}>
        <GButtSubmit onClick={() => logOut()} gradient={G_COLOR.gradients.blue}>
          logout
        </GButtSubmit>
      </SettingsExit>
    </SettingsWrapper>
  );
};

export default SettingsPage;
