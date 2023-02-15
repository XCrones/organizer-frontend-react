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
  PopupRadioItems,
} from "../../components/popup/Popup.style";
import { useAppDispatch } from "../../hooks/redux";
import { IJoinTodo } from "../../models/todos.models";
import { GRadioItem, GRadioRaplace } from "../../style/components/radio.style";
import { color } from "../../style/variables.style";

interface Props {
  title: string;
  callbackClose: Function;
}

const CreateTodoComponent = ({ callbackClose, title }: Props) => {
  const dispatch = useAppDispatch();
  const [priority, SetPriority] = useState<0 | 1 | 2>(0);

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
      const metaData: IJoinTodo = {
        uid: 1,
        title: data["todoName"],
        category: data["category"],
        priority: priority,
        deadline: data["deadLine"],
        status: false,
        descritption: data["description"],
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
            minLength={2}
            maxLength={20}
            {...register("todoName", {
              required: "required filed",
              minLength: 2,
              maxLength: 20,
            })}
            placeholder={`${title} name`}
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
          <PopupDescription
            maxLength={100}
            {...register("description", {
              required: false,
              maxLength: 100,
            })}
            rows={2}
            placeholder={`${title} description`}
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
