import { useEffect } from "react";
import style from "./TodosList.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addTodo, fetchOneTodo, fetchTodos, editTodo } from "../../store/slices/todos.slice";
import { ITodo, ITodoCreate } from "../../models/todos.models";
import TodoItemComponent from "./TodoItem.component";
import { TodoListEmpty, TodoListItems, TodoListTitle, TodoListWrapper } from "./TodoList.style";
import { color } from "../../style/variables.style";

interface Props {}

const TodosListComponent = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);
  const date = new Date();

  const parseCurrDate = (date: Date) => {
    return {
      date: date.toISOString().split("T")[0],
      time: date.toISOString().split("T")[1],
    };
  };

  const parseTodoDate = (date: Date) => {
    return {
      date: String(date).split("T")[0],
      time: String(date).split("T")[1],
    };
  };

  const currDate = parseCurrDate(date);
  const tommorowDate = parseCurrDate(new Date(date.setDate(date.getDate() + 1)));

  const getTodayTodos = () => todos.filter((item) => parseTodoDate(item.deadline).date === currDate.date);
  const getTommorowTodos = () => todos.filter((item) => parseTodoDate(item.deadline).date === tommorowDate.date);

  const toggleStatus = (item: ITodo) => {
    const todoItem = JSON.parse(JSON.stringify(item)) as ITodo;
    todoItem.status = !todoItem.status;
    dispatch(editTodo(todoItem));
  };

  useEffect(() => {
    // const todo: ITodoCreate = {
    //   uid: 1,
    //   title: "test title 3",
    //   category: "test category",
    //   priority: 0,
    //   deadline: new Date(),
    //   status: false,
    //   descritption: "test description 3",
    // };
    // dispatch(addTodo(todo));
    // dispatch(fetchOneTodo(1));
    dispatch(fetchTodos());
  }, []);

  return (
    <TodoListWrapper>
      <TodoListEmpty>
        <TodoListTitle>today</TodoListTitle>
        <TodoListItems>
          {getTodayTodos().map((item) => (
            <TodoItemComponent
              key={item.id}
              itemTodo={item}
              toggleStatus={toggleStatus}
              colorButt={color.todoBtnToday}
            />
          ))}
        </TodoListItems>
      </TodoListEmpty>
      <TodoListEmpty>
        <TodoListTitle>tommorow</TodoListTitle>
        <TodoListItems>
          {getTommorowTodos().map((item) => (
            <TodoItemComponent
              key={item.id}
              itemTodo={item}
              toggleStatus={toggleStatus}
              colorButt={color.todoBtnTommorow}
            />
          ))}
        </TodoListItems>
      </TodoListEmpty>
    </TodoListWrapper>
  );
};

export default TodosListComponent;
