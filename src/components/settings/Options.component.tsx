import { shallow } from "zustand/shallow";
import { useSettingsStore } from "../../store";
import { GToggle } from "../../ui";
import { ItemAbout, ItemIcon, ItemTitle, OptionsItem, OptionsItems } from "./Options.style";

const OptionsComponent = () => {
  const settingsStore = useSettingsStore(
    (state) => ({
      isDarkTheme: state.isDarkTheme,
      toggleTheme: state.toggleTheme,
    }),
    shallow
  );

  return (
    <OptionsItems>
      <OptionsItem>
        <ItemAbout>
          <ItemIcon isDarkTheme={settingsStore.isDarkTheme}>
            <i className="bi bi-moon-stars-fill"></i>
          </ItemIcon>
          <ItemTitle>night theme</ItemTitle>
        </ItemAbout>
        <GToggle isSet={settingsStore.isDarkTheme} height={22} width={50} onClick={() => settingsStore.toggleTheme()} />
      </OptionsItem>
    </OptionsItems>
  );
};

export default OptionsComponent;
