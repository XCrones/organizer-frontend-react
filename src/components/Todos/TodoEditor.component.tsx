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
} from "../../ui";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDate } from "../../hooks";
import { IAxiosError, INotifMethods, ITodo, ITodoJoin, TPriority } from "../../models";
import { AxiosError } from "axios";
import { APP_MESSAGES } from "../../common/app-messages";
import { FORM_TODO_CONFIG } from "../../config/forms/form-config";
import { G_VARIABLES } from "../../ui/variables";
import { GEditButt } from "../../ui";

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
  const [priority, SetPriority] = useState<TPriority>(0);
  const [currColor, SetColor] = useState<string>(G_VARIABLES.pallete.editor[0]);

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
      const metaData: ITodoJoin = {
        name: data.todoName,
        category: data.category,
        priority: priority,
        deadLine: new Date(Date.parse(data.deadLine)).toISOString(),
        status: false,
        background: currColor,
      };

      if (!!item) {
        Object.assign(item, metaData);
        try {
          await callbackSubmit(item);
          callbackNotif.successful(APP_MESSAGES.CHANGE_SUCCES);
          callbackClose();
        } catch (error) {
          const err = error as AxiosError<IAxiosError>;
          if (!!err.response) {
            callbackNotif.error(err.response.data.message);
          }
        }
      } else {
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
            minLength={FORM_TODO_CONFIG.name.min}
            maxLength={FORM_TODO_CONFIG.name.max}
            {...register("todoName", {
              required: APP_MESSAGES.REQ_FIELD,
              minLength: {
                value: FORM_TODO_CONFIG.name.min,
                message: APP_MESSAGES.MIN_CHAR(FORM_TODO_CONFIG.name.min),
              },
              maxLength: {
                value: FORM_TODO_CONFIG.name.max,
                message: APP_MESSAGES.MAX_CHAR(FORM_TODO_CONFIG.name.max),
              },
              value: item?.name,
            })}
            placeholder={`${titleWindow} name`}
            type="text"
          />
        </GEditItem>
        <GEditItem>
          <GEditName
            minLength={FORM_TODO_CONFIG.category.min}
            maxLength={FORM_TODO_CONFIG.category.max}
            {...register("category", {
              required: APP_MESSAGES.REQ_FIELD,
              minLength: {
                value: FORM_TODO_CONFIG.category.min,
                message: APP_MESSAGES.MIN_CHAR(FORM_TODO_CONFIG.category.min),
              },
              maxLength: {
                value: FORM_TODO_CONFIG.category.max,
                message: APP_MESSAGES.MAX_CHAR(FORM_TODO_CONFIG.category.max),
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
              value: !!item ? makeLocalDate(item.deadLine) : "",
            })}
            type="datetime-local"
          />
        </GEditItem>
        <GEditItem>
          <GEditTitle>priority:</GEditTitle>
          <GEditRadioItems>
            <GRadioItem size={FORM_TODO_CONFIG.priority.size}>
              <input onClick={() => SetPriority(FORM_TODO_CONFIG.priority.levels.hight)} name="priority" type="radio" />
              <GRadioRaplace
                colorSelect={G_VARIABLES.color.red.hight}
                rounded={FORM_TODO_CONFIG.priority.rounded}
                isSelect={priority === FORM_TODO_CONFIG.priority.levels.hight}
              />
            </GRadioItem>

            <GRadioItem size={FORM_TODO_CONFIG.priority.size}>
              <input
                onClick={() => SetPriority(FORM_TODO_CONFIG.priority.levels.medium)}
                name="priority"
                type="radio"
              />
              <GRadioRaplace
                colorSelect={G_VARIABLES.color.orange.medium}
                rounded={FORM_TODO_CONFIG.priority.rounded}
                isSelect={priority === FORM_TODO_CONFIG.priority.levels.medium}
              />
            </GRadioItem>

            <GRadioItem size={FORM_TODO_CONFIG.priority.size}>
              <input onClick={() => SetPriority(FORM_TODO_CONFIG.priority.levels.low)} name="priority" type="radio" />
              <GRadioRaplace
                colorSelect={G_VARIABLES.color.green.medium}
                rounded={FORM_TODO_CONFIG.priority.rounded}
                isSelect={priority === FORM_TODO_CONFIG.priority.levels.low}
              />
            </GRadioItem>
          </GEditRadioItems>
        </GEditItem>
        <GEditItem>
          <GEditPallete>
            {G_VARIABLES.pallete.editor.map((item) => (
              <GEditPalleteItem
                key={item}
                onClick={() => SetColor(item)}
                isSelect={item === currColor}
                background={item}
              ></GEditPalleteItem>
            ))}
          </GEditPallete>
        </GEditItem>
        {isShowDelete && <GEditButt onClick={() => deleteItem(item?.id)}>delete</GEditButt>}
      </GEditItems>
    </GEditWrapper>
  );
};

export default TodoEditorComponent;
