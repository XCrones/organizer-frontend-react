import { title } from "process";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PopupComponent from "../../components/popup/Popup.component";
import {
  PopupWrapper,
  PopupItems,
  PopupItem,
  PopupEventName,
  PopupTitle,
  PopupEventDate,
  PopupDescription,
  PopupPallete,
} from "../../components/popup/Popup.style";
import { useAppDispatch } from "../../hooks/redux";
import { IJoinEvent } from "../../models/calendar.models";
import { color } from "../../style/variables.style";

interface Props {
  title: string;
  callbackClose: Function;
}

const CreateTodoComponent = ({ callbackClose, title }: Props) => {
  const dispatch = useAppDispatch();

  const [currColor, SetColor] = useState(color.pallete[0]);

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data: any) => {
    if (isValid) {
      const metaData: IJoinEvent = {
        uid: 1,
        eventStart: data["startEvent"],
        eventEnd: data["endEvent"],
        title: data["eventName"],
        description: data["description"],
        background: currColor,
      };
      console.log(metaData);
      // dispatch(joinEvent(metaData));
      // callbackClose();
    }
  };

  return (
    <PopupWrapper onSubmit={handleSubmit(onSubmit)}>
      <PopupComponent isDisableSubmit={isValid} title={title} callbackCancel={callbackClose} />
      <PopupItems>
        <PopupItem>
          <PopupEventName
            {...register("eventName", {
              required: "required filed",
              minLength: 2,
            })}
            placeholder={`${title} eventName`}
            type="text"
          />
        </PopupItem>
        <PopupItem>
          <PopupTitle>start:</PopupTitle>
          <PopupEventDate
            {...register("startEvent", {
              required: "required filed",
            })}
            type="datetime-local"
          />
        </PopupItem>
        <PopupItem>
          <PopupTitle>end:</PopupTitle>
          <PopupEventDate
            {...register("endEvent", {
              required: "required filed",
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
            })}
            rows={6}
          />
        </PopupItem>
        <PopupItem>
          <PopupPallete>
            {color.pallete.map((item) => (
              <div
                onClick={() => SetColor(item)}
                key={item}
                style={{ backgroundColor: item, outline: item === currColor ? "1px solid #000" : "" }}
              ></div>
            ))}
          </PopupPallete>
        </PopupItem>
      </PopupItems>
    </PopupWrapper>
  );
};

export default CreateTodoComponent;
