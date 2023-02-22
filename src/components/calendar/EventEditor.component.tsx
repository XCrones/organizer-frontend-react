import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PopupComponent from "../popup/Popup.component";
import {
  PopupEventName,
  PopupEventDate,
  PopupItem,
  PopupItems,
  PopupTitle,
  PopupWrapper,
  PopupDescription,
  PopupPallete,
  PopupPalleteItem,
} from "../popup/Popup.style";
import { IEvent, IJoinEvent } from "../../models/calendar.models";
import { color } from "../../style/variables.style";
import { useDate } from "../../hooks/date";
import { GButton } from "../../style/components/button.style";

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
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data: any) => {
    if (isValid) {
      if (!!item) {
        item.eventStart = data["startEvent"];
        item.eventEnd = data["endEvent"];
        item.title = data["eventName"];
        item.description = data["description"];
        item.background = currColor;
        callbackSubmit(item);
      } else {
        const metaData: IJoinEvent = {
          eventStart: data["startEvent"],
          eventEnd: data["endEvent"],
          title: data["eventName"],
          description: data["description"],
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
    <PopupWrapper onSubmit={handleSubmit(onSubmit)}>
      <PopupComponent
        titleSubmit={titleSubmit}
        isDisableSubmit={isValid}
        title={titleWindow}
        callbackCancel={callbackClose}
      />
      <PopupItems>
        <PopupItem>
          <PopupEventName
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
        </PopupItem>
        <PopupItem>
          <PopupTitle>start:</PopupTitle>
          <PopupEventDate
            {...register("startEvent", {
              required: "required filed",
              value: !!item ? makeLocalDate(item.eventStart) : "",
            })}
            type="datetime-local"
          />
        </PopupItem>
        <PopupItem>
          <PopupTitle>end:</PopupTitle>
          <PopupEventDate
            {...register("endEvent", {
              required: "required filed",
              value: !!item ? makeLocalDate(item.eventEnd) : "",
            })}
            type="datetime-local"
          />
        </PopupItem>
        <PopupItem>
          <PopupDescription
            maxLength={200}
            {...register("description", {
              required: false,
              maxLength: 200,
              value: item?.description,
            })}
            rows={6}
            placeholder={`${titleWindow} description`}
          />
        </PopupItem>
        <PopupItem>
          <PopupPallete>
            {color.pallete.map((item) => (
              <PopupPalleteItem
                key={item}
                onClick={() => SetColor(item)}
                isSelect={item === currColor}
                background={item}
              ></PopupPalleteItem>
            ))}
          </PopupPallete>
        </PopupItem>
        {isShowDelete && (
          <PopupItem>
            <GButton
              onClick={() => deleteItem(item?.id)}
              style={{ fontSize: "18px" }}
              color1="#871111"
              color2="#e03138"
              type="button"
            >
              delete
            </GButton>
          </PopupItem>
        )}
      </PopupItems>
    </PopupWrapper>
  );
};

export default CreateEventComponent;
