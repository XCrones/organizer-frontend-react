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
import { IJoinTodo } from "../../models/todos.models";
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
      const metaData: IJoinTodo = {
        uid: 1,
        title: data["todoName"],
        category: "",
        priority: 0,
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
            {...register("todoName", {
              required: "required filed",
              minLength: 2,
            })}
            placeholder={`${title} name`}
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
          <PopupDescription
            maxLength={200}
            {...register("description", {
              required: false,
              maxLength: 200,
            })}
            rows={6}
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
