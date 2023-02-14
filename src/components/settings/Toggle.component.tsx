import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { toggleTheme } from "../../store/slices/settings.slice";
import { GToggle } from "../../style/components/toggle.style";
import { ItemAbout, ItemIcon, ItemTitle, ToggleItem, ToggleItems, ToggleWrapper } from "./Toggle.style";

interface Props {}

const ToggleComponent = () => {
  const dispatch = useAppDispatch();
  const isNightTheme = useAppSelector((state) => state.settings.isNightTheme);

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
            isSet={isNightTheme}
            colors={{ true: "#1aff1a", false: "#ff1a1a", slider: "#fff" }}
            size={{ width: 50, height: 22 }}
            onClick={() => dispatch(toggleTheme())}
          />
        </ToggleItem>
      </ToggleItems>
    </ToggleWrapper>
  );
};

export default ToggleComponent;
