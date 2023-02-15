import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks/redux";
import { IJoinEvent } from "../../models/calendar.models";
import { joinEvent } from "../../store/slices/calendar.slice";
import {
  CreateBackground,
  CreateCancel,
  CreateDescription,
  CreateEndEvent,
  CreateHeader,
  CreateItem,
  CreateItems,
  CreateJoin,
  CreateStartEvent,
  CreateEventName,
  CreateType,
  CreateWrapper,
  CreateTitle,
} from "./Creating.style";

interface Props {
  title: string;
  callbackClose: Function;
}

const CreatingComponent = ({ title, callbackClose }: Props) => {
  const colorsBg: string[] = [
    "#0066ff",
    "#6666ff",
    "#ff33cc",
    "#ff0066",
    "#ff6600",
    "#ccff33",
    "#cc33ff",
    "#66ff33",
    "#00ff00",
    "#00ffcc",
    "#ff3300",
    "#ffcc00",
  ];

  const dispatch = useAppDispatch();

  const [currColor, SetColor] = useState(colorsBg[0]);

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
      dispatch(joinEvent(metaData));
      callbackClose();
    }
  };

  return (
    <CreateWrapper onSubmit={handleSubmit(onSubmit)}>
      <CreateHeader>
        <CreateCancel onClick={() => callbackClose()} type="button">
          cancel
        </CreateCancel>
        <CreateType>{title}</CreateType>
        <CreateJoin
          disabled={!isValid}
          style={{ color: isValid ? "#ff0000" : "#c0c0c0", cursor: isValid ? "pointer" : "not-allowed" }}
          onClick={() => {}}
          type="submit"
        >
          add
        </CreateJoin>
      </CreateHeader>
      <CreateItems>
        <CreateItem>
          <CreateEventName
            {...register("eventName", {
              required: "required filed",
              minLength: 2,
            })}
            placeholder={`${title} eventName`}
            type="text"
          />
        </CreateItem>
        <CreateItem>
          <CreateTitle>start:</CreateTitle>
          <CreateStartEvent
            {...register("startEvent", {
              required: "required filed",
            })}
            type="datetime-local"
          />
        </CreateItem>
        <CreateItem>
          <CreateTitle>end:</CreateTitle>
          <CreateEndEvent
            {...register("endEvent", {
              required: "required filed",
            })}
            type="datetime-local"
          />
        </CreateItem>
        <CreateItem>
          <CreateDescription
            maxLength={200}
            {...register("description", {
              required: false,
              maxLength: 200,
            })}
            rows={6}
          />
        </CreateItem>
        <CreateItem>
          <CreateBackground>
            {colorsBg.map((item) => (
              <div
                onClick={() => SetColor(item)}
                key={item}
                style={{ backgroundColor: item, outline: item === currColor ? "1px solid #000" : "" }}
              ></div>
            ))}
          </CreateBackground>
        </CreateItem>
      </CreateItems>
    </CreateWrapper>
  );
};

export default CreatingComponent;
