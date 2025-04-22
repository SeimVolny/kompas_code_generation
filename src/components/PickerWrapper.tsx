"use client";

import { FC, useState } from "react";
import { Generate, MetricsPicker, ModelPicker } from "@/components";
import { PickerContext } from "@/contexts/PickerContext";

import cn from "classnames";

import { ModelType, PickerStage } from "@/types/picker.types";

export const PickerWrapper: FC = () => {
    const [stage, setStage] = useState<PickerStage>("model");
    const [model, setModel] = useState<ModelType>("2D");

    return (
        <PickerContext.Provider value={{ model, setModel, setStage }}>
            <section className={cn("picker__wrapper", stage)}>
                {
                    {
                        model: <ModelPicker />,
                        metrics: <MetricsPicker />,
                        generate: <Generate />,
                    }[stage]
                }
            </section>
        </PickerContext.Provider>
    );
};
