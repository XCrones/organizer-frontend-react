import { HeaderComponent, OptionsComponent, UserComponent } from "../../components";
import { SettingsItems, SettingsSubmit, SettingsWrapper } from "./Settings.style";
import { useAuthStore } from "../../store";
import { shallow } from "zustand/shallow";

const SettingsPage = () => {
  const authStore = useAuthStore(
    (state) => ({
      logOut: state.logOut,
    }),
    shallow
  );

  return (
    <SettingsWrapper>
      <HeaderComponent title={"settings"} />
      <SettingsItems>
        <UserComponent />
        <OptionsComponent />
        <SettingsSubmit onClick={() => authStore.logOut()}>logout</SettingsSubmit>
      </SettingsItems>
    </SettingsWrapper>
  );
};

export default SettingsPage;
