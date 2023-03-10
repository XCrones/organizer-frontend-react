import { useState } from "react";
import { INotifMeta, INotifMethods } from "../models";

export const useNotif = () => {
  const [isHide, SetHide] = useState(true);
  const [meta, SetMeta] = useState<INotifMeta>({
    background: "",
    title: "",
  });

  const show: INotifMethods = {
    default: (meta: INotifMeta, timeout?: number) => {
      SetMeta(meta);
      SetHide(false);
      setTimeout(() => {
        SetHide(true);
      }, Math.max(1000, !!timeout ? timeout : 0));
    },
    successful: (title: string, timeout?: number) => {
      SetMeta({
        background: "#33ac83",
        title,
      });
      SetHide(false);
      setTimeout(() => {
        SetHide(true);
      }, Math.max(2000, !!timeout ? timeout : 0));
    },
    error: (title: string | string[], timeout?: number) => {
      SetMeta({
        background: "#a01818",
        title,
      });
      SetHide(false);
      setTimeout(() => {
        SetHide(true);
      }, Math.max(3000, !!timeout ? timeout : 0));
    },
    warn: (title: string | string[], timeout?: number) => {
      SetMeta({
        background: "#FFFF00",
        title,
      });
      SetHide(false);
      setTimeout(() => {
        SetHide(true);
      }, Math.max(3000, !!timeout ? timeout : 0));
    },
  };

  const close = () => {
    SetHide(true);
  };

  return {
    metaNotif: meta,
    isHideNotif: isHide,
    showNotif: show,
    closeNotif: close,
  };
};
