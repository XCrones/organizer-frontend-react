import { IHeaderButton } from "../../models";
import { HeaderButt, HeaderButtns, HeaderTitle, Header } from "./Header.style";

interface IProps {
  title: string;
  buttns: IHeaderButton[];
}

const HeaderComponent = ({ title, buttns }: IProps) => {
  return (
    <Header>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderButtns>
        {buttns.map((butt, idx) => (
          <HeaderButt key={idx} onClick={() => butt.callback()} className={butt.icon} />
        ))}
      </HeaderButtns>
    </Header>
  );
};

export default HeaderComponent;
