import {
  TodoExampleButt,
  TodoExampleItem,
  TodoExampleItems,
  TodoExampleSubTitle,
  TodoExampleTitle,
  TodoExpampleTime,
  TodoExpampleWrapper,
} from "./TodoExample.style";

interface Props {}

const TodosPreviewComponent = () => {
  const expample1 = "22.01(10pm)";

  return (
    <TodoExpampleWrapper>
      <TodoExampleItems>
        <TodoExampleItem>
          <TodoExampleButt onClick={() => console.log("open setting")} />
          <TodoExampleTitle>example project test</TodoExampleTitle>
          <TodoExpampleTime>
            <i className="bi bi-clock-fill"></i>
            <TodoExampleSubTitle>{expample1}</TodoExampleSubTitle>
          </TodoExpampleTime>
          <TodoExpampleTime>
            <i className="bi bi-check2-circle"></i>
            <TodoExampleSubTitle>{expample1}</TodoExampleSubTitle>
          </TodoExpampleTime>
        </TodoExampleItem>
      </TodoExampleItems>
    </TodoExpampleWrapper>
  );
};

export default TodosPreviewComponent;
