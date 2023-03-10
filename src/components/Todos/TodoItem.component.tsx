import { useCallback, useMemo } from "react";
import { shallow } from "zustand/shallow";
import { TODO_CONFIG } from "../../config/components/components-config";
import { FORM_TODO_CONFIG } from "../../config/forms/form-config";
import { ITodo, ITriangle } from "../../models";
import { useTodosStore } from "../../store";
import { GCheckboxItem, GCheckboxReplace } from "../../ui";
import { GColor } from "../../ui/variables.style";
import { Item, ItemDate, ItemEdit, ItemInfo, ItemTitle, ItemTriangle } from "./TodoItem.style";

interface Props {
  item: ITodo;
  callbackEdit: Function;
}

const TodoItemComponent = ({ item, callbackEdit }: Props) => {
  const todosStore = useTodosStore(
    (state) => ({
      patchData: state.patchData,
    }),
    shallow
  );

  const parseDate = (date: string): string => new Date(Date.parse(date)).toLocaleString();
  const memoizeDate = useMemo(() => parseDate(item.deadline), [item.deadline]);

  const parsePriority = (priority: number): string => {
    switch (priority) {
      case FORM_TODO_CONFIG.priority.levels.hight:
        return GColor.priority.hight;
      case FORM_TODO_CONFIG.priority.levels.medium:
        return GColor.priority.medium;
      case FORM_TODO_CONFIG.priority.levels.low:
        return GColor.priority.low;
      default:
        return "";
    }
  };
  const memoizePriority = useMemo(() => parsePriority(item.priority), [item.priority]);

  const toggleStatus = useCallback(() => {
    const todoItem = JSON.parse(JSON.stringify(item)) as ITodo;
    todoItem.status = !todoItem.status;
    todosStore.patchData(todoItem);
  }, [item]);

  const metaTriangle: ITriangle = {
    size: {
      t: 0,
      r: 17,
      b: 17,
      l: 0,
    },
    borderColor: {
      t: "transparent",
      r: memoizePriority,
      b: "transparent",
      l: "transparent",
    },
  };

  return (
    <Item bgColor={GColor.todoItem}>
      <GCheckboxItem size={TODO_CONFIG.status.size}>
        <input onClick={toggleStatus} type="checkbox" />
        <GCheckboxReplace colorSelect={item.background} isSelect={item.status} rounded={TODO_CONFIG.status.rounded} />
      </GCheckboxItem>
      <ItemInfo>
        <ItemTitle>{item.title}</ItemTitle>
        <ItemDate>{memoizeDate}</ItemDate>
      </ItemInfo>
      <ItemEdit color={item.background} onClick={() => callbackEdit(item)}>
        <i className="bi bi-info-square"></i>
      </ItemEdit>
      <ItemTriangle borderColor={metaTriangle.borderColor} size={metaTriangle.size} />
    </Item>
  );
};

export default TodoItemComponent;
