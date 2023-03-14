import { IHeaderButton } from "../../models";
import { HeaderButt, HeaderTitle, Header } from "./Header.style";

interface IProps {
  title?: string;
  butt?: IHeaderButton;
}

const HeaderComponent = ({ title, butt }: IProps) => {
  return (
    <Header>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderButt onClick={() => (!!butt ? butt.callback() : {})}>
        <i className={!!butt ? butt.icon : ""}></i>
      </HeaderButt>
    </Header>
  );
};

export default HeaderComponent;
