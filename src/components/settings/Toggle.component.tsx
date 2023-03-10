import { shallow } from "zustand/shallow";
import { useSettingsStore } from "../../store";
import { GToggle } from "../../ui";
import { ItemAbout, ItemIcon, ItemTitle, ToggleItem, ToggleItems, ToggleWrapper } from "./Toggle.style";

const ToggleComponent = () => {
  const settingsStore = useSettingsStore(
    (state) => ({
      isNightTheme: state.isNightTheme,
      toggleTheme: state.toggleTheme,
    }),
    shallow
  );

  return (
    <ToggleWrapper>
      <ToggleItems>
        <ToggleItem>
          <ItemAbout>
            <ItemIcon>
              <i className="bi bi-moon-stars-fill"></i>
            </ItemIcon>
            <ItemTitle>night theme</ItemTitle>
          </ItemAbout>
          <GToggle
            isSet={settingsStore.isNightTheme}
            colors={{ true: "#1aff1a", false: "#ff1a1a", slider: "#fff" }}
            size={{ width: 50, height: 22 }}
            onClick={() => settingsStore.toggleTheme()}
          />
        </ToggleItem>
      </ToggleItems>
    </ToggleWrapper>
  );
};

export default ToggleComponent;
