import { useMemo } from "react";
import { ITodo } from "../../models/todos.models";
import { GCheckboxItem, GCheckboxReplace } from "../../style/components/checkbox.style";
import { color } from "../../style/variables.style";
import { Item, ItemDate, ItemEdit, ItemInfo, ItemTitle, ItemTriangle } from "./ListItem.style";

interface Props {
  item: ITodo;
  callbackToggle: Function;
  callbackEdit: Function;
}

const TodoItemComponent = ({ item, callbackEdit, callbackToggle }: Props) => {
  const parseDate = (date: string): string => {
    const parseDate = new Date(Date.parse(date)).toLocaleDateString();
    return parseDate;
  };

  const memoizeDate = useMemo(() => parseDate(item.deadline), [item.deadline]);

  const parsePriority = (priority: number) => {
    switch (priority) {
      case 0:
        return color.priority.hight;
      case 1:
        return color.priority.medium;
      case 2:
        return color.priority.low;
      default:
        return "";
    }
  };

  const memoizePriority = useMemo(() => parsePriority(item.priority), [item.priority]);

  return (
    <Item bgColor={color.todoItem}>
      <GCheckboxItem size={20}>
        <input onClick={() => callbackToggle(item)} type="checkbox" />
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
