import { PopupCancel, PopupHeader, PopupSubmit, PopupEventTitle } from "./Popup.style";

interface Props {
  title: string;
  callbackCancel: Function;
  isDisableSubmit: boolean;
  titleSubmit: string;
}

const PopupComponent = ({ title, callbackCancel, isDisableSubmit, titleSubmit }: Props) => {
  return (
    <PopupHeader>
      <PopupCancel onClick={() => callbackCancel()} type="button">
        cancel
      </PopupCancel>
      <PopupEventTitle>{title}</PopupEventTitle>
      <PopupSubmit
        disabled={!isDisableSubmit}
        style={{
          color: isDisableSubmit ? "#ff0000" : "#c0c0c0",
          cursor: isDisableSubmit ? "pointer" : "not-allowed",
        }}
        type="submit"
      >
        {titleSubmit}
      </PopupSubmit>
    </PopupHeader>
  );
};

export default PopupComponent;
