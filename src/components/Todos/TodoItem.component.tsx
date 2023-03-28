import { useCallback, useMemo } from "react";
import { shallow } from "zustand/shallow";
import { TODO_CONFIG } from "../../config/components/components-config";
import { ITodo, ITriangle } from "../../models/Interfaces";
import { useTodosStore } from "../../store";
import { GCheckboxItem } from "../../ui";
import { G_VARIABLES } from "../../ui/variables";
import { Item, ItemSubtitle, ItemButt, ItemInfo, ItemTitle, ItemTriangle, ItemCheckBox } from "./TodoItem.style";
import { EPriority } from "../../models/Enum";

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
  const memoizeDate = useMemo(() => parseDate(item.deadLine), [item.deadLine]);

  const parsePriority = (priority: number): string => {
    switch (priority) {
      case EPriority.hight:
        return G_VARIABLES.color.red.hight;
      case EPriority.medium:
        return G_VARIABLES.color.orange.medium;
      case EPriority.low:
        return G_VARIABLES.color.green.medium;
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
    <Item>
      <GCheckboxItem size={TODO_CONFIG.status.size}>
        <input onClick={toggleStatus} type="checkbox" />
        <ItemCheckBox isActive={item.status} colorSelect={item.background} rounded={TODO_CONFIG.status.rounded} />
      </GCheckboxItem>
      <ItemInfo>
        <ItemTitle>{item.name}</ItemTitle>
        <ItemSubtitle>{memoizeDate}</ItemSubtitle>
      </ItemInfo>
      <ItemButt color={item.background} onClick={() => callbackEdit(item)}>
        <i className="bi bi-info-square-fill"></i>
      </ItemButt>
      <ItemTriangle borderColor={metaTriangle.borderColor} size={metaTriangle.size} />
    </Item>
  );
};

export default TodoItemComponent;
