import { TodoItem } from "./common/types";
export interface TodoAppProps {
    defaultItems?: TodoItem[];
    onChange: (items: TodoItem[]) => void;
}
declare function TodoApp(props: TodoAppProps): JSX.Element;
export default TodoApp;
