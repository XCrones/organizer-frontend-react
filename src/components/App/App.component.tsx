import { shallow } from "zustand/shallow";
import { FooterComponent, RoutesComponent } from "..";
import { useWindowSize } from "../../hooks";
import { useAuthStore, useSettingsStore } from "../../store";
import { Footer, Section, Wrapper } from "./App.style";
import { APP_CONFIG } from "../../config/components/components-config";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../ui/global.style";

const App = () => {
  const authStore = useAuthStore(
    (state) => ({
      isAuth: !!state.userData ? true : false,
    }),
    shallow
  );

  const settingsStore = useSettingsStore(
    (state) => ({
      typeTheme: state.typeTheme,
    }),
    shallow
  );

  const HEIGHT_FOOTER = authStore.isAuth ? APP_CONFIG.height_footer : 0;
  const PADDING_BOTTOM = authStore.isAuth ? APP_CONFIG.padding_bottom : 0;

  const { memoizedHeight } = useWindowSize({ totalHeight: HEIGHT_FOOTER, totalWidth: 0 });

  return (
    <ThemeProvider theme={settingsStore.typeTheme}>
      <GlobalStyle />
      <Wrapper height_footer={HEIGHT_FOOTER}>
        <Section maxHeight={memoizedHeight} paddingBottom={PADDING_BOTTOM}>
          <RoutesComponent />
        </Section>
        {authStore.isAuth && (
          <Footer>
            <FooterComponent />
          </Footer>
        )}
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
