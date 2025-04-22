import { FC } from "react";
import cn from "classnames";

interface MetricTypeItemProps {
    type: string;
    setType: (value: string) => void;
    title: string;
}

export const MetricTypeItem: FC<MetricTypeItemProps> = ({
    type,
    setType,
    title,
}) => {
    return (
        <h1
            className={cn(
                "model__picker__types__item",
                type === title && "active"
            )}
            onClick={() => setType(title)}
        >
            {title}
        </h1>
    );
};
