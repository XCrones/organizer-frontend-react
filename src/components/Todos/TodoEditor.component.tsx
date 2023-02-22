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
import { ITodoJoin, ITodo } from "../../models/todos.models";
import { GRadioItem, GRadioRaplace } from "../../style/components/radio.style";
import { color } from "../../style/variables.style";
import { useDate } from "../../hooks/date";
import { GButton } from "../../style/components/button.style";

interface Props {
  titleWindow: string;
  titleSubmit: string;
  callbackClose: Function;
  callbackSubmit: Function;
  callbackDelete?: Function;
  item?: ITodo;
  isShowDelete: boolean;
}

const CreateTodoComponent = ({
  callbackClose,
  titleWindow,
  titleSubmit,
  item,
  callbackSubmit,
  isShowDelete,
  callbackDelete,
}: Props) => {
  const [priority, SetPriority] = useState<number>(0);
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
        item.title = data["todoName"];
        item.background = currColor;
        item.category = data["category"];
        item.priority = priority;
        item.deadline = data["deadLine"];
        callbackSubmit(item);
      } else {
        const metaData: ITodoJoin = {
          title: data["todoName"],
          category: data["category"],
          priority: priority,
          deadline: data["deadLine"],
          status: false,
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
      SetPriority(item.priority);
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
              value: !!item ? makeLocalDate(item.deadline) : "",
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

export default CreateTodoComponent;
