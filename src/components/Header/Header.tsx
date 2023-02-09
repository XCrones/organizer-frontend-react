import { HeaderButt, HeaderButtns, HeaderTitle, HeaderWrapper } from "./Header.style";

interface IProps {
  title: string;
}

const HeaderComponent = ({ title }: IProps) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderButtns>
        <HeaderButt type="button" onClick={() => {}}>
          <i className="bi bi-search"></i>
        </HeaderButt>
        <HeaderButt type="button" onClick={() => {}}>
          <i className="bi bi-plus-lg"></i>
        </HeaderButt>
      </HeaderButtns>
    </HeaderWrapper>
  );
};

export default HeaderComponent;
