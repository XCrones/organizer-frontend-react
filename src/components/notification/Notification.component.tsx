import ReactDOM from "react-dom";
import { INotifMeta } from "../../models/Interfaces";
import { Notification, NotificationTitle } from "./Notification.style";

interface Props {
  meta: INotifMeta;
  isHide: boolean;
}

const NotificationComponent = ({ meta, isHide }: Props) => {
  if (isHide) {
    return null;
  }

  return ReactDOM.createPortal(
    <Notification isHide={isHide} background={meta.background}>
      {Array.isArray(meta.title) ? (
        meta.title.map((error, idx) => (
          <NotificationTitle key={idx} textAlign="left">
            {idx + 1}) {error}
          </NotificationTitle>
        ))
      ) : (
        <NotificationTitle textAlign="center">{meta.title}</NotificationTitle>
      )}
    </Notification>,
    document.body
  );
};

export default NotificationComponent;
