import { HeaderButt, HeaderButtns, HeaderTitle, HeaderWrapper } from "./Header.component.style";

export interface IButtonHeader {
  icon: string;
  callback: Function;
}

interface IProps {
  title: string;
  buttns: IButtonHeader[];
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
