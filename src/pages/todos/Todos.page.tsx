import TodoListComponent from "../../components/todos/TodoList.component";
import TodoExampleComponent from "../../components/todos/TodoExample.component";
import { Examples, Items, Todos, TodosWrapper } from "./Todos.style";
import HeaderComponent, { IButtonHeader } from "../../components/header/Header";
import { useState } from "react";
import CreateTodoComponent from "../../components/todos/CreateTodo.component";

interface Props {}

const TodosPage = () => {
  const [isHideCreate, SetHideCreate] = useState(true);

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

  return (
    <TodosWrapper>
      <HeaderComponent buttns={buttonsHeader} title={"toDo"} />
      {isHideCreate && (
        <Todos>
          <Examples>
            <TodoExampleComponent />
          </Examples>
          <Items>
            <TodoListComponent />
          </Items>
        </Todos>
      )}
      {!isHideCreate && <CreateTodoComponent callbackClose={() => SetHideCreate(true)} title="todo" />}
    </TodosWrapper>
  );
};

export default TodosPage;
