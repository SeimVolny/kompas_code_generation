"use client";

import { FC, useContext } from "react";
import { PickerContextType } from "@/types/picker.types";
import { PickerContext } from "@/contexts";
import { Metrics2D, Metrics3D } from "@/components";

export const MetricsPicker: FC = () => {
    const { model } = useContext<PickerContextType>(PickerContext);

    return (
        <div className="model__picker">
            {
                {
                    "2D": <Metrics2D />,
                    "3D": <Metrics3D />,
                }[model]
            }
        </div>
    );
};
