import { useMemo } from "react";
import { ITodo } from "../../models/todos.models";
import { GCheckboxItem, GCheckboxReplace } from "../../style/components/checkbox.style";
import { color } from "../../style/variables.style";
import { Item, ItemDate, ItemInfo, ItemTitle, ItemTriangle } from "./ListItem.style";

interface Props {
  item: ITodo;
  toggleStatus: Function;
  background: string;
}

const TodoItemComponent = ({ item, toggleStatus, background }: Props) => {
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
        <input onClick={() => toggleStatus(item)} type="checkbox" />
        <GCheckboxReplace colorSelect={background} isSelect={item.status} rounded={25} />
      </GCheckboxItem>
      <ItemInfo>
        <ItemTitle>{item.title}</ItemTitle>
        <ItemDate>{memoizeDate}</ItemDate>
      </ItemInfo>
      <ItemTriangle background={memoizePriority} />
    </Item>
  );
};

export default TodoItemComponent;
