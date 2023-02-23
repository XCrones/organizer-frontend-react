import ReactDOM from "react-dom";
import { INotifMeta } from "../../models";
import { Notification, NotificationTitle } from "./Notification.style";

interface Props {
  meta: INotifMeta;
  isHide: boolean;
}

const NotificationComponent = ({ meta, isHide }: Props) => {
  if (isHide) return null;
  return ReactDOM.createPortal(
    <Notification isHide={isHide} background={meta.background}>
      {Array.isArray(meta.title) ? (
        meta.title.map((error, idx) => (
          <NotificationTitle key={idx} style={{ textAlign: "left", fontSize: "16px" }}>
            {idx + 1}) {error}
          </NotificationTitle>
        ))
      ) : (
        <NotificationTitle style={{ textAlign: "center", fontSize: "16px" }}>{meta.title}</NotificationTitle>
      )}
    </Notification>,
    document.body
  );
};

export default NotificationComponent;
