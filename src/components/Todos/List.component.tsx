import { useEffect, useLayoutEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchTodos, editTodo } from "../../store/slices/todos.slice";
import { ITodo } from "../../models/todos.models";
import TodoItemComponent from "./ListItem.component";
import { ListItem, ListItems, ListTitle } from "./List.style";

interface Props {}

interface IParsingTodo {
  title: string;
  todos: ITodo[];
}

const TodosListComponent = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);

  const [list, SetList] = useState<IParsingTodo[]>([]);

  const toggleStatus = (item: ITodo) => {
    const todoItem = JSON.parse(JSON.stringify(item)) as ITodo;
    todoItem.status = !todoItem.status;
    dispatch(editTodo(todoItem));
  };

  useLayoutEffect(() => {
    dispatch(fetchTodos());
  }, []);

  useEffect(() => {
    if (todos.thisMonth.todos.length > 0 || todos.thisYear.todos.length > 0 || todos.more.todos.length > 0) {
      SetList(Object.values(todos));
    }
  }, [todos]);

  return (
    <ListItems>
      {list.map((item) => (
        <ListItem key={item.title}>
          <ListTitle>{item.title}</ListTitle>
          {item.todos.map((todo) => (
            <TodoItemComponent key={todo.id} item={todo} background={todo.background} toggleStatus={toggleStatus} />
          ))}
        </ListItem>
      ))}
    </ListItems>
  );
};

export default TodosListComponent;
