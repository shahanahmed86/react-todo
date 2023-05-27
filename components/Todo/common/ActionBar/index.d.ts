interface AppBarProps {
    onUndo: () => void;
    onRedo: () => void;
    canUndo: boolean;
    canRedo: boolean;
}
export declare function ActionBar({ onUndo, canUndo, onRedo, canRedo }: AppBarProps): JSX.Element;
export {};
