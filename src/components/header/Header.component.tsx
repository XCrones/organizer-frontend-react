import { IHeaderButton } from "../../models";
import { HeaderButt, HeaderTitle, Header } from "./Header.style";

interface IProps {
  title: string;
  butt: IHeaderButton;
}

const HeaderComponent = ({ title, butt }: IProps) => {
  return (
    <Header>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderButt onClick={() => butt.callback()}>
        <i className={butt.icon}></i>
      </HeaderButt>
    </Header>
  );
};

export default HeaderComponent;
