"use client";

import { FC, useContext, useState } from "react";
import { PickerContextType } from "@/types/picker.types";
import { PickerContext } from "@/contexts";
import cn from "classnames";
import { MetricItem } from "@/components/MetricItem";
import { MetricTypeItem } from "@/components/MetricTypeItem";

interface Metrics2DProps {}

export const Metrics2D: FC<Metrics2DProps> = ({}) => {
    const { model, setStage } = useContext<PickerContextType>(PickerContext);
    const [type, setType] = useState<string>("Квадрат");
    const [width, setWidth] = useState<string>("0");
    const [length, setLength] = useState<string>("0");
    const [radius1, setRadius1] = useState<string>("0");
    const [radius2, setRadius2] = useState<string>("0");

    const onContinue = () => {
        const request = {
            Name: type,
            Type: model,
            Length: length !== "0" ? length : undefined,
            Width: width !== "0" ? width : undefined,
            Radius1: radius1 !== "0" ? radius1 : undefined,
            Radius2: radius2 !== "0" ? radius2 : undefined,
            Category: "Примитив",
        };

        localStorage.setItem("request", JSON.stringify(request));
        setStage("generate");
    };

    return (
        <div className="metrics">
            <h1 className="metrics__back" onClick={() => setStage("model")}>
                Назад
            </h1>
            <h1 className="model__picker__title">Укажите тип фигуры</h1>
            <div className="model__picker__types">
                <MetricTypeItem title="Квадрат" type={type} setType={setType} />
                <MetricTypeItem title="Круг" type={type} setType={setType} />
                <MetricTypeItem
                    title="Прямоугольник"
                    type={type}
                    setType={setType}
                />
                <MetricTypeItem title="Эллипс" type={type} setType={setType} />
                <MetricTypeItem title="Ромб" type={type} setType={setType} />
            </div>
            <h1 className="model__picker__title">Укажите параметры фигуры</h1>
            <div className="model__parameters">
                {(type === "Квадрат" ||
                    type === "Прямоугольник" ||
                    type === "Ромб") && (
                    <>
                        <MetricItem
                            value={length}
                            setValue={setLength}
                            title={"Длина"}
                        />
                        <MetricItem
                            value={width}
                            setValue={setWidth}
                            title={"Ширина"}
                        />
                    </>
                )}
                {type === "Круг" && (
                    <MetricItem
                        value={radius1}
                        setValue={setRadius1}
                        title={"Радиус 1"}
                    />
                )}
                {type === "Эллипс" && (
                    <>
                        <MetricItem
                            value={radius1}
                            setValue={setRadius1}
                            title={"Радиус 1"}
                        />
                        <MetricItem
                            value={radius2}
                            setValue={setRadius2}
                            title={"Радиус 2"}
                        />
                    </>
                )}
            </div>
            <button className="btn" onClick={onContinue}>
                Продолжить
            </button>
        </div>
    );
};
