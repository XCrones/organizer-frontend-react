import { IHeaderButton } from "../../models";
import { HeaderButt, HeaderButtns, HeaderTitle, HeaderWrapper } from "./Header.style";

interface IProps {
  title: string;
  buttns: IHeaderButton[];
}

const HeaderComponent = ({ title, buttns }: IProps) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderButtns>
        {buttns.map((butt, idx) => (
          <HeaderButt key={idx} onClick={() => butt.callback()} type="button" className={butt.icon} />
        ))}
      </HeaderButtns>
    </HeaderWrapper>
  );
};

export default HeaderComponent;
