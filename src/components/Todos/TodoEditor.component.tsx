import {
  GEditCancel,
  GEditDate,
  GEditHeader,
  GEditItem,
  GEditItems,
  GEditName,
  GEditPallete,
  GEditPalleteItem,
  GEditRadioItems,
  GEditSubmit,
  GEditTitle,
  GEditWinTitle,
  GEditWrapper,
  GRadioItem,
  GRadioRaplace,
  GButton,
} from "../../style/components";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { GColor } from "../../style/variables.style";
import { useForm } from "react-hook-form";
import { useDate } from "../../hooks";
import { ITodo, ITodoJoin } from "../../models";

interface Props {
  titleWindow: string;
  titleSubmit: string;
  callbackClose: Function;
  callbackSubmit: Function;
  callbackDelete?: Function;
  item?: ITodo;
  isShowDelete: boolean;
}

interface IFormInputs {
  todoName: string;
  category: string;
  deadLine: string;
}

const TodoEditorComponent = ({
  callbackClose,
  titleWindow,
  titleSubmit,
  item,
  callbackSubmit,
  isShowDelete,
  callbackDelete,
}: Props) => {
  const [priority, SetPriority] = useState<number>(0);
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
        const editItem = JSON.parse(JSON.stringify(item)) as ITodo;
        editItem.title = data.todoName;
        editItem.background = currColor;
        editItem.category = data.category;
        editItem.priority = priority;
        editItem.deadline = data.deadLine;
        callbackSubmit(editItem);
      } else {
        const metaData: ITodoJoin = {
          title: data.todoName,
          category: data.category,
          priority: priority,
          deadline: data.deadLine,
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

  return ReactDOM.createPortal(
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
        </GEditItem>
        <GEditItem>
          <GEditName
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
        </GEditItem>
        <GEditItem>
          <GEditTitle>deadline:</GEditTitle>
          <GEditDate
            {...register("deadLine", {
              required: "required filed",
              value: !!item ? makeLocalDate(item.deadline) : "",
            })}
            type="datetime-local"
          />
        </GEditItem>
        <GEditItem>
          <GEditTitle>priority:</GEditTitle>
          <GEditRadioItems>
            <GRadioItem size={30}>
              <input onClick={() => SetPriority(0)} name="priority" type="radio" />
              <GRadioRaplace colorSelect={GColor.priority.hight} rounded={50} isSelect={priority === 0} />
            </GRadioItem>

            <GRadioItem size={30}>
              <input onClick={() => SetPriority(1)} name="priority" type="radio" />
              <GRadioRaplace colorSelect={GColor.priority.medium} rounded={50} isSelect={priority === 1} />
            </GRadioItem>

            <GRadioItem size={30}>
              <input onClick={() => SetPriority(2)} name="priority" type="radio" />
              <GRadioRaplace colorSelect={GColor.priority.low} rounded={50} isSelect={priority === 2} />
            </GRadioItem>
          </GEditRadioItems>
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
    </GEditWrapper>,
    document.body
  );
};

export default TodoEditorComponent;
