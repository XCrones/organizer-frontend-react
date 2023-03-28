import { useLayoutEffect, useMemo, useState } from "react";
import { shallow } from "zustand/shallow";
import { HeaderComponent, NotificationComponent, TodoEditorComponent, TodoItemComponent } from "../../components";
import { useNotif } from "../../hooks";
import { IHeaderButton, ITodo } from "../../models";
import { useTodosStore } from "../../store";
import { ListItem, ListItems, ListTitle, Todos, TodosWrapper } from "./Todos.style";

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
  const todosStore = useTodosStore(
    (state) => ({
      data: state.data,
      getAllData: state.getAllData,
      deleteData: state.deleteData,
      patchData: state.patchData,
      joinData: state.joinData,
    }),
    shallow
  );

  const [isHideCreate, SetHideCreate] = useState(true);
  const [isHideEdit, SetHideEdit] = useState(true);
  const [editTodo, SetEditTodo] = useState<ITodo | undefined>();

  const { isHideNotif, metaNotif, showNotif } = useNotif();

  const buttonsHeader: IHeaderButton = {
    callback: () => SetHideCreate(false),
    icon: "bi bi-plus-lg",
  };

  const editItem = (item: ITodo) => {
    const todoItem = JSON.parse(JSON.stringify(item)) as ITodo;
    SetEditTodo(todoItem);
    SetHideEdit(false);
  };

  const parseTodos = (todoItems: ITodo[]): IParsingTodo[] => {
    const sortArr = (arr: ITodo[]) => arr.sort((a, b) => (a.deadLine < b.deadLine ? -1 : 1));

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
        const makeDate = date.split("T");
        const dateStrg = makeDate[0].split("-");
        return {
          year: +dateStrg[0],
          month: +dateStrg[1],
          day: +dateStrg[2],
          full: new Date(Date.parse(date)).toLocaleDateString(),
        };
      };

      todoItems.forEach((todo) => {
        if (parseDate(todo.deadLine).full === localeDate.full) {
          todos.today.todos.push(todo);
        } else if (
          parseDate(todo.deadLine).month === localeDate.month &&
          parseDate(todo.deadLine).day === localeDate.day + 1
        ) {
          todos.tommorow.todos.push(todo);
        } else if (
          parseDate(todo.deadLine).month === localeDate.month &&
          parseDate(todo.deadLine).year === localeDate.year
        ) {
          todos.thisMonth.todos.push(todo);
        } else if (
          parseDate(todo.deadLine).year === localeDate.year &&
          parseDate(todo.deadLine).month >= localeDate.month
        ) {
          todos.thisYear.todos.push(todo);
        } else if (parseDate(todo.deadLine).year > localeDate.year) {
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

  const memoizeList = useMemo(() => (todosStore.data.length > 0 ? parseTodos(todosStore.data) : []), [todosStore.data]);

  useLayoutEffect(() => {
    todosStore.getAllData();
  }, []);

  return (
    <TodosWrapper>
      <NotificationComponent isHide={isHideNotif} meta={metaNotif} />
      <HeaderComponent butt={buttonsHeader} title={"toDo"} />
      <Todos>
        <ListItems>
          {memoizeList.map((item) => (
            <ListItem isHide={item.todos.length === 0} key={item.title}>
              <ListTitle>{item.title}</ListTitle>
              {item.todos.map((todo) => (
                <TodoItemComponent key={todo.id} item={todo} callbackEdit={editItem} />
              ))}
            </ListItem>
          ))}
        </ListItems>

        {!isHideCreate && (
          <TodoEditorComponent
            item={undefined}
            callbackClose={() => SetHideCreate(true)}
            titleWindow="todo"
            titleSubmit="join"
            callbackSubmit={todosStore.joinData}
            isShowDelete={false}
            callbackNotif={showNotif}
          />
        )}
        {!isHideEdit && (
          <TodoEditorComponent
            item={editTodo}
            callbackClose={() => SetHideEdit(true)}
            titleWindow="todo"
            titleSubmit="save"
            callbackSubmit={todosStore.patchData}
            isShowDelete={true}
            callbackDelete={todosStore.deleteData}
            callbackNotif={showNotif}
          />
        )}
      </Todos>
    </TodosWrapper>
  );
};

export default TodosPage;
