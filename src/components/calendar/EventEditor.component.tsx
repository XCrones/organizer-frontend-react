import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { APP_MESSAGES } from "../../common/app-messages";
import { FORM_EVENT_CONFIG } from "../../config/forms/form-config";
import { useDate } from "../../hooks";
import { IAxiosError, IEvent, IJoinEvent, INotifMethods } from "../../models";
import {
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
  GEditButt,
} from "../../ui";
import { G_VARIABLES } from "../../ui/variables";

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
  const [currColor, SetColor] = useState<string>(G_VARIABLES.pallete.editor[0]);
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
      if (data.startEvent > data.endEvent) {
        callbackNotif.error(APP_MESSAGES.EVENT_TIME_ERROR);
        return;
      }

      const metaData: IJoinEvent = {
        eventStart: new Date(Date.parse(data.startEvent)).toISOString(),
        eventEnd: new Date(Date.parse(data.endEvent)).toISOString(),
        name: data.eventName,
        description: data.description,
        background: currColor,
      };

      if (!!item) {
        Object.assign(item, metaData);
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
              value: item?.name,
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
            {G_VARIABLES.pallete.editor.map((item) => (
              <GEditPalleteItem
                key={item}
                onClick={() => SetColor(item)}
                isSelect={item === currColor}
                background={item}
              ></GEditPalleteItem>
            ))}
          </GEditPallete>
        </GEditItem>
        {isShowDelete && <GEditButt onClick={() => deleteItem(item?.id)}>delete</GEditButt>}
      </GEditItems>
    </GEditWrapper>
  );
};

export default EventEditorComponent;
