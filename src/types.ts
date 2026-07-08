export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export type FilterType = "all" | "done" | "active";

export type TodoAction =
  | {
      type: "ADD";
      payload: string;
    }
  | {
      type: "TOGGLE";
      payload: number;
    }
  | {
      type: "DELETE";
      payload: number;
    };
