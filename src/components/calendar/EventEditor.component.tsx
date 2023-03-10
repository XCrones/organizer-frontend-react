import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { APP_MESSAGES } from "../../common/app-messages";
import { FORM_EVENT_CONFIG } from "../../config/forms/form-config";
import { useDate } from "../../hooks";
import { IAxiosError, IEvent, IJoinEvent, INotifMethods } from "../../models";
import {
  GButtSubmit,
  GEditWrapper,
  GEditHeader,
  GEditCancel,
  GEditWinTitle,
  GEditSubmit,
  GEditItems,
  GEditItem,
  GEditName,
  GEditTitle,
  GEditDate,
  GEditDecr,
  GEditPallete,
  GEditPalleteItem,
} from "../../ui";
import { GColor } from "../../ui/variables.style";

interface IFormInputs {
  startEvent: string;
  endEvent: string;
  eventName: string;
  description: string;
}
interface Props {
  titleWindow: string;
  titleSubmit: string;
  callbackClose: Function;
  callbackSubmit: Function;
  callbackDelete?: Function;
  callbackNotif: INotifMethods;
  isShowDelete: boolean;
  item?: IEvent;
}

const EventEditorComponent = ({
  callbackClose,
  titleSubmit,
  titleWindow,
  item,
  callbackSubmit,
  callbackDelete,
  isShowDelete,
  callbackNotif,
}: Props) => {
  const [currColor, SetColor] = useState(GColor.pallete[0]);
  const { makeLocalDate } = useDate();

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<IFormInputs>({
    mode: "onBlur",
  });

  const onSubmit = async (data: IFormInputs) => {
    if (isValid) {
      if (!!item) {
        item.eventStart = data.startEvent;
        item.eventEnd = data.endEvent;
        item.title = data.eventName;
        item.description = data.description;
        item.background = currColor;

        try {
          await callbackSubmit(item);
          callbackNotif.successful(APP_MESSAGES.CHANGE_SUCCES);
          callbackClose();
        } catch (error) {
          const err = error as AxiosError<IAxiosError>;
          if (!!err.response) {
            callbackNotif.error(err.response.data.message);
          }
        }
      } else {
        const metaData: IJoinEvent = {
          eventStart: data.startEvent,
          eventEnd: data.endEvent,
          title: data.eventName,
          description: data.description,
          background: currColor,
        };

        try {
          await callbackSubmit(metaData);
          callbackNotif.successful(APP_MESSAGES.CREATE_SUCCES);
          callbackClose();
        } catch (error) {
          const err = error as AxiosError<IAxiosError>;
          if (!!err.response) {
            callbackNotif.error(err.response.data.message);
          }
        }
      }
    }
  };

  const deleteItem = async (id: number | undefined) => {
    if (!!id && !!callbackDelete) {
      try {
        await callbackDelete(id);
        callbackNotif.successful(APP_MESSAGES.DELETE_SUCCES);
      } catch (error) {
        const err = error as AxiosError<IAxiosError>;
        if (!!err.response) {
          callbackNotif.error(err.response.data.message);
        }
      }
    }
    callbackClose();
  };

  useEffect(() => {
    if (!!item) {
      SetColor(item.background);
    }
  }, [item]);

  return (
    <GEditWrapper onSubmit={handleSubmit(onSubmit)}>
      <GEditHeader>
        <GEditCancel onClick={() => callbackClose()}>cancel</GEditCancel>
        <GEditWinTitle>{titleWindow}</GEditWinTitle>
        <GEditSubmit disabled={!isValid} isValid={isValid}>
          {titleSubmit}
        </GEditSubmit>
      </GEditHeader>
      <GEditItems>
        <GEditItem>
          <GEditName
            minLength={FORM_EVENT_CONFIG.name.min}
            maxLength={FORM_EVENT_CONFIG.name.max}
            {...register("eventName", {
              required: APP_MESSAGES.REQ_FIELD,
              minLength: {
                value: FORM_EVENT_CONFIG.name.min,
                message: APP_MESSAGES.MIN_CHAR(FORM_EVENT_CONFIG.name.min),
              },
              maxLength: {
                value: FORM_EVENT_CONFIG.name.max,
                message: APP_MESSAGES.MAX_CHAR(FORM_EVENT_CONFIG.name.max),
              },
              value: item?.title,
            })}
            placeholder={`${titleWindow} name`}
          />
        </GEditItem>
        <GEditItem>
          <GEditTitle>start:</GEditTitle>
          <GEditDate
            {...register("startEvent", {
              required: APP_MESSAGES.REQ_FIELD,
              value: !!item ? makeLocalDate(item.eventStart) : "",
            })}
            type="datetime-local"
          />
        </GEditItem>
        <GEditItem>
          <GEditTitle>end:</GEditTitle>
          <GEditDate
            {...register("endEvent", {
              required: APP_MESSAGES.REQ_FIELD,
              value: !!item ? makeLocalDate(item.eventEnd) : "",
            })}
            type="datetime-local"
          />
        </GEditItem>
        <GEditItem>
          <GEditDecr
            maxLength={FORM_EVENT_CONFIG.descr.max}
            {...register("description", {
              required: false,
              maxLength: {
                value: FORM_EVENT_CONFIG.descr.max,
                message: APP_MESSAGES.MAX_CHAR(FORM_EVENT_CONFIG.descr.max),
              },
              value: item?.description,
            })}
            rows={FORM_EVENT_CONFIG.descr.rows}
            placeholder={`${titleWindow} description`}
          />
        </GEditItem>
        <GEditItem>
          <GEditPallete>
            {GColor.pallete.map((item) => (
              <GEditPalleteItem
                key={item}
                onClick={() => SetColor(item)}
                isSelect={item === currColor}
                background={item}
              ></GEditPalleteItem>
            ))}
          </GEditPallete>
        </GEditItem>
        {isShowDelete && (
          <GEditItem>
            <GButtSubmit onClick={() => deleteItem(item?.id)} gradient={GColor.gradients.red} fz={18}>
              delete
            </GButtSubmit>
          </GEditItem>
        )}
      </GEditItems>
    </GEditWrapper>
  );
};

export default EventEditorComponent;
