"use client";

import { FC, useContext, useEffect, useState } from "react";
import { PickerContextType } from "@/types/picker.types";
import { PickerContext } from "@/contexts";
import { MetricTypeItem } from "@/components/MetricTypeItem";
import { MetricItem } from "@/components/MetricItem";

interface Metrics3DProps {}

export const Metrics3D: FC<Metrics3DProps> = ({}) => {
    const { model, setStage } = useContext<PickerContextType>(PickerContext);
    const [type, setType] = useState<string>("Цилиндр");
    const [category, setCategory] = useState<string>("Примитив");
    const [width, setWidth] = useState<string>("0");
    const [height, setHeight] = useState<string>("0");
    const [length, setLength] = useState<string>("0");
    const [radius1, setRadius1] = useState<string>("0");
    const [radius2, setRadius2] = useState<string>("0");

    const onContinue = () => {
        const request = {
            Name: type,
            Type: model,
            Length: length !== "0" ? length : undefined,
            Width: width !== "0" ? width : undefined,
            Height: height !== "0" ? height : undefined,
            Radius1: radius1 !== "0" ? radius1 : undefined,
            Radius2: radius2 !== "0" ? radius2 : undefined,
            Category: category,
        };

        localStorage.setItem("request", JSON.stringify(request));
        setStage("generate");
    };

    useEffect(() => {
        console.log(category);
    }, [category]);

    return (
        <div className="metrics">
            <h1 className="metrics__back" onClick={() => setStage("model")}>
                Назад
            </h1>
            <h1 className="model__picker__title">Укажите категорию</h1>
            <div className="model__picker__types">
                <MetricTypeItem
                    type={category}
                    setType={setCategory}
                    title={"Примитив"}
                />
                <MetricTypeItem
                    type={category}
                    setType={setCategory}
                    title={"Сложные фигуры"}
                />
            </div>
            <h1 className="model__picker__title">Укажите тип фигуры</h1>
            <div className="model__picker__types">
                {category === "Примитив" && (
                    <>
                        <MetricTypeItem
                            title="Цилиндр"
                            type={type}
                            setType={setType}
                        />
                        <MetricTypeItem
                            title="Конус"
                            type={type}
                            setType={setType}
                        />
                        <MetricTypeItem
                            title="Куб"
                            type={type}
                            setType={setType}
                        />
                        <MetricTypeItem
                            title="Параллелепипед"
                            type={type}
                            setType={setType}
                        />
                        <MetricTypeItem
                            title="Пирамида"
                            type={type}
                            setType={setType}
                        />
                        <MetricTypeItem
                            title="Призма треугольная"
                            type={type}
                            setType={setType}
                        />
                        <MetricTypeItem
                            title="Шар"
                            type={type}
                            setType={setType}
                        />
                        <MetricTypeItem
                            title="Тор"
                            type={type}
                            setType={setType}
                        />
                    </>
                )}
                {category === "Сложные фигуры" && (
                    <>
                        <MetricTypeItem
                            title="Полый цилиндр"
                            type={type}
                            setType={setType}
                        />
                        <MetricTypeItem
                            title="Крест"
                            type={type}
                            setType={setType}
                        />
                        <MetricTypeItem
                            title="Шаблон"
                            type={type}
                            setType={setType}
                        />
                    </>
                )}
            </div>

            <h1 className="model__picker__title">Укажите параметры фигуры</h1>
            <div className="model__parameters">
                {(type === "Цилиндр" || type === "Конус") && (
                    <>
                        <MetricItem
                            value={height}
                            setValue={setHeight}
                            title={"Высота"}
                        />
                        <MetricItem
                            value={radius1}
                            setValue={setRadius1}
                            title={"Радиус 1"}
                        />
                    </>
                )}
                {(type === "Куб" ||
                    type === "Параллелепипед" ||
                    type === "Призма треугольная" ||
                    type === "Крест" ||
                    type === "Шаблон") && (
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
                        <MetricItem
                            value={height}
                            setValue={setHeight}
                            title={"Высота"}
                        />
                    </>
                )}
                {type === "Пирамида" && (
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
                {type === "Шар" && (
                    <MetricItem
                        value={radius1}
                        setValue={setRadius1}
                        title={"Радиус 1"}
                    />
                )}
                {type === "Тор" && (
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
                {type === "Полый цилиндр" && (
                    <>
                        <MetricItem
                            value={height}
                            setValue={setHeight}
                            title={"Высота"}
                        />
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
