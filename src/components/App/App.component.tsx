import FooterComponent from "../footer/Footer.component";
import { Footer, Section, Wrapper } from "./App.style";
import { color } from "../../style/variables.style";
import { useWindowSize } from "../../hooks/windowResize";
import { useAuthStore } from "../../store/auth.store";
import style from "./App.module.scss";
import RoutesComponent from "../routes/Routes.component";

const App = () => {
  const isAuth = useAuthStore((state) => state.userData);
  const HEIGHT_FOOTER = !!isAuth ? 50 : 0;
  const PADDING_BOTTOM = !!isAuth ? 40 : 0;

  const { memoizedHeight } = useWindowSize({ totalHeight: HEIGHT_FOOTER, totalWidth: 0 });

  return (
    <Wrapper className={style.scroll} colorBg={color.mainBg} height={{ footer: HEIGHT_FOOTER }}>
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
