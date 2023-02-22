import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  GEditCancel,
  GEditDate,
  GEditDecr,
  GEditHeader,
  GEditItem,
  GEditItems,
  GEditName,
  GEditPallete,
  GEditPalleteItem,
  GEditSubmit,
  GEditTitle,
  GEditWinTitle,
  GEditWrapper,
} from "../../style/components/editor.style";
import { IEvent, IJoinEvent } from "../../models/calendar.models";
import { color } from "../../style/variables.style";
import { useDate } from "../../hooks/date";
import { GButton } from "../../style/components/button.style";

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
  isShowDelete: boolean;
  item?: IEvent;
}

const CreateEventComponent = ({
  callbackClose,
  titleSubmit,
  titleWindow,
  item,
  callbackSubmit,
  callbackDelete,
  isShowDelete,
}: Props) => {
  const [currColor, SetColor] = useState(color.pallete[0]);
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
        callbackSubmit(item);
      } else {
        const metaData: IJoinEvent = {
          eventStart: data.startEvent,
          eventEnd: data.endEvent,
          title: data.eventName,
          description: data.description,
          background: currColor,
        };
        callbackSubmit(metaData);
      }
      callbackClose();
    }
  };

  const deleteItem = (id: number | undefined) => {
    if (!!id && !!callbackDelete) {
      callbackDelete(id);
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
            {color.pallete.map((item) => (
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

export default CreateEventComponent;
