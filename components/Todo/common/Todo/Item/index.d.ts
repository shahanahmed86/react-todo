import { FC } from "react";
import { TodoItem } from "../../types";
interface Props {
    items: TodoItem[];
    itemIndex: number;
    addItem: (item: TodoItem | TodoItem[], cursorLocation?: number | null | undefined, itemIndex?: number | undefined) => void;
    changeFocus: (focusIndex: number) => void;
    focus: number;
    onRemoveItem: (uuid: string) => void;
    onUpdateItem: (data: TodoItem) => void;
}
export declare const Item: FC<Props>;
export {};
