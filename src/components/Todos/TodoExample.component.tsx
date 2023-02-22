import { useWindowSize } from "../../hooks/windowResize";
import { TodoExampleItems, TodoExpampleWrapper } from "./TodoExample.style";
import TodoExampleItemComponent, { IExampleItem } from "./TodoExampleItem.component";

interface Props {}

const TodosPreviewComponent = () => {
  const {
    size: { innerWidth },
  } = useWindowSize({ totalHeight: 0, totalWidth: 0 });

  const arr: IExampleItem[] = [
    { id: 1, count: 5, time: "22.01(10pm)" },
    { id: 2, count: 2, time: "13.00(01pm)" },
    { id: 3, count: 8, time: "08.00(08am)" },
  ];

  const callback = (id: number) => console.log(`call settings example id: ${id}`);

  return (
    <TodoExpampleWrapper>
      <TodoExampleItems maxWidth={innerWidth}>
        {arr.map((item) => (
          <TodoExampleItemComponent key={item.id} item={item} callback={callback} />
        ))}
      </TodoExampleItems>
    </TodoExpampleWrapper>
  );
};

export default TodosPreviewComponent;
