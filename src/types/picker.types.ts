export type ModelType = "2D" | "3D";
export type PickerStage = "model" | "metrics" | "generate";
export type PickerContextType = {
    model: ModelType;
    setModel: (model: ModelType) => void;
    setStage: (stage: PickerStage) => void;
};
