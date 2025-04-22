import { createContext } from "react";
import { PickerContextType } from "@/types/picker.types";

export const PickerContext = createContext<PickerContextType>({
    model: "2D",
    setModel: () => {},
    setStage: () => {},
});
