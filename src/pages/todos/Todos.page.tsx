import TodoListComponent from "../../components/Todos/TodoList.component";
import TodoExampleComponent from "../../components/Todos/TodoExample.component";
import style from "./Todos.module.scss";
import { Examples, Items, TodosWrapper } from "./Todos.style";

interface Props {}

const TodosComponent = () => {
  return (
    <TodosWrapper>
      <Examples>
        <TodoExampleComponent />
      </Examples>
      <Items className={style.scroll}>
        <TodoListComponent />
      </Items>
    </TodosWrapper>
  );
};

export default TodosComponent;
