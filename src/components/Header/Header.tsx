import style from "./Header.module.scss";

interface IProps {
  title: string;
}

const HeaderComponent = ({ title }: IProps) => {
  return (
    <div className="flex flex-row justify-between items-center pt-[38px] pb-[23px]">
      <div className="capitalize text-[27px] font-inter font-bold">{title}</div>
      <div className="flex flex-row gap-x-[15px]">
        <button onClick={() => {}} type="button" className="text-2xl">
          <i className="bi bi-search"></i>
        </button>
        <button onClick={() => {}} type="button" className="text-2xl">
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default HeaderComponent;
