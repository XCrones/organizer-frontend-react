import { ListItem, ListItems, ListTitle, Todos, TodosWrapper } from "./Todos.style";
import HeaderComponent, { IButtonHeader } from "../../components/header/Header";
import { useLayoutEffect, useMemo, useState } from "react";
import CreateTodoComponent from "../../components/todos/CreateTodo.component";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ITodo } from "../../models/todos.models";
import { patchTodo, fetchTodos, joinTodo } from "../../store/slices/todos.slice";
import TodoItemComponent from "../../components/todos/ListItem.component";

interface Props {}

interface IParsingTodo {
  title: string;
  todos: ITodo[];
}

interface ITodos {
  today: {
    title: "today";
    todos: ITodo[];
  };
  tommorow: {
    title: "tommorow";
    todos: ITodo[];
  };
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

const TodosPage = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);

  const [isHideCreate, SetHideCreate] = useState(true);
  const [isHideEdit, SetHideEdit] = useState(true);
  const [editTodo, SetEditTodo] = useState<ITodo | undefined>();

  const buttonsHeader: IButtonHeader[] = [
    {
      callback: () => {},
      icon: "bi bi-search",
    },
    {
      callback: () => SetHideCreate(false),
      icon: "bi bi-plus-lg",
    },
  ];

  const toggleStatus = (item: ITodo) => {
    const todoItem = JSON.parse(JSON.stringify(item)) as ITodo;
    todoItem.status = !todoItem.status;
    dispatch(patchTodo(todoItem));
  };

  const editItem = (item: ITodo) => {
    const todoItem = JSON.parse(JSON.stringify(item)) as ITodo;
    SetEditTodo(todoItem);
    SetHideEdit(false);
  };

  useLayoutEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const parseTodos = (todoItems: ITodo[]): IParsingTodo[] => {
    const sortArr = (arr: ITodo[]) => arr.sort((a, b) => (a.deadline < b.deadline ? -1 : 1));

    try {
      const todos: ITodos = {
        today: {
          title: "today",
          todos: [],
        },
        tommorow: {
          title: "tommorow",
          todos: [],
        },
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
        day: +new Date().toLocaleDateString().split(".")[0],
        full: new Date().toLocaleDateString(),
      };

      const parseDate = (date: string) => {
        const makeDate = new Date(Date.parse(date)).toLocaleDateString();
        return {
          year: +makeDate.split(".")[2],
          month: +makeDate.split(".")[1],
          day: +makeDate.split(".")[0],
          full: makeDate,
        };
      };

      todoItems.forEach((todo) => {
        if (parseDate(todo.deadline).full === localeDate.full) {
          todos.today.todos.push(todo);
        } else if (
          parseDate(todo.deadline).month === localeDate.month &&
          parseDate(todo.deadline).day === localeDate.day + 1
        ) {
          todos.tommorow.todos.push(todo);
        } else if (
          parseDate(todo.deadline).month === localeDate.month &&
          parseDate(todo.deadline).year === localeDate.year
        ) {
          todos.thisMonth.todos.push(todo);
        } else if (
          parseDate(todo.deadline).year === localeDate.year &&
          parseDate(todo.deadline).month >= localeDate.month
        ) {
          todos.thisYear.todos.push(todo);
        } else if (parseDate(todo.deadline).year > localeDate.year) {
          todos.more.todos.push(todo);
        }
      });

      todos.today.todos = sortArr(todos.today.todos);
      todos.tommorow.todos = sortArr(todos.tommorow.todos);
      todos.thisMonth.todos = sortArr(todos.thisMonth.todos);
      todos.thisYear.todos = sortArr(todos.thisYear.todos);
      todos.more.todos = sortArr(todos.more.todos);

      return Object.values(todos);
    } catch (err) {
      console.log("err", err);

      const sortingData = sortArr(JSON.parse(JSON.stringify(todoItems)));
      const todos: ITodos = {
        today: {
          title: "today",
          todos: [],
        },
        tommorow: {
          title: "tommorow",
          todos: [],
        },
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
          todos: sortingData,
        },
      };
      return Object.values(todos);
    }
  };

  const memoizeList = useMemo(() => parseTodos(todos) as IParsingTodo[], [todos]);

  return (
    <TodosWrapper>
      <HeaderComponent buttns={buttonsHeader} title={"toDo"} />
      <Todos>
        {/* <Examples>
            <TodoExampleComponent />
          </Examples> */}
        {/* <Items>
            <TodoListComponent />
          </Items> */}
        <ListItems>
          {memoizeList.map((item) => (
            <ListItem isHide={item.todos.length === 0} key={item.title}>
              <ListTitle>{item.title}</ListTitle>
              {item.todos.map((todo) => (
                <TodoItemComponent key={todo.id} item={todo} callbackToggle={toggleStatus} callbackEdit={editItem} />
              ))}
            </ListItem>
          ))}
        </ListItems>
        {!isHideCreate && (
          <CreateTodoComponent
            item={undefined}
            callbackClose={() => SetHideCreate(true)}
            titleWindow="todo"
            titleSubmit="join"
            callbackSubmit={joinTodo}
          />
        )}
        {!isHideEdit && (
          <CreateTodoComponent
            item={editTodo}
            callbackClose={() => SetHideEdit(true)}
            titleWindow="todo"
            titleSubmit="save"
            callbackSubmit={patchTodo}
          />
        )}
      </Todos>
    </TodosWrapper>
  );
};

export default TodosPage;
