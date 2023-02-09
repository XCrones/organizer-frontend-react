import {
  TodoExampleButt,
  TodoExampleItem,
  TodoExampleLine,
  TodoExampleSubTitle,
  TodoExampleTitle,
  TodoExpampleCount,
  TodoExpampleTime,
} from "./TodoExampleItem.style";

export interface IExampleItem {
  id: number;
  count: number;
  time: string;
}

interface Props {
  callback: Function;
  item: IExampleItem;
}

const TodoExampleItemComponent = ({ item: { count, id, time }, callback }: Props) => {
  return (
    <TodoExampleItem>
      <TodoExampleButt onClick={() => callback(id)} />
      <TodoExampleTitle>example project test</TodoExampleTitle>
      <TodoExampleLine />
      <TodoExpampleTime>
        <i className="bi bi-clock-fill"></i>
        <TodoExampleSubTitle>{time}</TodoExampleSubTitle>
      </TodoExpampleTime>
      <TodoExpampleCount>
        <i className="bi bi-check2-circle"></i>
        <TodoExampleSubTitle>{`${count} Tasks`}</TodoExampleSubTitle>
      </TodoExpampleCount>
    </TodoExampleItem>
  );
};

export default TodoExampleItemComponent;
