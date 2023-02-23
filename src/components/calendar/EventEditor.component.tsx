import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDate } from "../../hooks";
import { IAxiosError, IEvent, IJoinEvent, INotifMethods } from "../../models";
import {
  GButton,
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
} from "../../style/components";
import { GColor } from "../../style/variables.style";

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
          callbackNotif.successful("edit successful");
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
          callbackNotif.successful("create new successful");
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
        callbackNotif.successful("delete successful");
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
        <GEditCancel onClick={() => callbackClose()} type="button">
          cancel
        </GEditCancel>
        <GEditWinTitle>{titleWindow}</GEditWinTitle>
        <GEditSubmit
          disabled={!isValid}
          style={{
            color: isValid ? "#ff0000" : "#c0c0c0",
            cursor: isValid ? "pointer" : "not-allowed",
          }}
          type="submit"
        >
          {titleSubmit}
        </GEditSubmit>
      </GEditHeader>
      <GEditItems>
        <GEditItem>
          <GEditName
            minLength={2}
            maxLength={30}
            {...register("eventName", {
              required: "required filed",
              minLength: 2,
              maxLength: 30,
              value: item?.title,
            })}
            placeholder={`${titleWindow} name`}
            type="text"
          />
        </GEditItem>
        <GEditItem>
          <GEditTitle>start:</GEditTitle>
          <GEditDate
            {...register("startEvent", {
              required: "required filed",
              value: !!item ? makeLocalDate(item.eventStart) : "",
            })}
            type="datetime-local"
          />
        </GEditItem>
        <GEditItem>
          <GEditTitle>end:</GEditTitle>
          <GEditDate
            {...register("endEvent", {
              required: "required filed",
              value: !!item ? makeLocalDate(item.eventEnd) : "",
            })}
            type="datetime-local"
          />
        </GEditItem>
        <GEditItem>
          <GEditDecr
            maxLength={200}
            {...register("description", {
              required: false,
              maxLength: 200,
              value: item?.description,
            })}
            rows={6}
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
            <GButton
              onClick={() => deleteItem(item?.id)}
              style={{ fontSize: "18px" }}
              color1="#871111"
              color2="#e03138"
              type="button"
            >
              delete
            </GButton>
          </GEditItem>
        )}
      </GEditItems>
    </GEditWrapper>
  );
};

export default EventEditorComponent;
