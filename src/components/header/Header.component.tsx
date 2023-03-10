import { IHeaderButton } from "../../models";
import { HeaderButt, HeaderButtns, HeaderTitle, Header } from "./Header.style";

interface IProps {
  title: string;
  butt: IHeaderButton;
}

const HeaderComponent = ({ title, butt }: IProps) => {
  return (
    <Header>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderButt onClick={() => butt.callback()} className={butt.icon} />
    </Header>
  );
};

export default HeaderComponent;
