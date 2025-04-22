import { createContext } from "react";
import {
    ModelType,
    PickerContextType,
    PickerStage,
} from "@/types/picker.types";

export const PickerContext = createContext<PickerContextType>({
    model: "2D",
    setModel: (model: ModelType) => {},
    setStage: (stage: PickerStage) => {},
});
