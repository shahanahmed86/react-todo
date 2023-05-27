import { FC, ReactNode } from 'react';
interface AccordionProps {
    title: string;
    defaultExpanded?: boolean;
    children: ReactNode;
}
export declare const Accordion: FC<AccordionProps>;
export {};
