import { TodoItem } from "../../types";
export interface AddProps {
    addItem: (item: TodoItem | TodoItem[], cursorLocation?: number | null | undefined) => void;
    changeFocus: (focusIndex: number) => void;
}
export declare const Form: (props: AddProps) => JSX.Element;
