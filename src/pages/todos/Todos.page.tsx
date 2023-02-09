import TodoListComponent from "../../components/todos/TodoList.component";
import TodoExampleComponent from "../../components/todos/TodoExample.component";
import { Examples, Items, TodosWrapper } from "./Todos.style";
import HeaderComponent, { IButtonHeader } from "../../components/header/Header";

interface Props {}

const TodosPage = () => {
  const callbackPlus = () => {};
  const callbackSearch = () => {};
  const buttonsHeader: IButtonHeader[] = [
    {
      callback: callbackPlus,
      icon: "bi bi-search",
    },
    {
      callback: callbackSearch,
      icon: "bi bi-plus-lg",
    },
  ];

  return (
    <TodosWrapper>
      <HeaderComponent buttns={buttonsHeader} title={"toDo"} />
      <Examples>
        <TodoExampleComponent />
      </Examples>
      <Items>
        <TodoListComponent />
      </Items>
    </TodosWrapper>
  );
};

export default TodosPage;
