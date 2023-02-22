import { FooterComponent, RoutesComponent } from "..";
import { useWindowSize } from "../../hooks";
import { useAuthStore } from "../../store";
import { GColor } from "../../style/variables.style";
import style from "./App.module.scss";
import { Footer, Section, Wrapper } from "./App.style";

const App = () => {
  const isAuth = useAuthStore((state) => state.userData);
  const HEIGHT_FOOTER = !!isAuth ? 50 : 0;
  const PADDING_BOTTOM = !!isAuth ? 40 : 0;

  const { memoizedHeight } = useWindowSize({ totalHeight: HEIGHT_FOOTER, totalWidth: 0 });

  return (
    <Wrapper className={style.scroll} colorBg={GColor.mainBg} height={{ footer: HEIGHT_FOOTER }}>
      <Section maxHeight={memoizedHeight} paddingBottom={PADDING_BOTTOM}>
        <RoutesComponent />
      </Section>
      {!!isAuth && (
        <Footer>
          <FooterComponent />
        </Footer>
      )}
    </Wrapper>
  );
};

export default App;
