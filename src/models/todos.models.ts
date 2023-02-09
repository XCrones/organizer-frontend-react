export interface ITodo {
  id: number;
  uid: number;
  title: string;
  category: string;
  priority: number;
  deadline: Date;
  status: boolean;
  descritption: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITodoCreate {
  uid: number;
  title: string;
  category: string;
  priority: number;
  deadline: Date;
  status: boolean;
  descritption: string;
}
