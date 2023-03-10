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
  GButtSubmit,
} from "../../ui";
import { useEffect, useState } from "react";
import { GColor } from "../../ui/variables.style";
import { useForm } from "react-hook-form";
import { useDate } from "../../hooks";
import { IAxiosError, INotifMethods, ITodo, ITodoJoin } from "../../models";
import { AxiosError } from "axios";
import { APP_MESSAGES } from "../../common/app-messages";
import { TODO_CONFIG } from "../../common/form-config";

interface Props {
  titleWindow: string;
  titleSubmit: string;
  callbackClose: Function;
  callbackSubmit: Function;
  callbackDelete?: Function;
  callbackNotif: INotifMethods;
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
  callbackNotif,
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
        try {
          await callbackSubmit(editItem);
          callbackNotif.successful(APP_MESSAGES.CHANGE_SUCCES);
          callbackClose();
        } catch (error) {
          const err = error as AxiosError<IAxiosError>;
          if (!!err.response) {
            callbackNotif.error(err.response.data.message);
          }
        }
      } else {
        const metaData: ITodoJoin = {
          title: data.todoName,
          category: data.category,
          priority: priority,
          deadline: data.deadLine,
          status: false,
          background: currColor,
        };
        try {
          await callbackSubmit(metaData);
          callbackNotif.successful(APP_MESSAGES.CREATE_SUCCES);
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
        callbackNotif.successful(APP_MESSAGES.DELETE_SUCCES);
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
      SetPriority(item.priority);
      SetColor(item.background);
    }
  }, [item]);

  return (
    <GEditWrapper onSubmit={handleSubmit(onSubmit)}>
      <GEditHeader>
        <GEditCancel onClick={() => callbackClose()}>cancel</GEditCancel>
        <GEditWinTitle>{titleWindow}</GEditWinTitle>
        <GEditSubmit disabled={!isValid} isValid={isValid}>
          {titleSubmit}
        </GEditSubmit>
      </GEditHeader>
      <GEditItems>
        <GEditItem>
          <GEditName
            minLength={TODO_CONFIG.name.min}
            maxLength={TODO_CONFIG.name.max}
            {...register("todoName", {
              required: APP_MESSAGES.REQ_FIELD,
              minLength: {
                value: TODO_CONFIG.name.min,
                message: APP_MESSAGES.MIN_CHAR(TODO_CONFIG.name.min),
              },
              maxLength: {
                value: TODO_CONFIG.name.max,
                message: APP_MESSAGES.MAX_CHAR(TODO_CONFIG.name.max),
              },
              value: item?.title,
            })}
            placeholder={`${titleWindow} name`}
            type="text"
          />
        </GEditItem>
        <GEditItem>
          <GEditName
            minLength={TODO_CONFIG.category.min}
            maxLength={TODO_CONFIG.category.max}
            {...register("category", {
              required: APP_MESSAGES.REQ_FIELD,
              minLength: {
                value: TODO_CONFIG.category.min,
                message: APP_MESSAGES.MIN_CHAR(TODO_CONFIG.category.min),
              },
              maxLength: {
                value: TODO_CONFIG.category.max,
                message: APP_MESSAGES.MAX_CHAR(TODO_CONFIG.category.max),
              },
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
              required: APP_MESSAGES.REQ_FIELD,
              value: !!item ? makeLocalDate(item.deadline) : "",
            })}
            type="datetime-local"
          />
        </GEditItem>
        <GEditItem>
          <GEditTitle>priority:</GEditTitle>
          <GEditRadioItems>
            <GRadioItem size={TODO_CONFIG.priority.size}>
              <input onClick={() => SetPriority(TODO_CONFIG.priority.levels.hight)} name="priority" type="radio" />
              <GRadioRaplace
                colorSelect={GColor.priority.hight}
                rounded={TODO_CONFIG.priority.rounded}
                isSelect={priority === TODO_CONFIG.priority.levels.hight}
              />
            </GRadioItem>

            <GRadioItem size={TODO_CONFIG.priority.size}>
              <input onClick={() => SetPriority(TODO_CONFIG.priority.levels.medium)} name="priority" type="radio" />
              <GRadioRaplace
                colorSelect={GColor.priority.medium}
                rounded={TODO_CONFIG.priority.rounded}
                isSelect={priority === TODO_CONFIG.priority.levels.medium}
              />
            </GRadioItem>

            <GRadioItem size={TODO_CONFIG.priority.size}>
              <input onClick={() => SetPriority(TODO_CONFIG.priority.levels.low)} name="priority" type="radio" />
              <GRadioRaplace
                colorSelect={GColor.priority.low}
                rounded={TODO_CONFIG.priority.rounded}
                isSelect={priority === TODO_CONFIG.priority.levels.low}
              />
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
            <GButtSubmit onClick={() => deleteItem(item?.id)} gradient={GColor.gradients.red} fz={18}>
              delete
            </GButtSubmit>
          </GEditItem>
        )}
      </GEditItems>
    </GEditWrapper>
  );
};

export default TodoEditorComponent;
