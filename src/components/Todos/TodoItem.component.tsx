import { useCallback, useMemo } from "react";
import { shallow } from "zustand/shallow";
import { ITodo } from "../../models";
import { useTodosStore } from "../../store";
import { GCheckboxItem, GCheckboxReplace } from "../../ui";
import { GColor } from "../../ui/variables.style";
import { Item, ItemDate, ItemEdit, ItemInfo, ItemTitle, ItemTriangle } from "./TodoItem.style";

interface Props {
  item: ITodo;
  callbackEdit: Function;
}

const TodoItemComponent = ({ item, callbackEdit }: Props) => {
  const patchData = useTodosStore((state) => state.patchData, shallow);

  const parseDate = (date: string): string => new Date(Date.parse(date)).toLocaleString();
  const memoizeDate = useMemo(() => parseDate(item.deadline), [item.deadline]);

  const parsePriority = (priority: number) => {
    switch (priority) {
      case 0:
        return GColor.priority.hight;
      case 1:
        return GColor.priority.medium;
      case 2:
        return GColor.priority.low;
      default:
        return "";
    }
  };
  const memoizePriority = useMemo(() => parsePriority(item.priority), [item.priority]);

  const toggleStatus = useCallback(() => {
    const todoItem = JSON.parse(JSON.stringify(item)) as ITodo;
    todoItem.status = !todoItem.status;
    patchData(todoItem);
  }, [item]);

  return (
    <Item bgColor={GColor.todoItem}>
      <GCheckboxItem size={20}>
        <input onClick={toggleStatus} type="checkbox" />
        <GCheckboxReplace colorSelect={item.background} isSelect={item.status} rounded={15} />
      </GCheckboxItem>
      <ItemInfo>
        <ItemTitle>{item.title}</ItemTitle>
        <ItemDate>{memoizeDate}</ItemDate>
      </ItemInfo>
      <ItemEdit color={item.background} onClick={() => callbackEdit(item)} type="button">
        <i className="bi bi-info-square"></i>
      </ItemEdit>
      <ItemTriangle background={memoizePriority} />
    </Item>
  );
};

export default TodoItemComponent;
