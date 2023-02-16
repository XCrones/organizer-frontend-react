import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PopupComponent from "../popup/Popup.component";
import {
  PopupWrapper,
  PopupItems,
  PopupItem,
  PopupEventName,
  PopupTitle,
  PopupEventDate,
  PopupPallete,
  PopupRadioItems,
  PopupPalleteItem,
} from "../popup/Popup.style";
import { useAppDispatch } from "../../hooks/redux";
import { IJoinTodo, ITodo } from "../../models/todos.models";
import { GRadioItem, GRadioRaplace } from "../../style/components/radio.style";
import { color } from "../../style/variables.style";

interface Props {
  titleWindow: string;
  titleSubmit: string;
  callbackClose: Function;
  callbackSubmit: Function;
  item?: ITodo;
}

const CreateTodoComponent = ({ callbackClose, titleWindow, titleSubmit, item, callbackSubmit }: Props) => {
  const dispatch = useAppDispatch();

  const [priority, SetPriority] = useState<number>(0);
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
      if (!!item) {
        item.title = data["todoName"];
        item.background = currColor;
        item.category = data["category"];
        item.priority = priority;
        item.deadline = data["deadLine"];
        dispatch(callbackSubmit(item));
      } else {
        const metaData: IJoinTodo = {
          uid: 1,
          title: data["todoName"],
          category: data["category"],
          priority: priority,
          deadline: data["deadLine"],
          status: false,
          background: currColor,
        };
        dispatch(callbackSubmit(metaData));
      }
      callbackClose();
    }
  };

  useEffect(() => {
    if (!!item) {
      SetPriority(item.priority);
      SetColor(item.background);
    }
  }, [item]);

  const makeDate = (date: string | undefined) => {
    try {
      if (!!date) {
        const fullParseDate = new Date(Date.parse(date)).toLocaleString();
        const parseDate = fullParseDate.split(",")[0];
        const parseTime = fullParseDate.split(",")[1];
        return `${parseDate.split(".").reverse().join("-")}T${parseTime.trim()}`;
      }
      return "";
    } catch (err) {
      return "";
    }
  };

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
            maxLength={20}
            {...register("todoName", {
              required: "required filed",
              minLength: 2,
              maxLength: 20,
              value: item?.title,
            })}
            placeholder={`${titleWindow} name`}
            type="text"
          />
        </PopupItem>
        <PopupItem>
          <PopupEventName
            minLength={2}
            maxLength={20}
            {...register("category", {
              required: "required filed",
              minLength: 2,
              maxLength: 20,
              value: item?.category,
            })}
            placeholder={"category"}
            type="text"
          />
        </PopupItem>
        <PopupItem>
          <PopupTitle>deadline:</PopupTitle>
          <PopupEventDate
            {...register("deadLine", {
              required: "required filed",
              value: !!item ? makeDate(item.deadline) : "",
            })}
            type="datetime-local"
          />
        </PopupItem>
        <PopupItem>
          <PopupTitle>priority:</PopupTitle>
          <PopupRadioItems>
            <GRadioItem size={30}>
              <input onClick={() => SetPriority(0)} name="priority" type="radio" />
              <GRadioRaplace colorSelect={color.priority.hight} rounded={50} isSelect={priority === 0} />
            </GRadioItem>

            <GRadioItem size={30}>
              <input onClick={() => SetPriority(1)} name="priority" type="radio" />
              <GRadioRaplace colorSelect={color.priority.medium} rounded={50} isSelect={priority === 1} />
            </GRadioItem>

            <GRadioItem size={30}>
              <input onClick={() => SetPriority(2)} name="priority" type="radio" />
              <GRadioRaplace colorSelect={color.priority.low} rounded={50} isSelect={priority === 2} />
            </GRadioItem>
          </PopupRadioItems>
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
      </PopupItems>
    </PopupWrapper>
  );
};

export default CreateTodoComponent;
