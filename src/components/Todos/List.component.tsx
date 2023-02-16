import { useEffect, useLayoutEffect, useMemo, useState } from "react";
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

interface ITodos {
  thisMonth: {
    title: "this month";
    todos: ITodo[];
  };
  thisYear: {
    title: "this year";
    todos: ITodo[];
  };
  more: {
    title: "more";
    todos: ITodo[];
  };
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

  const editItem = (item: ITodo) => {
    const todoItem = JSON.parse(JSON.stringify(item)) as ITodo;
    console.log(item);
    // todoItem.status = !todoItem.status;
    // dispatch(editTodo(todoItem));
  };

  useLayoutEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const parseTodos = (todoItems: ITodo[]) => {
    try {
      const todos: ITodos = {
        thisMonth: {
          title: "this month",
          todos: [],
        },
        thisYear: {
          title: "this year",
          todos: [],
        },
        more: {
          title: "more",
          todos: [],
        },
      };

      const localeDate = {
        year: +new Date().toLocaleDateString().split(".")[2],
        month: +new Date().toLocaleDateString().split(".")[1],
      };

      const parseDate = (date: string) => {
        const makeDate = new Date(Date.parse(date)).toLocaleDateString().split(".");
        return {
          year: +makeDate[2],
          month: +makeDate[1],
        };
      };

      todoItems.forEach((todo) => {
        if (parseDate(todo.deadline).year > localeDate.year) {
          todos.more.todos.push(todo);
        } else if (parseDate(todo.deadline).month === localeDate.month) {
          todos.thisMonth.todos.push(todo);
        } else if (parseDate(todo.deadline).year === localeDate.year) {
          todos.thisYear.todos.push(todo);
        }
      });

      todos.thisMonth.todos.sort((a, b) => (a.deadline < b.deadline ? -1 : 1));
      todos.thisYear.todos.sort((a, b) => (a.deadline < b.deadline ? -1 : 1));
      todos.more.todos.sort((a, b) => (a.deadline < b.deadline ? -1 : 1));

      return todos;
    } catch (err) {
      console.log(err);
      return {
        thisMonth: {
          title: "this month",
          todos: [],
        },
        thisYear: {
          title: "this year",
          todos: [],
        },
        more: {
          title: "more",
          todos: todoItems,
        },
      };
    }
  };

  const memoizeList = useMemo(() => parseTodos(todos), [todos]);

  useEffect(() => {
    if (todos.length > 0) {
      SetList(Object.values(memoizeList));
      console.log(memoizeList);
    }
  }, [todos]);

  return (
    <ListItems>
      {list.map((item) => (
        <ListItem key={item.title}>
          <ListTitle>{item.title}</ListTitle>
          {item.todos.map((todo) => (
            <TodoItemComponent key={todo.id} item={todo} callbackToggle={toggleStatus} callbackEdit={editItem} />
          ))}
        </ListItem>
      ))}
    </ListItems>
  );
};

export default TodosListComponent;
