"use client";

import { FC, useContext } from "react";
import { PickerContext } from "@/contexts";
import { PickerContextType } from "@/types/picker.types";
import cn from "classnames";

export const ModelPicker: FC = ({}) => {
    const { model, setModel, setStage } =
        useContext<PickerContextType>(PickerContext);

    return (
        <div className="model__picker">
            <h1 className="model__picker__title">Укажите формат модели</h1>
            <div className="model__picker__types">
                <h1
                    className={cn(
                        "model__picker__types__item",
                        model === "2D" && "active"
                    )}
                    onClick={() => setModel("2D")}
                >
                    2D Фигура
                </h1>
                <h1
                    className={cn(
                        "model__picker__types__item",
                        model === "3D" && "active"
                    )}
                    onClick={() => setModel("3D")}
                >
                    3D Фигура
                </h1>
            </div>
            <button className="btn" onClick={() => setStage("metrics")}>
                Продолжить
            </button>
        </div>
    );
};
