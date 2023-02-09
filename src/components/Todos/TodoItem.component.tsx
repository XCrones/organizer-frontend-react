import { ITodo } from "../../models/todos.models";
import { color } from "../../style/variables.style";
import { TodoItemButt, TodoItem, TodoItemRadio, TodoItemRadioReplace, TodoItemTitle } from "./TodoItem.style";

interface Props {
  itemTodo: ITodo;
  toggleStatus: Function;
  colorButt: string;
}

const TodoItemComponent = ({ itemTodo: item, toggleStatus, colorButt }: Props) => {
  return (
    <TodoItem bgColor={color.todoItem}>
      <TodoItemButt>
        <TodoItemRadio onClick={() => toggleStatus(item)} type="radio" />
        <TodoItemRadioReplace color={colorButt} isStatus={item.status} />
      </TodoItemButt>
      <TodoItemTitle>{item.title}</TodoItemTitle>
    </TodoItem>
  );
};

export default TodoItemComponent;
