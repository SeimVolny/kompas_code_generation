import { Dispatch, FC, SetStateAction } from "react";

interface MetricItemProps {
    value: number | string;
    setValue: Dispatch<SetStateAction<string>>;
    title: string;
}

export const MetricItem: FC<MetricItemProps> = ({ title, value, setValue }) => {
    return (
        <div className="model__parameters__item">
            <h1 className="model__parameters__item__title">{title}</h1>
            <input
                type="text"
                className="model__parameters__item__input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
};
