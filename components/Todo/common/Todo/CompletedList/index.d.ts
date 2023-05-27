import { FC } from "react";
import { TodoItem } from "../../types";
export interface TodoCompletedItemProps {
    items: TodoItem[];
    itemIndex: number;
    onUpdateItem: (data: TodoItem) => void;
}
export declare const TodoCompletedItem: FC<TodoCompletedItemProps>;
export interface TodoCompletedListProps {
    items: TodoItem[];
    completedItems: TodoItem[];
    onUpdateItem: (data: TodoItem) => void;
}
export declare const TodoCompletedList: FC<TodoCompletedListProps>;
