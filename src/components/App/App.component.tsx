import { shallow } from "zustand/shallow";
import { FooterComponent, RoutesComponent } from "..";
import { useWindowSize } from "../../hooks";
import { useAuthStore } from "../../store";
import { GColor } from "../../ui/variables.style";
import { Footer, Section, Wrapper } from "./App.style";
import style from "./App.module.scss";
import { APP_CONFIG } from "../../config/components/components-config";

const App = () => {
  const authStore = useAuthStore(
    (state) => ({
      isAuth: !!state.userData ? true : false,
    }),
    shallow
  );

  const HEIGHT_FOOTER = authStore.isAuth ? APP_CONFIG.height_footer : 0;
  const PADDING_BOTTOM = authStore.isAuth ? APP_CONFIG.padding_bottom : 0;

  const { memoizedHeight } = useWindowSize({ totalHeight: HEIGHT_FOOTER, totalWidth: 0 });

  return (
    <Wrapper className={style.scroll} colorBg={GColor.mainBg} height_footer={HEIGHT_FOOTER}>
      <Section maxHeight={memoizedHeight} paddingBottom={PADDING_BOTTOM}>
        <RoutesComponent />
      </Section>
      {authStore.isAuth && (
        <Footer>
          <FooterComponent />
        </Footer>
      )}
    </Wrapper>
  );
};

export default App;
